<template>
    <div class="p-3">
        <div class="game-img">
            <img :src="img" alt="" class="w-100" />
        </div>
        <div class="game-name">{{ name }}</div>
    </div>
</template>

<script>
export default {
    name: "gameelement",
    props: {
        img: String,
        name: String,
    },
};
</script>

<style></style>
