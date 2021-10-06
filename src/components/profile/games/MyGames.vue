<template>
  <div class="my-games">
    <h1>즐겨찾기</h1>

    <div v-if="games" class="game-list">
      <GameItems v-for="(game, idx) in games.list" :key="idx" :game="game"/>
    </div>
    <div v-else>즐겨찾기 되어있는 게임이 없습니다..</div>
    
    <br>
    <Pagination 
      v-if="games" 
      class="d-flex justify-content-center" 
      :start="games.nowPage-1" 
      :size="games.totalPage" 
      @change="changeIndex"
    />
  </div>
</template>

<script>
import UserApi from "@/apis/UserApi.js";

import GameItems from "./GameItems.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  name: "MyGames",
  components: {
    GameItems,
    Pagination
  },
  data: function () {
    return {
      games: null,
    }
  },
  methods: {
    changeIndex: async function (idx) {
      this.games = await this.updateFavorite(idx+1)
    },
    updateFavorite: async function (idx) {
      const nickname = this.$route.params.nickname
      const data = { nickname, index: idx }
      return await UserApi.requestFavorite(data)
    }
  },
  mounted: async function () {
    this.games = await this.updateFavorite(1)
  }
}
</script>

<style scoped>
.my-games {
  text-align: start;
  padding: 0 12px;
}

.game-list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(auto, 25%));
  gap: 2vw;
}

@media screen and (max-width: 767px) {
  .game-list {
    grid-template-columns: repeat(3, minmax(auto, 34%));
  }
}
</style>