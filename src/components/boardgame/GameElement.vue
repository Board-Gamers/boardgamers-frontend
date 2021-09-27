<template>
    <div class="p-3">
        <div class="game-img">
            <div class="inner">
                <img :src="object.thumbnail" alt="" class="w-100 h-100" />
            </div>
        </div>
        <div class="game-name pt-2 text-start">
            <span v-if="object.nameKor">{{ object.nameKor }}</span
            ><span v-else>{{ object.name }}</span>
        </div>
        <!-- <div class="card">
            <img :src="object.thumbnail" class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div> 
        </div>-->
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

<style>
.game-img {
    width: 100%;
    position: relative;
}
.game-img:after {
    content: "";
    display: block;
    padding-bottom: 80%;
}
.inner {
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>
