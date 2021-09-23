<template>
  <div class="card carousel-card">
    
    <h5 class="title">{{ title }}</h5>

    <div class="head-list">
      <div class="card-head">
        <img :src="require('@/assets/main/1.png')" class="card-bg-img" alt="1">
        <img :src="require('@/assets/main/1.png')" class="card-head-img" alt="1">
        <h6>스플랜더</h6>
      </div>

      <div class="card-head">
        <img :src="require('@/assets/main/2.png')" alt="2" class="card-bg-img">
        <img :src="require('@/assets/main/2.png')" class="card-head-img" alt="2">
        <h6>할리갈리</h6>
      </div>

      <div class="card-head">
        <img :src="require('@/assets/main/3.png')" alt="3" class="card-bg-img">
        <img :src="require('@/assets/main/3.png')" class="card-head-img" alt="3">
        <h6>5초준다</h6>
      </div>

      <div class="card-head">
        <img :src="require('@/assets/main/4.png')" alt="4" class="card-bg-img">
        <img :src="require('@/assets/main/4.png')" class="card-head-img" alt="4">
        <h6>카탄</h6>
      </div>
    </div>

    <button :disabled="index === 0" @click="prevBtn">prev</button>
    <button :disabled="index === 3" @click="nextBtn">next</button>

    <div class="card-body">
      <p class="card-title"><span>1</span>Card title</p>
      <p class="card-title"><span>2</span>Card title</p>
      <p class="card-title"><span>3</span>Card title</p>
      <p class="card-title"><span>4</span>Card title</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselCard",
  props: {
    title: String,
  },
  data: function () {
    return {
      index: 0,
    }
  },
  methods: {
    prevBtn: function () {
      this.index -= 1
      const now = this.$el.querySelector('.active')
      const prev = now.previousElementSibling
      now.classList.remove('active')
      prev.classList.add('active')
    },
    nextBtn: function () {
      this.index += 1
      const now = this.$el.querySelector('.active')
      const next = now.nextElementSibling
      now.classList.remove('active')
      next.classList.add('active')
    }
  },
  mounted: function () {
    const first_card = this.$el.querySelector('.card-head')
    first_card.classList.add('active')
  }
}
</script>

<style scoped>
h5, h6 {
  margin: 0;
  position: absolute;
  color: white;
  z-index: 1;
}

.carousel-card {
  width: 25%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  top: 5%;
  font-weight: bold;
}

.head-list {
  width: 100%;
  position: relative;
  aspect-ratio: 1/1.4;
}

.card-head {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  transition: 0.5s;
}

.card-head > h6 {
  bottom: 10%;
  transition: 0.5s;
  opacity: 0;
}

.card-bg-img {
  position: absolute;
  width: 100%;
  height: 100%;
  filter: blur(5px) brightness(60%);
  transition: 0.5s;
  opacity: 0;
}

.card-head-img {
  width: 50%;
  z-index: 1;
  transition: 0.5s;
  transform: scale(0);
}

.card-body {
  width: 100%;
  text-align: start;
}

.card-head.active .card-head-img {
  transform: scale(1);
}

.card-head.active :is(.card-bg-img, h6) {
  opacity: 1;
}

.card-title {
  font-weight: bold;
}

.card-title span {
  color: gray;
  margin-right: 10px;
  font-size: 1.2em;
}
@media screen and (max-width: 575px) {
  .carousel-card {
    width: 50%;
  }
}

</style>