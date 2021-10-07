<template>
  <div v-if="achievement" class="my-mission">
    <h1>전체 달성률 - <span class="fw-bold">{{ achievement.percent | percentTruncate }}%</span></h1>
    <br>
    <div>
      <h3>Award</h3>
      <div v-if="achievement.award.length" class="medal-list">
        <MissionItems v-for="(medal, idx) in achievement.award" :key="idx" :value="medal"/>
      </div>
    </div>
    <br>
    <div>
      <h3>Badges</h3>
      <div v-if="achievement.badges.length" class="medal-list">
        <MissionItems v-for="(badge, idx) in achievement.badges" :key="idx" :value="badge"/>
      </div>
    </div>
    <br>
    <div>
      <h3>Conquered</h3>
      <div v-if="achievement.conquered.length" class="medal-list">
        <MissionItems v-for="(conquer, idx) in achievement.conquered" :key="idx" :value="conquer"/>
      </div>
    </div>
  </div>
</template>

<script>
import UserApi from "@/apis/UserApi.js";

import MissionItems from "./MissionItems.vue";

export default {
  name: "MyMission",
  components: {
    MissionItems,
  },
  data: function () {
    return {
      achievement: null
    }
  },
  filters: {
    percentTruncate: function (text) {
      return Math.round(10*text) / 10 
    }
  },
  mounted: async function () {
    const nickname = this.$route.params.nickname
    const response = await UserApi.requestAchievement(nickname)
    this.achievement = {...response}
  }
}
</script>

<style scoped>
.my-mission {
  text-align: start;
  padding: 0 12px;
}

.medal-list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, minmax(auto, 20%));
  gap: 2vw;
}

@media screen and (max-width: 767px) {
  .medal-list {
    grid-template-columns: repeat(3, minmax(auto, 34%));
  }
}

@media screen and (max-width: 575px) {
  .medal-list {
    grid-template-columns: repeat(2, minmax(auto, 50%));
  }
}
</style>