<template>
  <section>
    <h1>Recommend - {{ korTitle }}</h1>
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
  props: {
    title: {
      type: String
    }
  },
  components: {
    RecommendItem,
    Pagination
  },
  data: function () {
    return {
      index: 0
    }
  },
  methods: {
    changeIndex: function (idx) {
      if (this.title === 'rank') {
        this.updateRankRec(idx+1)
      } else {
        this.updateReviewRec(idx+1)
      }
    },
    updateRankRec: async function (idx) {
      this.$store.state.recommend.rank = await RecApi.rankRec(idx)
    },
    updateReviewRec: async function (idx) {
      this.$store.state.recommend.review = await RecApi.reviewRec(idx)
    }
  },
  computed: {
    games: function () {
      return this.title === 'rank' ? this.$store.state.recommend.rank : this.$store.state.recommend.review
    },
    korTitle: function () {
      return this.title === 'rank' ? '평점 높은 순' : '리뷰 많은 순'
    }
  },
}
</script>

<style scoped>
section {
  width: 100%;
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

h1 {
  font-weight: bold;
}

.recommend-list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 20px;
}

@media screen and (max-width: 575px) {
  .recommend-list {
    grid-template-columns: repeat(2, auto);
  }
}
</style>