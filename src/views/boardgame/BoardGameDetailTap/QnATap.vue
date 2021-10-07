<template>
    <div class="row py-2">
        <!-- 질문 -->
        <div class="col-sm-1"><div class="p-1 bg-c8 fs-5">Q</div></div>
        <div class="col-sm-11 text-start">
            <div class="border-c8 mb-2 p-2 d-flex justify-content-between pe-4">
                <div>{{ ele.title }}</div>
                <div class="fc-c8 btn p-0" v-on:click="[toggle(), getReply(ele.id)]" v-if="!isSpread">
                    <span><i class="fas fa-caret-down"></i></span>
                </div>
                <div class="fc-c8 btn p-0" v-on:click="toggle" v-else>
                    <span><i class="fas fa-caret-up"></i></span>
                </div>
            </div>
            <div class="border-c8 mb-2 p-2" v-if="isSpread">{{ ele.content }}</div>
            <div class="fc-80 fw-light mb-2">{{ ele.writerId }} {{ getReviewDate(ele.addDate) }} <span v-if="ismine(ele.writerId)" v-on:click="delQna(ele.id)">삭제</span></div>
        </div>

        <!-- 답변 작성 -->
        <!-- <div class="col-sm-1" v-if="isSpread && !isRepled"></div>
        <div class="col-sm-1" v-if="isSpread && !isRepled"><div class="p-1 bg-db fs-5">A</div></div>
        <div class="col-sm-10 text-start" v-if="isSpread && !isRepled">
            <div class="input-group mb-2">
                <input type="text" class="form-control" placeholder="댓글 달기" aria-label="Recipient's username" aria-describedby="button-addon2" v-on:input="updateReply" />
                <button class="btn btn-outline-secondary" type="button" id="button-addon2" v-on:click="writeReply(ele.id)">작성</button>
            </div>
        </div> -->

        <!-- 답변 -->
        <div class="row" v-if="isSpread">
            <div class="col-sm-1"></div>
            <div class="col-sm-1"><div class="p-1 bg-db fs-5">A</div></div>
            <div class="col-sm-10 text-start">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="댓글 달기" aria-label="Recipient's username" aria-describedby="button-addon2" v-on:input="updateReply" />
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2" v-on:click="writeReply(ele.id)">작성</button>
                </div>
            </div>
        </div>
        <div v-if="isSpread && isRepled">
            <div class="row" v-for="re in reply" v-bind:key="re.id">
                <div class="col-sm-1"></div>
                <div class="col-sm-1"><div class="p-1 bg-db fs-5">A</div></div>
                <div class="col-sm-10 text-start">
                    <div class="border-db mb-2 p-2">{{ re.content }}</div>
                    <div class="fc-80 fw-light mb-2">{{ re.writerId }} {{ getReviewDate(re.addDate) }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BoardgameApi from "@/apis/BoardgameApi.js";

export default {
    props: {
        ele: Object,
    },
    computed: {
        isSpread() {
            return this.isspread;
        },
        isRepled() {
            return this.reply !== null;
        },
    },
    data() {
        return {
            isspread: false,
            reply: null,
            myrepl: "",
        };
    },
    methods: {
        toggle() {
            this.isspread = !this.isspread;
        },
        getReviewDate(timestamp) {
            let date = new Date(timestamp);
            let year = date.getFullYear() - 2000;
            let mon = date.getMonth() + 1;
            if (mon < 10) mon = "0" + mon;
            let day = date.getDate();
            if (day < 10) day = "0" + day;
            let hour = date.getHours();
            if (hour < 10) hour = "0" + hour;
            let min = date.getMinutes();
            if (min < 10) min = "0" + min;
            return year + "." + mon + "." + day + " " + hour + ":" + min;
        },
        getReply(id) {
            BoardgameApi.requestGameQuestionReply(id).then((res) => {
                this.reply = res.data.data;
            });
        },
        updateReply(e) {
            this.myrepl = e.target.value;
        },
        writeReply(id) {
            let data = {
                content: { content: this.myrepl },
                gameId: id,
            };
            if (!data.content.content) return;
            BoardgameApi.requestGameQuestionWriteReply(data, () => {
                swal("답변을 작성했습니다");
                this.$router.go();
            });
        },
        delQna(id) {
            BoardgameApi.requestDeleteQna(id).then(() => {
                swal("리뷰를 삭제했습니다.");
                this.$router.go();
            });
        },
        ismine(nick) {
            return nick === localStorage.getItem("nickname");
        },
    },
};
</script>

<style>
.bg-c8 {
    background-color: #dae98e;
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.bg-db {
    background-color: #dbe8d8;
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
