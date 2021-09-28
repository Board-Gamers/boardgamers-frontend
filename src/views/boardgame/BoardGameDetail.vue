<template>
    <div class="home text-center">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <Navigation />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-2">
                    <Tap />
                </div>
                <div class="col-sm-10">
                    <div class="row mb-5">
                        <div class="col-md-5">
                            <img class="w-100" :src="info.image" alt="" />
                        </div>
                        <div class="col-md-7 text-start py-1">
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
                                >
                                    Q&amp;A
                                </button>
                            </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                            <!-- detail -->
                            <div class="tab-pane fade show active p-4 bc" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <InfoTap :info="info" />
                            </div>
                            <!-- Review -->
                            <div class="tab-pane fade p-4 bc" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <ReviewTap :info="info" :aba="review" />
                            </div>
                            <!-- QnA -->
                            <div class="tab-pane fade p-4 bc" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                <div class="row py-2" v-for="ele in aba" v-bind:key="ele.key">
                                    <div class="col-md-1">Q</div>
                                    <div class="col-md-11 text-start">
                                        <div class="border-c8 mb-2">이거 혹시 초등학생도 이해 가능한가요</div>
                                        <div class="border-c8 mb-2">제 사촌동생이 3일 정도 놀러온다고 해서 같이 놀아주려고 하는데 이거 괜찮나요?? 평이 좋아보여서 의견 여쭤봅니다!</div>
                                        <div class="fc-80 fw-light mb-2">아이디 2021.09.15</div>
                                    </div>
                                    <div class="col-md-1"></div>
                                    <div class="col-md-1">A</div>
                                    <div class="col-md-10 text-start">
                                        <div class="border-db mb-2">네! 나이랑 상관 없어요 제가 지금 5학년인데 저희 반에서 제일 잘 해요</div>
                                        <div class="fc-80 fw-light mb-2">아이디 2021.09.15</div>
                                    </div>
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
import BoardgameApi from "@/apis/BoardgameApi.js";
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
    },
    created() {
        //console.log(this.$route.params.id);
        let id = this.$route.params.id;
        BoardgameApi.requestGameInfo(id).then((res) => {
            this.info = res.data.data;
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
    },
    data() {
        return {
            info: {},
            review: [],
            aba: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        };
    },
};
</script>

<style scoped></style>
