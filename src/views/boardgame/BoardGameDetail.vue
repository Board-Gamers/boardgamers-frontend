<template>
    <div class="home text-center">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <Navigation />
                </div>
            </div>
            <div class="row">
                <!-- <div class="col-sm-2">
                    <Tap />
                </div> -->
                <div class="col-sm-12">
                    <div class="row mb-5">
                        <div class="col-md-4">
                            <img class="w-100" :src="info.image" alt="" style="height:230px;" />
                        </div>
                        <div class="col-md-8 text-start py-1">
                            <div class=" fs-3 fw-500 mb-1">
                                <span v-if="info.nameKor">{{ info.nameKor }}</span
                                ><span v-else>{{ info.name }}</span
                                >&nbsp;<span class="text-danger"><i class="fas fa-star"></i></span><span class="fs-4 fw-bold" v-if="info.averageRate">{{ info.averageRate.toFixed(1) }}</span>
                            </div>
                            <!-- <div class=" fs-5 fc-36">{{ info.description }}</div> -->
                            <div class=" fs-5 fw-500 pt-1"><span class="fc-80">게임 인원&nbsp;&nbsp;</span>{{ info.minPlayers }}~{{ info.maxPlayers }}명</div>
                            <div class=" fs-5 fw-500 pt-1"><span class="fc-80">게임 시간&nbsp;&nbsp;</span>{{ info.minPlayTime }}분</div>
                            <div class=" fs-5 fw-500 pt-1"><span class="fc-80">게임 연령&nbsp;&nbsp;</span>{{ info.minAge }}세 이상</div>
                            <div class=" fs-5 fw-500 pt-1"><span class="fc-80">게임 순위&nbsp;&nbsp;</span>{{ info.rank }}위</div>
                            <button class="btn btn-primary mt-1" v-on:click="addBookmark(1)" v-if="!isBooked">즐겨찾기</button>
                            <button class="btn btn-outline-primary mt-1" v-on:click="addBookmark(2)" v-else>즐겨찾기 해제</button>
                        </div>
                    </div>
                    <div class="row">
                        <nav>
                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                <button
                                    class="nav-link active col"
                                    id="nav-home-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-home"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-home"
                                    aria-selected="true"
                                >
                                    Detail
                                </button>
                                <button
                                    class="nav-link col"
                                    id="nav-profile-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-profile"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-profile"
                                    aria-selected="false"
                                    v-on:click="getReview"
                                >
                                    Review
                                </button>
                                <button
                                    class="nav-link col"
                                    id="nav-contact-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-contact"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-contact"
                                    aria-selected="false"
                                    v-on:click="getQnA"
                                >
                                    Q&amp;A
                                </button>
                            </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                            <!-- detail -->
                            <div class="tab-pane fade show active p-4 bc" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <InfoTap v-if="info" :info="info" :videoId="videoid" />
                            </div>
                            <!-- Review -->
                            <div class="tab-pane fade p-4 bc" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <ReviewTap :info="info" :aba="review" />
                            </div>
                            <!-- QnA -->
                            <div class="tab-pane fade p-4 bc" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                <!-- 질문 작성 -->
                                <div class="row">
                                    <div class="col-sm-1"><div class="p-1 bg-c8 fs-5 dp-none">Q</div></div>
                                    <div class="col-sm-11 text-start">
                                        <div class="input-group mb-4">
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="질문 하기"
                                                aria-label="Recipient's username"
                                                aria-describedby="button-addon2"
                                                v-on:input="updateQuestion"
                                            />
                                            <button class="btn btn-outline-secondary" type="button" id="button-addon2" v-on:click="writeQuestion">작성</button>
                                        </div>
                                    </div>
                                </div>
                                <div v-for="ele in qna" v-bind:key="ele.id">
                                    <QnATap :ele="ele" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/boardgame/Navigation.vue";
import Tap from "@/components/boardgame/Tap.vue";
import InfoTap from "./BoardGameDetailTap/InfoTap.vue";
import ReviewTap from "./BoardGameDetailTap/ReviewTap.vue";
import StarRate from "@/components/boardgame/StarRate.vue";
import QnATap from "./BoardGameDetailTap/QnATap.vue";
import BoardgameApi from "@/apis/BoardgameApi.js";
import YoutubeApi from "@/apis/YoutubeApi.js";
import "@/assets/css/font.css";
import "@/assets/css/border.css";

export default {
    name: "Home",
    components: {
        Navigation,
        Tap,
        StarRate,
        InfoTap,
        ReviewTap,
        QnATap,
    },
    created() {
        //console.log(this.$route.params.id);
        let id = this.$route.params.id;
        BoardgameApi.requestGameInfo(id).then((res) => {
            this.info = res.data.data;
            this.isBooked = this.info.saved;
            let name = this.info.nameKor ? this.info.nameKor : this.info.name;
            YoutubeApi.requestYoutube(name).then((res) => {
                this.videoid = "https://www.youtube.com/embed/" + res.data.items[0].id.videoId;
            });
        });

        // console.log(this.$store.getters.getBoardgameinfo);
    },
    computed: {},
    methods: {
        getReview() {
            let id = this.$route.params.id;
            BoardgameApi.requestGameReview(id).then((res) => {
                this.review = res.data.data.reviews;
            });
        },
        getQnA() {
            let id = this.$route.params.id;

            BoardgameApi.requestGameQuestion(id).then((res) => {
                this.qna = res.data.data;
            });
        },
        updateQuestion(e) {
            this.question = e.target.value;
        },
        writeQuestion() {
            let data = {
                // content: this.question,
                gameId: this.$route.params.id,
                title: this.question,
            };
            if (!data.title) return;
            BoardgameApi.requestGameWriteQuestion(data, () => {
                swal("질문을 작성했습니다").then(() => {
                    this.$router.go();
                });
            });
        },
        addBookmark(num) {
            const token = localStorage.getItem('jwt')
            let id = this.$route.params.id;
            if (token) {
                if (num == 1) {
                    BoardgameApi.requestGameBookmark(id, () => {
                        swal("즐겨찾기에 추가합니다.");
                    })
                    .then(() => {
                        this.isBooked = !this.isBooked;
                    })
                    .catch(err => {
                        swal({
                            icon: 'error',
                            title: '요청 오류'
                        })
                    });
                }
                if (num == 2) {
                    BoardgameApi.requestGameBookmark(id, () => {
                        swal("즐겨찾기를 해제합니다.");
                    })
                    .then(() => {
                        this.isBooked = !this.isBooked;
                    })
                    .catch(err => {
                        swal({
                            icon: 'error',
                            title: '요청 오류'
                        })
                    })
                    
                }
            } else {
                swal({
                    icon: 'error',
                    title: '로그인을 해주세요.'
                })
            }
        },
    },
    data() {
        return {
            info: {},
            review: [],
            qna: [],
            question: "",
            videoid: "",
            isBooked: false,
        };
    },
};
</script>

<style scoped>
@media screen and (max-width: 700px) {
    .dp-none {
        display: none;
    }
}
</style>
