<template>
  <div class="table-body">
    <div><Rating :value="review.rating"/> {{ review.rating }}</div>
    <div class="text-start">{{ review.comment }}</div>
    <div @click="goToGameDetail" style="cursor: pointer;">{{ review.gameName }}</div>
    <div>21.08.25</div>
    <!-- {{ review }} -->
  </div>
</template>

<script>
import Rating from "@/components/Rating.vue";

export default {
  name: "ReviewItems",
  props: {
    review: {
      type: Object
    }
  },
  components: {
    Rating,
  },
  methods: {
    goToGameDetail: function () {
      this.$router.push({ name: 'BoardGameDetail', params: { id: this.review.gameId }})
    }
  }
}
</script>

<style scoped>
.table-body {
  width: 100%;
  border-bottom: 2px solid #dee2e6;
  padding: 13px 0;
  text-align: center;
  display: grid;
  grid-template-columns: 140px auto 140px 100px;
  gap: 20px;
}

@media screen and (max-width: 767px) {
  .table-body {
    font-size: 12px;
    grid-template-columns: 100px auto 100px 80px;
  }
}

@media screen and (max-width: 575px) {
  .table-body {
    font-size: 10px;
    grid-template-columns: 70px auto 60px 50px;
    gap: 5px;
  }

  .table-body > div:first-child {
    padding: 0 5px;
  }
}

</style>