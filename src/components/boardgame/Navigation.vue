<template>
    <div class="py-4 d-flex justify-content-between">
        <div class="logo-btn fs-1 text-black btn" v-on:click="goMain"><i class="fas fa-dice"></i> boardgamers</div>
        <div class="d-flex">
            <div class="fs-5 px-2 btn" v-on:click="goSearch"><i class="fas fa-search"></i><br />검색</div>
            <div class="fs-5 px-2 btn" v-on:click="goLogin"><i class="fas fa-sign-in-alt"></i><br />로그인</div>
            <div class="fs-5 px-2 btn" v-on:click="goQna"><i class="far fa-question-circle"></i><br />고객센터</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "navigation",
    methods: {
        goMain() {
            this.$router.push({ name: "Main" });
        },
        goSearch() {
            this.$router.push({ name: "BoardGameSearch" });
        },
        goLogin() {
            this.$router.push({ name: "Login" });
        },
        goQna() {
            this.$router.push({ name: "QnA" });
        },
    },
};
</script>

<style></style>
