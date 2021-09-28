<template>
    <div>
        <div class="row mb-4">
            <div class="col-md-3">
                <div class="fs-1" v-if="info.averageRate">{{ info.averageRate.toFixed(1) }}</div>
                <div class="fs-4 text-danger"><StarRate :rating="info.averageRate" /></div>
                <div class="fs-4 fw-light">총 {{ info.usersRated }}건</div>
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
                <span class="text-danger"><StarRate :rating="ele.rating"/></span> <span>{{ ele.rating }}</span>
            </div>
            <div class="col-md-9 text-start">
                <p>
                    {{ ele.comment }}
                </p>
                <p class="fc-80 fw-light">{{ ele.userNickname }} {{ ele.createdAt }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import StarRate from "@/components/boardgame/StarRate.vue";
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
};
</script>

<style></style>
