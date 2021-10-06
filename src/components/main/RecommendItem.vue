<template>
  <div class="recommend-item">
    <div class="game-img">
      <img :src="game.thumbnail" alt="side-img" class="side-img">
      <img :src="game.thumbnail" alt="front-img" class="front-img">
    </div>
    <div class="content">
      <h6 v-if="game.nameKor">{{ game.nameKor }}</h6>
      <h6 v-else>{{ game.name }}</h6>
      <p>
        <span v-if="game.category.length > 2">{{ game.category | category }} </span>
        <img v-if="game.minAge >= 18" src="@/assets/images/age/18.png" alt="18">
        <img v-else-if="game.minAge >= 15" src="@/assets/images/age/15.png" alt="15">
        <img v-else-if="game.minAge >= 12" src="@/assets/images/age/12.png" alt="12">
        <img v-else src="@/assets/images/age/0.png" alt="0">
      </p>
      <p><Rating :value="game.averageRate" color="#dc3545" /> {{ game.averageRate | rateTruncate }}</p>
      <div class="info">
        <p>
          <i class="fas fa-users"></i> 
          <span v-if="game.minPlayers-game.maxPlayers"> {{ game.minPlayers }}~{{ game.maxPlayers }}인</span>
          <span v-else> {{ game.minPlayers }}인</span>
        </p>
        <p>
          <i class="fas fa-clock"></i> 
          <span v-if="game.minPlayTime-game.maxPlayTime"> {{ game.minPlayTime }}~{{ game.maxPlayTime }}분</span>
          <span v-else> {{ game.minPlayTime }}분</span>
        </p>
      </div>
      <p @click="goToDetail">자세히 >></p>
    </div>
  </div>
</template>

<script>
import Rating from "@/components/Rating.vue";

export default {
  name: "recommend-item",
  props: {
    game: {
      type: Object
    }
  },
  components: {
    Rating
  },
  methods: {
    goToDetail: function () {
      this.$router.push({ name: 'BoardGameDetail', params: { id: this.game.id }})
      window.scrollTo(0, 0)
    }
  },
  filters: {
    category: function (text) {
      return text.split("'")[1]
    },
    rateTruncate: function (text) {
      return text.toString().slice(0, 3)
    },
  }
}
</script>

<style scoped>
.recommend-item {
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 20px 10px;
  transition: 0.25s;
}

.recommend-item:hover {
  box-shadow: 0px 10px 15px -5px #000, 
              5px 5px 15px 5px rgba(0,0,0,0);
}

.game-img {
  width: 40%;
  display: flex;
  justify-content: center;
  transform: perspective(200px);
  transform-style: preserve-3d;
}

.game-img img:nth-child(1) {
  width: 25%;
  transform: rotateY(-60deg);
  transform-origin: right;
  filter: brightness(70%);
}

.game-img img:nth-child(2) {
  width: 75%;
  height: auto;
  transform: rotateY(25deg);
  transform-origin: left;
}

.content {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content h6 {
  font-weight: bold;
}

.content > p:nth-child(2) {
  display: flex;
  align-items: center;
  gap: 10px;
}

.content > p:nth-child(2) img {
  height: 24px;
}

.content > p:last-child {
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  margin: 0;
}

.content > p:last-child:hover {
  text-decoration: underline black;
  color: unset;
}

.info {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 5px 0;
}

@media screen and (max-width: 991px) {
  .recommend-item {
    flex-direction: column;
    padding: 20px 0;
    gap: 20px 0;
  }
  
  .game-img {
    width: 60%;
    transform: perspective(400px);
  }

  .content {
    width: 100%;
  }

  p {
    font-size: 14px;
  }
}
</style>