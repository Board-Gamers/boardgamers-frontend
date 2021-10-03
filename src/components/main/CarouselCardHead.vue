<template>
  <div class="card-head">
    <img :src="game.image" class="card-bg-img" alt="bg-image">
    <img :src="game.image" class="card-head-img" alt="game-image">
    <h6>{{ game.nameKor }}</h6>
  </div>
</template>

<script>
export default {
  name: "CarouselCardHead",
  props: {
    game: {
      type: Object
    }
  },
}
</script>

<style scoped>
h6 {
  margin: 0;
  position: absolute;
  color: white;
  z-index: 1;
  bottom: 10%;
  opacity: 0;
}

.card-head {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.card-bg-img {
  position: absolute;
  width: 100%;
  height: 100%;
  filter: blur(5px) brightness(60%);
  transition: 0.5s;
  opacity: 0;
}

.card-head-img {
  width: 50%;
  z-index: 1;
  transition: 0.5s;
  transform: scale(0);
}

.card-head.active .card-head-img {
  transform: scale(1);
}

.card-head.active :is(.card-bg-img, h6) {
  opacity: 1;
}

</style>