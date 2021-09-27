<template>
    <div class="logo-btn fs-1 text-white py-2 btn" v-on:click="goMain"><i class="fas fa-dice"></i> Boardgamers</div>
</template>

<script>
export default {
    name: "Logo",
    methods: {
        goMain() {
            this.$router.push({ name: "Main" });
        },
    },
};
</script>

<style></style>
