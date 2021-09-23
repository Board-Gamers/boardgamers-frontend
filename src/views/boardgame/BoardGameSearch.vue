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
                        <div class="col" v-for="ele in elements" v-bind:key="ele" v-on:click="goDetail(ele.id)">
                            <Element :object="ele" />
                        </div>
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
        let data = {
            keyword: "",
            category: "",
            page: 1,
        };
        BoardgameApi.requestGameSearch(data).then((res) => {
            this.elements = res.data.data.games;
            //console.log(res.data.data.games);
        });
    },
    data() {
        return {
            elements: [2232, 2235, 2236, 2238, 2240, 2248, 2249],
        };
    },
    methods: {
        goDetail(id) {
            this.$router.push({ name: "BoardGameDetail", params: { id: id } });
        },
    },
};
</script>
