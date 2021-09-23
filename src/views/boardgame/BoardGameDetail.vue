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
                        <div class="col-md-7 text-start">
                            <div class=" fs-3 fw-500">
                                <span v-if="info.nameKor">{{ info.nameKor }}</span
                                ><span v-else>{{ info.name }}</span
                                >&nbsp;☆{{ info.averageRate }}
                            </div>
                            <!-- <div class=" fs-5 fc-36">{{ info.description }}</div> -->
                            <div class=" fs-5 fw-500"><span class="fc-80">적정 인원&nbsp;&nbsp;</span>{{ info.minPlayers }}~{{ info.maxPlayers }}명</div>
                            <div class=" fs-5 fw-500"><span class="fc-80">플레이시간&nbsp;</span>{{ info.minPlayTime }}분</div>
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
                                <div class="row mb-4">
                                    <div class="col">
                                        <p class="fs-0"><i class="far fa-user"></i></p>
                                        <p class="fs-4 fc-80">게임 인원</p>
                                        <p class="fs-5">{{ info.minPlayers }}~{{ info.maxPlayers }}명</p>
                                    </div>
                                    <div class="col">
                                        <p class="fs-0"><i class="fas fa-sort-numeric-up"></i></p>
                                        <p class="fs-4 fc-80">게임 연령</p>
                                        <p class="fs-5">{{ info.minAge }}세 이상</p>
                                    </div>
                                    <div class="col">
                                        <p class="fs-0"><i class="far fa-clock"></i></p>
                                        <p class="fs-4 fc-80">게임 시간</p>
                                        <p class="fs-5">{{ info.minPlayTime }}분</p>
                                    </div>
                                </div>
                                <div class="row text-start">
                                    <div class="d-flex">
                                        <p class="fc-80">description:&nbsp;</p>
                                        <p class="fc-36" v-html="info.description"></p>
                                    </div>
                                    <div class="d-flex">
                                        <p class="fc-80">category:&nbsp;</p>
                                        <p class="fc-36">{{ info.category }}</p>
                                    </div>
                                    <div class="d-flex">
                                        <p class="fc-80">playtype:&nbsp;</p>
                                        <p class="fc-36">{{ info.playType }}</p>
                                    </div>
                                    <div class="d-flex">
                                        <p class="fc-80">series:&nbsp;</p>
                                        <p class="fc-36">{{ info.series }}</p>
                                    </div>
                                    <div class="d-flex">
                                        <p class="fc-80">yearPublished:&nbsp;</p>
                                        <p class="fc-36">{{ info.yearPublished }}</p>
                                    </div>
                                    <div class="d-flex">
                                        <p class="fc-80">rank:&nbsp;</p>
                                        <p class="fc-36">{{ info.rank }}</p>
                                    </div>
                                </div>
                            </div>
                            <!-- Review -->
                            <div class="tab-pane fade p-4 bc" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <div class="row mb-4">
                                    <div class="col-md-3">
                                        <div class="fs-1">9.1</div>
                                        <div class="fs-4 text-danger">★★★★★</div>
                                        <div class="fs-4 fw-light">총 401건</div>
                                    </div>
                                    <div class="col-md-9">
                                        <div class="progress mb-1">
                                            <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div class="progress mb-1">
                                            <div class="progress-bar bg-danger" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div class="progress mb-1">
                                            <div class="progress-bar bg-danger" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div class="progress mb-1">
                                            <div class="progress-bar bg-danger" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div class="progress mb-1">
                                            <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row py-3" v-for="ele in aba" v-bind:key="ele.key">
                                    <div class="col-md-3 fs-6">
                                        <span class="text-danger">★★★★★</span> <span>{{ ele }}</span>
                                    </div>
                                    <div class="col-md-9 text-start">
                                        <p>
                                            처음에 규칙을 이해하는 데 오랜 시간이 소요되지만 이해하고 나면 정말 몰입할 수 있는 게임입니다. 중독성 있어요 근데 너무 어렵네요 근데 너무 어렵네요 근데 너무
                                            어렵네요 근데 너무 어렵네요 근데 너무 어렵네요 근데 너무 어렵네요 근데 너무 어렵네요 근데 너무 어렵네요 근데 너무 어렵네요 근데 너무 어렵네요 근데 너무
                                            어렵네요 ㅍ근데 너무 어렵네요ㅍ
                                        </p>
                                        <p class="fc-80 fw-light">
                                            아이디 2021.09.15
                                        </p>
                                    </div>
                                </div>
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
import BoardgameApi from "@/apis/BoardgameApi.js";
import "@/assets/css/font.css";
import "@/assets/css/border.css";

export default {
    name: "Home",
    components: {
        Navigation,
        Tap,
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
    data() {
        return {
            info: {},
            aba: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        };
    },
};
</script>

<style scoped></style>
