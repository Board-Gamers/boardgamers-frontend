<template>
    <div>
        <div class="row mb-4">
            <div class="col-md-3">
                <div class="fs-1" v-if="info.averageRate">{{ info.averageRate.toFixed(1) }}</div>
                <div class="fs-4 text-danger"><StarRate :rating="info.averageRate" /></div>
                <div class="fs-4 fw-light">총 {{ info.usersRated }}건</div>
            </div>
            <div class="col-md-9 py-3">
                <div class="progress mb-2">
                    <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 60%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress mb-2">
                    <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 70%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress mb-2">
                    <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 50%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress mb-2">
                    <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress mb-2">
                    <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 10%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3">
                <!-- <span class="text-danger"><StarRate :rating="myrate"/></span>
                {{ myrate }}
                <input type="range" class="position-absolute top-0 start-0" id="customRange1" min="0" max="10" step="0.5" v-on:mousemove="SetRating" /><br /> -->
                <div class="review-star">
                    <div>&nbsp;{{ myrate }}</div>
                    <input type="radio" id="5-stars" name="rating" value="10" v-model="myrate" />
                    <label for="5-stars" class="star pr-4">★</label>
                    <input type="radio" id="4-stars" name="rating" value="8" v-model="myrate" />
                    <label for="4-stars" class="star">★</label>
                    <input type="radio" id="3-stars" name="rating" value="6" v-model="myrate" />
                    <label for="3-stars" class="star">★</label>
                    <input type="radio" id="2-stars" name="rating" value="4" v-model="myrate" />
                    <label for="2-stars" class="star">★</label>
                    <input type="radio" id="1-star" name="rating" value="2" v-model="myrate" />
                    <label for="1-star" class="star">★</label>
                </div>
            </div>

            <div class="col-md-9">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="리뷰를 작성해 보세요!" aria-label="Recipient's username" aria-describedby="button-addon2" v-on:input="updateComment" />
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2" v-on:click="addReview">작성</button>
                </div>
            </div>
        </div>
        <div class="row py-3" v-for="ele in aba" v-bind:key="ele.key">
            <div class="col-md-3 fs-6">
                <span class="text-danger"><StarRate :rating="ele.rating"/></span> <span>{{ ele.rating }}</span>
            </div>
            <div class="col-md-9 text-start">
                <p>
                    {{ ele.comment }}
                </p>
                <p class="fc-80 fw-light">
                    {{ ele.userNickname }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ ele.createdAt }}&nbsp;&nbsp;<span v-if="ismine(ele.userNickname)" v-on:click="delReview(ele.id)">삭제</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import StarRate from "@/components/boardgame/StarRate.vue";
import BoardgameApi from "@/apis/BoardgameApi.js";
import "@/assets/css/font.css";
import "@/assets/css/border.css";

export default {
    name: "reviewtap",
    components: {
        StarRate,
    },
    props: {
        info: Object,
        aba: Array,
    },
    data() {
        return {
            myrate: 10,
            comment: "",
            value1: null,
        };
    },
    computed: {},
    methods: {
        SetRating(e) {
            this.myrate = e.target.value;
        },
        addReview() {
            let data = {
                comment: this.comment,
                gameId: this.info.id,
                rating: this.myrate,
            };

            BoardgameApi.requestWriteReview(data, () => {
                alert("리뷰를 작성했습니다");
                this.$router.go();
            });
        },
        updateComment(e) {
            this.comment = e.target.value;
        },

        ismine(nick) {
            return nick === localStorage.getItem("nickname");
        },
        delReview(id) {
            BoardgameApi.requestDeleteReview(id).then(() => {
                alert("리뷰를 삭제했습니다.");
                this.$router.go();
            });
        },
    },
};
</script>

<style scoped>
input[type="range"] {
    -webkit-appearance: none;
    background: transparent;
}
input[type="range"]::-webkit-slider-thumb {
    border: 1px solid #000000;
    height: 15px;
    width: 10px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
}
input[type="range"]:focus {
    outline: none; /* input range에 포커스 되었을 경우 기본 블러처리 제거 */
}

.review-star {
    width: 100%;
    flex-direction: row-reverse;
    display: flex;
    justify-content: center;
}
.review-star input {
    display: none;
}
.review-star label {
    -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #dc3545;
    cursor: pointer;
}
.review-star :checked ~ label {
    -webkit-text-fill-color: #dc3545;
}
.review-star label:hover,
.review-star label:hover ~ label {
    -webkit-text-fill-color: #dc3545;
}
</style>
