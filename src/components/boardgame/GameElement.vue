<template>
    <div class="p-3">
        <div class="game-img">
            <img :src="object.thumbnail" alt="" class="w-100" />
        </div>
        <div class="game-name">
            <span v-if="object.nameKor">{{ object.nameKor }}</span
            ><span v-else>{{ object.name }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "gameelement",
    props: {
        object: Object,
    },
};
</script>

<style></style>
