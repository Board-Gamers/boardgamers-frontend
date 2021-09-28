<template>
    <div>
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
                <p class="fc-80">category:&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <p class="fc-36">{{ info.category }}</p>
            </div>
            <div class="d-flex">
                <p class="fc-80">playtype:&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <p class="fc-36">{{ info.playType }}</p>
            </div>

            <div class="d-flex">
                <p class="fc-80">published:&nbsp;&nbsp;</p>
                <p class="fc-36">{{ info.yearPublished }}</p>
            </div>
            <div class="d-flex">
                <p class="fc-80">ranking:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <p class="fc-36">{{ info.rank }}</p>
            </div>
            <div class="d-flex">
                <p class="fc-80">series:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <p class="fc-36">{{ info.series }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import "@/assets/css/font.css";
import "@/assets/css/border.css";

export default {
    name: "Infotap",
    props: {
        info: Object,
    },
};
</script>

<style></style>
