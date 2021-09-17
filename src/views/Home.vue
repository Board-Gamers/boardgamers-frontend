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
                    <div class="row row-cols-2 row-cols-sm-3">
                        <div class="col" v-for="ele in elements" v-bind:key="ele" v-on:click="goDetail(ele)">
                            <Element img="https://picsum.photos/500/300/?random" name="드래곤마스터" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import TestApi from "@/apis/TestApi.js";
import Element from "@/components/boardgame/GameElement.vue";
import Navigation from "@/components/boardgame/Navigation.vue";
import Tap from "@/components/boardgame/Tap.vue";

export default {
    name: "Home",
    components: {
        Element,
        Navigation,
        Tap,
    },
    created() {
        console.log("test");
        TestApi.requestTest();
    },
    data() {
        return {
            elements: [100, 200, 300, 400, 500, 600, 700],
        };
    },
    methods: {
        goDetail(id) {
            this.$router.push({ name: "BoardGameDetail", params: { id: id } });
        },
    },
};
</script>
