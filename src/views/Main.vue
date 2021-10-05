<template>
  <div class="main">

    <Navigation class="w-100"/>
    
    <MainBanner v-if="bannerGames.length" :games="bannerGames"/>

    <br>
    <div class="card-list">
      <CarouselCard v-if="rankGames.length" :games="rankGames" title="평점 높은 순" />
      <div v-else class="loading">로딩중</div>
      <CarouselCard v-if="reviewGames.length" :games="reviewGames" title="리뷰 많은 순" />
      <div v-else class="loading">로딩중</div>
      <div class="loading">준비중</div>
      <div class="loading">준비중</div>
      <!-- <CarouselCard title="유저 추천 순"/> -->
      <!-- <CarouselCard title="비슷한 게임"/> -->
    </div>

    <RecommendList />

  </div>
</template>

<script>
import RecApi from "@/apis/RecommendApi.js";

import Navigation from "@/components/boardgame/Navigation.vue";
import MainBanner from "@/components/main/MainBanner.vue";
import CarouselCard from "@/components/main/CarouselCard.vue";
import RecommendList from "@/components/main/RecommendList.vue";

export default {
  name: "Main",
  components: {
    Navigation,
    MainBanner,
    CarouselCard,
    RecommendList,
  },
  methods: {
    getRankRec: async function () {
      if (this.$store.state.recommend.rank) {
        return this.$store.state.recommend.rank
      } else {
        const response = await RecApi.rankRec()
        this.$store.state.recommend.topRank = response
        return response
      }
    },
    getReviewRec: async function () {
      if (this.$store.state.recommend.rank) {
        return this.$store.state.recommend.rank
      } else {
        const response = await RecApi.reviewRec()
        this.$store.state.recommend.topReview = response
        return response
      }
    },
  },
  computed: {
    rankGames: function () {
      return this.$store.state.recommend.topRank?.games.slice(0, 5) ?? []
    },
    reviewGames: function () {
      return this.$store.state.recommend.topReview?.games.slice(0, 5) ?? []
    },
    bannerGames: function () {
      return [...this.rankGames, ...this.reviewGames]
    }
  },
  mounted: async function () {
    const response = await Promise.all([this.getRankRec(), this.getReviewRec()])
    this.$store.state.recommend = { ...this.$store.state.recommend, rank: response[0], review: response[1]}
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
  align-items: flex-start;
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