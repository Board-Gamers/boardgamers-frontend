<template>
  <div class="card carousel-card">
    
    <h5 class="title">{{ title }}</h5>

    <div v-if="games.length" class="head-list">
      <CarouselCardHead v-for="(game, idx) in games" :key="idx" :game="game"/>
      <button class="prev-btn" :disabled="!index" @click="prevBtn"></button>
      <button class="next-btn" :disabled="index === 4" @click="nextBtn"></button>
    </div>

    <div v-if="games.length" class="card-body">
      <div v-for="(game, idx) in games" :key="idx" @click="selectGame(idx)" class="game-name">
        <span>{{ idx+1 }}</span>
        <span v-if="game.nameKor">{{ game.nameKor }}</span>
        <span v-else>{{ game.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselCardHead from "./CarouselCardHead.vue";

export default {
  name: "CarouselCard",
  components: {
    CarouselCardHead
  },
  props: {
    title: {
      type: String,
    },
    games: {
      type: Array
    }
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
    },
    selectGame: function (idx) {
      if (this.index !== idx) {
        this.index = idx
        const now = this.$el.querySelector('.active')
        const target = this.$el.querySelectorAll('.card-head')[idx]
        now.classList.remove('active')
        target.classList.add('active')
      }
    },
  },
  mounted: async function () {
    const first_card = this.$el.querySelector('.card-head')
    first_card.classList.add('active')
    this.$emit('select-title', 'rank')
  }
}
</script>

<style scoped>
button {
  position: absolute;
  display: flex;
  align-items: center;
  width: 20%;
  height: 100%;
  top: 0;
  background-color: unset;
  border: unset;
  z-index: 2;
}

.prev-btn {
  left: 0;
  justify-content: flex-end;
}

.prev-btn::before {
  content: '';
  position: absolute;
  width: 40%;
  aspect-ratio: 1;
  box-shadow: -3px 3px 0px 1px #fff;
  transform: rotate(45deg);
}

.prev-btn:disabled::before {
  filter: brightness(50%);
}

.next-btn {
  right: 0;
  justify-content: flex-start;
}

.next-btn::before {
  content: '';
  position: absolute;
  width: 40%;
  aspect-ratio: 1;
  box-shadow: 3px -3px 0px 1px #fff;
  transform: rotate(45deg);
}

.next-btn:disabled::before {
  filter: brightness(50%);
}

.carousel-card {
  width: 24%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  top: 5%;
  font-weight: bold;
  margin: 0;
  position: absolute;
  color: white;
  z-index: 2;
}

.head-list {
  width: 100%;
  position: relative;
  aspect-ratio: 1/1.4;
}

.card-body {
  width: 100%;
  text-align: start;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 1rem 1rem;
}

.card-body > div {
  cursor: pointer;
}

.card-body span:first-child {
  color: gray;
}

.card-body span {
  font-size: 14px;
}

.game-name {
  display: grid;
  grid-template-columns: 15px auto;
  align-items: flex-start;
}

@media screen and (max-width: 767px) {
  .title {
    font-size: 16px;
  }
}

@media screen and (max-width: 575px) {
  .carousel-card {
    width: 49%;
  }
}

</style>