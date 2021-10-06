<template>
  <div class="card-head">
    <img :src="game.thumbnail" class="card-bg-img" alt="bg-image">
    <img :src="game.thumbnail" class="card-head-img" alt="game-image">
    <h6 @click="goToDetail" v-if="game.nameKor">{{ game.nameKor }}</h6>
    <h6 @click="goToDetail" v-else>{{ game.name }}</h6>
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
  methods: {
    goToDetail: function () {
      this.$router.push({ name: 'BoardGameDetail', params: { id: this.game.id }})
      window.scrollTo(0, 0)
    }
  }
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
  cursor: pointer;
  transition: 0.25s;
}

h6:hover {
  font-weight: bold;
  font-size: 1.2em;
}

.card-head {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.card-head.active {
  z-index: 1;
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

@media screen and (max-width: 767px) {
  h6 {
    font-size: 14px;
  }
}
</style>