<template>
  <div class="main">

    <Navigation class="w-100"/>
    
    <MainBanner />

    <br>
    <div class="card-list">
      <CarouselCard title="평점 높은 순"/>
      <CarouselCard title="리뷰 많은 순"/>
      <CarouselCard title="유저 추천 순"/>
      <CarouselCard title="비슷한 게임"/>
    </div>

    <br>
    

  </div>
</template>

<script>
import Navigation from "@/components/boardgame/Navigation.vue";
import MainBanner from "@/components/main/MainBanner.vue";
import CarouselCard from "@/components/main/CarouselCard.vue";

export default {
  name: "Main",
  components: {
    Navigation,
    MainBanner,
    CarouselCard,
  }
}
</script>

<style scoped>
.main {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 1000px;
}

.card-list {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>