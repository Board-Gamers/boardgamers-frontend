<template>
    <div class="bgi"></div>
</template>

<script>
export default {
    name: "BackgroundImage",
};
</script>

<style>
.bgi {
    position: fixed;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../../assets/images/background.jpg");
    background-size: cover;
    background-position: 0px 0px;
    width: 100vw;
    height: 100vh;
    top: 0px;
    z-index: -1;
}
</style>
