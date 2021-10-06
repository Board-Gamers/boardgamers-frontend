<template>
  <div class="game card">
    <div class="game-img">
      <img :src="game.thumbnail" alt="side-img">
      <img :src="game.thumbnail" alt="front-img">
    </div>
    <h5 v-if="game.gameNameKor" class="card-title" @click="goToDetail">{{ game.gameNameKor }}</h5>
    <h5 v-else class="card-title" @click="goToDetail">{{ game.gameName }}</h5>
  </div>
</template>

<script>
export default {
  name: "GameItems",
  props: {
    game: {
      type: Object
    }
  },
  methods: {
    goToDetail: function () {
      this.$router.push({ name: 'BoardGameDetail', params: { id: this.game.gameId }})
    }
  }
}
</script>

<style scoped>
.game {
  padding: 5%;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: relative;
}

.game-img {
  height: 70%;
  display: flex;
  justify-content: center;
  transform: perspective(500px);
  transform-style: preserve-3d;
}

.game-img img:nth-child(1) {
  width: 15%;
  transform: rotateY(-60deg);
  transform-origin: right;
  filter: brightness(70%);
}

.game-img img:nth-child(2) {
  width: 55%;
  height: auto;
  transform: rotateY(25deg);
  transform-origin: left;
}

.card-title {
  margin: 5% 0 0;
  font-weight: bold;
}

h5 {
  cursor: pointer;
}

@media screen and (max-width: 575px) {
  .card-title {
    font-size: 12px;
  }
}
</style>