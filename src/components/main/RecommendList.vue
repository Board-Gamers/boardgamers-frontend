<template>
  <section v-if="games">
    <h1>Recommend</h1>
    <ul class="tab">
      <li @click="showRankRec" class="active">평점 높은 순</li>
      <li @click="showReviewRec">리뷰 많은 순</li>
      <li>준비중</li>
      <li>준비중</li>
    </ul>
    <div class="recommend-list">
      <RecommendItem v-for="(game, idx) in games.games" :key="idx" :game="game"/>
    </div>
    <Pagination :start="games.nowPage" @change="changeIndex"/>
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
    }
  },
  methods: {
    changeIndex: function (idx) {
      this.title === 'rank' ? this.updateRankRec(idx+1) : this.updateReviewRec(idx+1)
    },
    updateRankRec: async function (idx) {
      this.$store.state.recommend.rank = await RecApi.rankRec(idx)
    },
    updateReviewRec: async function (idx) {
      this.$store.state.recommend.review = await RecApi.reviewRec(idx)
    },
    showRankRec: function (e) {
      this.title = 'rank'
      this.activeTab(e)
    },
    showReviewRec: function (e) {
      this.title = 'review'
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
      return this.title === 'rank' ? this.$store.state.recommend.rank : this.$store.state.recommend.review
    },
  },
  mounted: async function () {
    Promise.all([this.updateRankRec(), this.updateReviewRec()])
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

ul :is(li:nth-child(1), li:nth-child(2)):hover {
  transform: translateY(0);
}

ul li.active {
  z-index: 1;
  border-bottom: 1px solid #fff;
  transform: translateY(0);
  background-color: #fff;
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
}
</style>