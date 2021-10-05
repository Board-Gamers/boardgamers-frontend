<template>
  <div class="main-banner">
    <div class="bg">
      <img :src="mainBanner.image" alt="banner-img" class="bg-img">
    </div>  
    <h1 class="fw-bold my-0">{{ mainBanner.nameKor }}</h1>
    <div>
      <h6 v-if="mainBanner.category.length > 2">장르 : {{ mainBanner.category | categoryTruncate }}</h6>
      <h6>평점 : <Rating :value="mainBanner.averageRate" color="#fff"/> {{ mainBanner.averageRate | rateTruncate }}점</h6>
    </div>
    <div class="banner-info">
      <div>
        <img src="@/assets/main/playnum.png" alt="playnum">
        <p class="fw-bold">게임 인원</p>
        <p v-if="mainBanner.minPlayers-mainBanner.maxPlayers">{{ mainBanner.minPlayers }} ~ {{ mainBanner.maxPlayers }}명</p>
        <p v-else>{{ mainBanner.minPlayers }}명</p>
      </div>
      <div>
        <img src="@/assets/main/age.png" alt="age">
        <p class="fw-bold">게임 연령</p>
        <p>{{ mainBanner.minAge }}세</p>
      </div>
      <div>
        <img src="@/assets/main/playtime.png" alt="playtime">
        <p class="fw-bold">게임 시간</p>
        <p v-if="mainBanner.minPlayTime-mainBanner.maxPlayTime">{{ mainBanner.minPlayTime }} ~ {{ mainBanner.maxPlayTime }}분</p>
        <p v-else>{{ mainBanner.minPlayTime }}분</p>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from "@/components/Rating.vue";

export default {
  name: "MainBanner",
  props: {
    games: {
      type: Array
    }
  },
  components: {
    Rating
  },
  data: function () {
    return {
      index: 0
    }
  },
  computed: {
    mainBanner: function () {
      return this.games[this.index]
    }
  },
  filters: {
    rateTruncate: function (text) {
      return text.toString().slice(0, 3)
    },
    categoryTruncate: function (text) {
      return text.slice(1, text.length-1)
    }
  },
  mounted: function () {
    setInterval(() => {
      this.index = this.index === this.games.length - 1 ? 0 : this.index + 1
    }, 5000)
  }
}
</script>

<style scoped>
h5, p {
  margin: 0;
}

.main-banner {
  width: 100%;
  min-height: 300px;
  padding: 3% 10% 2%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
  gap: 1.5rem;
  font-size: 14px;
  overflow: hidden;
}

.bg {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.bg-img {
  position: absolute;
  width: 100%;
  height: 100%;
  filter: brightness(40%);
  object-fit: cover;
  z-index: -1;
}

.banner-info {
  width: 60%;
  min-width: 260px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.banner-info img {
  max-width: 30px;
  width: 7vw;
  margin-bottom: 0.5em;
}

@media screen and (max-width: 575px){
  .main-banner {
    font-size: 12px;
  }
}

</style>