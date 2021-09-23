<template>
  <div class="main">

    <Navigation class="w-100"/>
    
    <MainBanner />

    <br>
    <div class="d-flex justify-content-between flex-wrap w-100">
      <CarouselCard title="평점 높은 순"/>
      <CarouselCard title="리뷰 많은 순"/>
      <CarouselCard title="유저 추천 순"/>
      <CarouselCard title="비슷한 게임"/>
    </div>

    <br>
    
    <!-- <div class="row card-section">

      <div class="col">
        <div class="card">
          <div>
            <img :src="require('@/assets/main/1.png')" alt="1" class="card-bg-img">
            <div>
              <h5 class="my-3">평점 높은 순</h5>
              <img :src="require('@/assets/main/1.png')" class="card-img-top" alt="1">
              <h5 class="my-3">스플랜더</h5>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">2. Card title</h5>
            <h5 class="card-title">3. Card title</h5>
            <h5 class="card-title">4. Card title</h5>
            <h5 class="card-title">5. Card title</h5>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <div>
            <img :src="require('@/assets/main/2.png')" alt="2" class="card-bg-img">
            <div>
              <h5 class="my-3">리뷰 많은 순</h5>
              <img :src="require('@/assets/main/2.png')" class="card-img-top" alt="2">
              <h5 class="my-3">할리갈리</h5>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">2. Card title</h5>
            <h5 class="card-title">3. Card title</h5>
            <h5 class="card-title">4. Card title</h5>
            <h5 class="card-title">5. Card title</h5>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <div>
            <img :src="require('@/assets/main/3.png')" alt="3" class="card-bg-img">
            <div>
              <h5 class="my-3">유저 기반 추천 게임</h5>
              <img :src="require('@/assets/main/3.png')" class="card-img-top" alt="3">
              <h5 class="my-3">5초 준다</h5>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">2. Card title</h5>
            <h5 class="card-title">3. Card title</h5>
            <h5 class="card-title">4. Card title</h5>
            <h5 class="card-title">5. Card title</h5>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <div>
            <img :src="require('@/assets/main/4.png')" alt="4" class="card-bg-img">
            <div>
              <h5 class="my-3">내가 좋아할만한 게임</h5>
              <img :src="require('@/assets/main/4.png')" class="card-img-top" alt="4">
              <h5 class="my-3">카탄</h5>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">2. Card title</h5>
            <h5 class="card-title">3. Card title</h5>
            <h5 class="card-title">4. Card title</h5>
            <h5 class="card-title">5. Card title</h5>
          </div>
        </div>
      </div>

    </div> -->

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
</style>