<template>
  <div class="my-reviews">
    <h1>리뷰</h1>
    <div class="table-header">
      <div>평점</div>
      <div>내용</div>
      <div>게임명</div>
      <div>작성일</div>
    </div>

    <div v-if="reviews">
      <ReviewItems v-for="(review, idx) in reviews.reviews" :key="idx" :review="review"/>
    </div>

    <br>
    <Pagination 
      v-if="reviews" 
      :start="reviews.nowPage-1" 
      :size="reviews.totalPage" 
      @change="changeIndex" 
      class="d-flex justify-content-center" 
    />
  </div>
</template>

<script>
import UserApi from "@/apis/UserApi.js";

import ReviewItems from "./ReviewItems.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  name: "MyReviews",
  components: {
    ReviewItems,
    Pagination
  },
  data: function () {
    return {
      reviews: null
    }
  },
  methods: {
    changeIndex: async function (idx) {
      this.reviews = await this.updateUserReview(idx+1)
    },
    updateReviews: async function (idx) {
      const nickname = this.$route.params.nickname
      const data = { nickname, index: idx }
      return await UserApi.requestUserReview(data)
    },
  },
  mounted: async function () {
    this.reviews = await this.updateReviews(1)
  }
}
</script>

<style scoped>
.my-reviews {
  text-align: start;
  padding: 0 12px;
}

.table-header {
  border-top: 2px solid #dee2e6;
  border-bottom: 2px solid #dee2e6;
  padding: 1em 0;
  text-align: center;
  display: grid;
  grid-template-columns: 140px auto 140px 100px;
  gap: 20px;
}

@media screen and (max-width: 767px) {
  .table-header {
    font-size: 12px;
    grid-template-columns: 100px auto 100px 80px;
  }
}

@media screen and (max-width: 575px) {
  .table-header {
    font-size: 10px;
    grid-template-columns: 70px auto 60px 50px;
    gap: 5px;
  }
}
</style>