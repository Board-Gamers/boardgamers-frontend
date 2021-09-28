<template>
  <div class="my-games">
    <h1>즐겨찾기</h1>
    <div class="game-list">
      <GameItems v-for="n in 12" :key="n"/>
    </div>
    
    <br>

    <button>Pagination</button>
  </div>
</template>

<script>
import GameItems from "./GameItems.vue";

export default {
  name: "MyGames",
  components: {
    GameItems,
  }
}
</script>

<style scoped>
.my-games {
  text-align: start;
  padding: 0 12px;
}

.game-list {
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 2vw;
}

@media screen and (max-width: 767px) {
  .game-list {
    grid-template-columns: repeat(3, auto);
  }
}
</style>