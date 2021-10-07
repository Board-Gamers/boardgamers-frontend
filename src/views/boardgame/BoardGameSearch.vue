<template>
    <div class="text-center">
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
                    <div class="row row-cols-2 row-cols-sm-3">
                        <div class="col" v-for="ele in elements" v-bind:key="ele.id" v-on:click="goDetail(ele.id)">
                            <Element :object="ele" />
                        </div>
                    </div>
                    <div class="row">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-center">
                                <li class="page-item">
                                    <button class="page-link" v-on:click="prenex(0)" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </button>
                                </li>
                                <li class="page-item" v-for="page in pages" v-bind:key="page">
                                    <button class="page-link" v-on:click="paging(page)">{{ page }}</button>
                                </li>
                                <li class="page-item">
                                    <button class="page-link" v-on:click="prenex(1)" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Element from "@/components/boardgame/GameElement.vue";
import Navigation from "@/components/boardgame/Navigation.vue";
import Tap from "@/components/boardgame/Tap.vue";
import BoardgameApi from "@/apis/BoardgameApi.js";

export default {
    name: "BoardGameSearch",
    components: {
        Element,
        Navigation,
        Tap,
    },
    created() {
        this.fetchData();
    },
    data() {
        return {
            elements: [],
            totalPageItemCnt: 0,
            totalPage: 0,
            nowPage: 0,
            nowPageSize: 0,
            pages: [1, 2, 3, 4, 5],
        };
    },
    watch: {
        // 라우트가 변경되면 메소드를 다시 호출됩니다.
        $route: "fetchData",
    },
    methods: {
        fetchData() {
            let data = {
                keyword: this.$route.query.keyword ? this.$route.query.keyword : "",
                category: this.$route.query.category ? this.$route.query.category : "",
                page: this.$route.query.page ? this.$route.query.page : 1,
                maxPlayTime: this.$route.query.maxPlayTime ? this.$route.query.maxPlayTime : "",
                minPlayers: this.$route.query.minPlayers ? this.$route.query.minPlayers : "",
                maxPlayers: this.$route.query.maxPlayers ? this.$route.query.maxPlayers : "",
                minAge: this.$route.query.minAge ? this.$route.query.minAge : "",
            };

            BoardgameApi.requestGameSearch(data).then((res) => {
                this.elements = res.data.data.games;
                this.totalPageItemCnt = res.data.data.totalPageItemCnt;
                this.totalPage = res.data.data.totalPage;
                this.nowPage = res.data.data.nowPage;
                this.nowPageSize = res.data.data.nowPageSize;
                this.pages = [1, 2, 3, 4, 5].map((x) => x + 5 * Math.floor(this.nowPage / 5));
            });
        },
        goDetail(id) {
            this.$router.push({ name: "BoardGameDetail", params: { id: id } });
            window.scrollTo(0, 0);
        },
        paging(page) {
            let que = {
                keyword: this.$route.query.keyword ? this.$route.query.keyword : "",
                category: this.$route.query.category ? this.$route.query.category : "",
                page: page,
                maxPlayTime: this.$route.query.maxPlayTime ? this.$route.query.maxPlayTime : "",
                minPlayers: this.$route.query.minPlayers ? this.$route.query.minPlayers : "",
                maxPlayers: this.$route.query.maxPlayers ? this.$route.query.maxPlayers : "",
                minAge: this.$route.query.minAge ? this.$route.query.minAge : "",
            };
            this.$router.push({ path: "search", query: que });
            window.scrollTo(0, 0);
        },
        prenex(key) {
            if (key == 1) {
                this.pages = this.pages.map((x) => x + 5);
            }
            if (key == 0) {
                if (this.pages[0] != 1) this.pages = this.pages.map((x) => x - 5);
            }
        },
    },
};
</script>
