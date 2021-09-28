<template>
    <div class="whole-rating">
        <Bgi />
        <Logo />
        <div class="row">
            <span class="fs-2 text-white text-center my-3">보드게임에 별점을 남겨주세요</span>
        </div>
        <div class="row">
            <div class="col-2"></div>
            <div class="col-8">
                <div class="row row-cols-sm-3 row-cols-md-6" v-if="elements !== []">
                    <div class="col my-3" v-for="ele in elements" v-bind:key="ele.id">
                        <div class="square">
                            <div class="inner"></div>
                        </div>
                        <div class="text-white">
                            {{ ele }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-2"></div>
        </div>
    </div>
</template>

<script>
import Bgi from "@/components/user/BackgroundImage.vue";
import Logo from "@/components/user/Logo.vue";
import Button from "@/components/user/Button.vue";

export default {
    name: "Rating",
    components: {
        Button,
        Logo,
        Bgi,
    },
    data() {
        return {
            elements: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
        };
    },
};
</script>

<style scoped>
.square {
    width: 100%;
    position: relative;
}
.square:after {
    content: "";
    display: block;
    padding-bottom: 110%;
}
.inner {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: lightgray;
}
</style>
