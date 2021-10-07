<template>
  <div class="main">

    <Navigation class="w-100"/>
    
    <MainBanner v-if="bannerGames.length" :games="bannerGames"/>

    <br>
    <div class="card-list">
      <CarouselCard v-if="rankGames.length" :games="rankGames" title="인기 게임" />
      <div v-else class="loading">로딩중</div>
      <CarouselCard v-if="reviewGames.length" :games="reviewGames" title="리뷰 많은 순" />
      <div v-else class="loading">로딩중</div>
      <CarouselCard v-if="rateGames.length" :games="rateGames" title="평균 평점 순"/>
      <div v-else class="loading">로딩중</div>
      <div v-if="!isLogin" class="loading">로그인을 해주세요</div>
      <CarouselCard v-else-if="userGames.length" :games="userGames" title="유저 기반 추천"/>
      <div v-else class="loading">리뷰를 남겨 주세요<br>(매일 00:00에 갱신됩니다.)</div>
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
  data: function () {
    return {
      isLogin: false
    }
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
    getRateRec: async function () {
      if (this.$store.state.recommend.rate) {
        return this.$store.state.recommend.rate
      } else {
        const response = await RecApi.rateRec()
        this.$store.state.recommend.topRate = response
        return response
      }
    },
    getUserRec: async function () {
      if (this.$store.state.recommend.userBase) {
        return this.$store.state.recommend.userBase
      } else {
        const response = await RecApi.userRec()
        this.$store.state.recommend.topUserBase = response.slice(0, 5)
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
    rateGames: function () {
      return this.$store.state.recommend.topRate?.games.slice(0, 5) ?? []
    },
    userGames: function () {
      return this.$store.state.recommend.topUserBase ?? []
    },
    bannerGames: function () {
      return [...this.rankGames, ...this.reviewGames, ...this.rateGames, ...this.userGames]
    }
  },
  mounted: async function () {
    const token = localStorage.getItem('jwt')
    this.isLogin = token ? true : false
    const response = await Promise.all([this.getRankRec(), this.getReviewRec(), this.getRateRec(), this.getUserRec()])
    this.$store.state.recommend = { 
      ...this.$store.state.recommend, 
      rank: response[0], 
      review: response[1],
      rate: response[2],
      userBase: response[3]
    }
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
  height: 100%;
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