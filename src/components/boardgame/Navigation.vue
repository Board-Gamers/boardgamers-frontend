<template>
    <div class="py-4 d-flex justify-content-between">
        <div class="logo-btn fs-1 text-black"><i class="fas fa-dice"></i> boardgamers</div>
        <div class="d-flex">
            <div class="fs-5 px-2"><i class="fas fa-search"></i><br />검색</div>
            <div class="fs-5 px-2">
                <router-link to="/login"><i class="fas fa-sign-in-alt"></i><br />로그인</router-link>
            </div>
            <div class="fs-5 px-2">
                <router-link to="/qna"><i class="far fa-question-circle"></i><br />고객센터</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "navigation",
};
</script>

<style></style>
