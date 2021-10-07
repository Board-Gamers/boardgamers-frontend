<template>
  <div class="main-banner">
    <div class="bg">
      <img :src="mainBanner.image" alt="banner-img" class="bg-img">
    </div>  
    <h2 v-if="mainBanner.nameKor" class="fw-bold my-0">{{ mainBanner.nameKor }}</h2>
    <h2 v-else class="fw-bold my-0">{{ mainBanner.name }}</h2>
    <div>
      <h6><Rating :value="mainBanner.averageRate" color="#fff"/> {{ mainBanner.averageRate | rateTruncate }}점</h6>
      <div v-if="categoryChips[0]" class="chips">
        <span v-for="(chip, idx) in categoryChips" :key="idx" class="chip">{{ chip.trim() }}</span>
      </div>
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
    },
    categoryChips: function () {
      let x = this.mainBanner.category
      x = x.replaceAll("'","")
      x = x.slice(1, x.length-1)
      x = x.split(',')
      return x.slice(0, 5)
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
  padding: 2% 10%;
  height: 275px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 14px;
  gap: 25px;
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
  max-width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.banner-info img {
  max-width: 25px;
  width: 7vw;
  margin-bottom: 3px;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 5px 10px;
  justify-content: center;
}

.chip {
  border: 1px solid #fff;
  border-radius: 50rem;
  padding: 1px 5px;
  text-align: center;
  font-size: 12px;
}

@media screen and (max-width: 575px){
  .main-banner {
    font-size: 12px;
    height: 240px;
  }

  h2 {
    font-size: 20px;
  }

  h6 {
    font-size: 14px;
  }
}

</style>