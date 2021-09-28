<template>
    <div class="py-4 d-flex justify-content-between">
        <div class="logo-btn fs-1 text-black btn" v-on:click="goMain"><i class="fas fa-dice"></i> Boardgamers</div>
        <div class="d-flex">
            <div class="fs-5 px-2 btn" v-on:click="goSearch"><i class="fas fa-search"></i><br />&nbsp;&nbsp;&nbsp;검색&nbsp;&nbsp;&nbsp;</div>
            <div class="fs-5 px-2 btn" v-on:click="goLogout" v-if="isLogin"><i class="fas fa-sign-out-alt"></i><br />로그아웃</div>
            <div class="fs-5 px-2 btn" v-on:click="goLogin" v-else><i class="fas fa-sign-in-alt"></i><br />로그인</div>
            <div class="fs-5 px-2 btn" v-on:click="goQna"><i class="far fa-question-circle"></i><br />고객센터</div>
            <div class="fs-5 px-2 btn" v-on:click="goProfile"><i class="fas fa-user"></i><br />내 프로필</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "navigation",
    computed: {
        isLogin() {
            return localStorage.getItem("nickname");
        },
    },
    methods: {
        goMain() {
            if (this.$route.name !== "Main") this.$router.push({ name: "Main" });
            else this.$router.go();
        },
        goSearch() {
            if (this.$route.name !== "BoardGameSearch") this.$router.push({ name: "BoardGameSearch" });
        },
        goLogin() {
            if (this.$route.name !== "Login") this.$router.push({ name: "Login" });
        },
        goQna() {
            if (this.$route.name !== "QnA") this.$router.push({ name: "QnA" });
        },
        goProfile() {
            if (this.$route.name !== "Profile") this.$router.push({ name: "Profile", params: { nickname: 'asd' } });
        },
        goLogout() {
            localStorage.clear();
            this.$router.go();
        },
    },
};
</script>

<style></style>
