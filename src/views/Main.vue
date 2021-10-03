<template>
  <div class="main">

    <Navigation class="w-100"/>
    
    <MainBanner />

    <br>
    <div class="card-list">
      <CarouselCard v-if="rankGames.length" :games="rankGames" title="평점 높은 순"/>
      <div v-else class="loading">로딩중</div>
      <CarouselCard v-if="reviewGames.length" :games="reviewGames" title="리뷰 많은 순" />
      <div v-else class="loading">로딩중</div>
      <div class="loading">로딩중</div>
      <div class="loading">로딩중</div>
      <!-- <CarouselCard title="유저 추천 순"/> -->
      <!-- <CarouselCard title="비슷한 게임"/> -->
    </div>

    <br>
    

  </div>
</template>

<script>
import RecApi from "@/apis/RecommendApi.js";

import Navigation from "@/components/boardgame/Navigation.vue";
import MainBanner from "@/components/main/MainBanner.vue";
import CarouselCard from "@/components/main/CarouselCard.vue";

export default {
  name: "Main",
  components: {
    Navigation,
    MainBanner,
    CarouselCard,
  },
  methods: {
    getRankRec: async function () {
      return this.$store.state.recommend.rank ?? await RecApi.rankRec()
    },
    getReviewRec: async function () {
      return this.$store.state.recommend.review ?? await RecApi.reviewRec()
    }
  },
  computed: {
    rankGames: function () {
      return this.$store.state.recommend.rank?.games.slice(0, 5) ?? []
    },
    reviewGames: function () {
      return this.$store.state.recommend.review?.games.slice(0, 5) ?? []
    }
  },
  mounted: async function () {
    const response = await Promise.all([this.getRankRec(), this.getReviewRec()])
    this.$store.state.recommend.rank = response[0]
    this.$store.state.recommend.review = response[1]
  }
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.card-list {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.loading {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24%;
  aspect-ratio: 1 / 1.4;
  border: 1px solid rgba(0, 0, 0, 0.25);
}

@media screen and (max-width: 575px) {
  .loading {
    width: 49%;
  }
}
</style>