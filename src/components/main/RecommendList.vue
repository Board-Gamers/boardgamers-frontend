<template>
  <section v-if="games">
    <h1>Recommend</h1>
    <ul class="tab">
      <li @click="showRankRec" class="active">인기 게임</li>
      <li @click="showReviewRec">리뷰 많은 순</li>
      <li @click="showRateRec">평균 평점 순</li>
      <li v-if="isLogin" @click="showUserRec">유저 기반 추천</li>
      <li v-else class="disabled">유저 기반 추천</li>
    </ul>
    <div v-if="title === 'user' && isLogin" class="recommend-list">
      <RecommendItem v-for="(game, idx) in games" :key="idx" :game="game"/>
    </div>
    <div v-else class="recommend-list">
      <RecommendItem v-for="(game, idx) in games.games" :key="idx" :game="game"/>
    </div>
    <Pagination v-if="title !== 'user'" :start="games.nowPage" @change="changeIndex"/>
  </section>
</template>

<script>
import RecApi from "@/apis/RecommendApi.js";

import RecommendItem from "./RecommendItem.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  name: "RecommendList",
  components: {
    RecommendItem,
    Pagination
  },
  data: function () {
    return {
      title: 'rank',
      isLogin: false,
    }
  },
  methods: {
    changeIndex: function (idx) {
      if (this.title === 'rank') {
        this.updateRankRec(idx+1)
      } else if (this.title === 'review') {
        this.updateReviewRec(idx+1)
      } else {
        this.updateRateRec(idx+1)
      }
    },
    updateRankRec: async function (idx) {
      this.$store.state.recommend.rank = await RecApi.rankRec(idx)
    },
    updateReviewRec: async function (idx) {
      this.$store.state.recommend.review = await RecApi.reviewRec(idx)
    },
    updateRateRec: async function (idx) {
      this.$store.state.recommend.rate = await RecApi.rateRec(idx)
    },
    updateUserRec: async function () {
      this.$store.state.recommend.userBase = await RecApi.userRec()
    },
    showRankRec: function (e) {
      this.title = 'rank'
      this.activeTab(e)
    },
    showReviewRec: function (e) {
      this.title = 'review'
      this.activeTab(e)
    },
    showRateRec: function (e) {
      this.title = 'rate'
      this.activeTab(e)
    },
    showUserRec: function (e) {
      this.title = 'user'
      this.activeTab(e)
    },
    activeTab: function (e) {
      const li = e.currentTarget
      const active = this.$el.querySelector('.active')
      active.classList.remove('active')
      li.classList.add('active')
    }
  },
  computed: {
    games: function () {
      if (this.title === 'rank') {
        return this.$store.state.recommend.rank
      } else if (this.title === 'review') {
        return this.$store.state.recommend.review
      } else if (this.title === 'rate') {
        return this.$store.state.recommend.rate
      } else {
        return this.$store.state.recommend.userBase?.slice(0, 12) ?? []
      }
    },
  },
  mounted: async function () {
    const token = localStorage.getItem('jwt')
    this.isLogin = Boolean(token)
    if (this.isLogin) {
      await Promise.all([this.updateRankRec(), this.updateReviewRec(), this.updateRateRec(), this.updateUserRec()])
    } else {
      await Promise.all([this.updateRankRec(), this.updateReviewRec(), this.updateRateRec()])
    }
  }
}
</script>

<style scoped>
section {
  width: 100%;
  margin: 10rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

h1 {
  font-weight: bold;
}

ul {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, auto);
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

ul li {
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.5);
  padding: 15px 0;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px 5px 0 0;
  transform: translateY(50%);
  transition: 0.2s;
  background-color: rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

ul li:hover {
  transform: translateY(0);
}

ul li.active {
  z-index: 1;
  border-bottom: 1px solid #fff;
  transform: translateY(0);
  background-color: #fff;
}

ul li.disabled:hover {
  transform: translateY(50%);
}

.recommend-list {
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 20px;
}

.recommend-list::before {
  position: absolute;
  content: '';
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.5); 
  top: -21px;
}

@media screen and (max-width: 575px) {
  .recommend-list {
    grid-template-columns: repeat(2, auto);
  }

  ul li {
    font-size: 12px;
    padding: 10px 0;
  }
}
</style>