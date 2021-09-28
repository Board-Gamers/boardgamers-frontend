<template>
  <div class="profile">

    <Navigation />
  
    <NavTab @select="selectTab"/>

    <br>

    <div class="tab">
      <MyReviews v-if="selectedTab === 'review'"/>
      <MyMission v-else-if="selectedTab === 'mission'"/>
      <MyGames v-else-if="selectedTab === 'game'"/>
      <Settings v-else-if="selectedTab === 'setting'"/>
    </div>

    <br>

  </div>
</template>

<script>
import Navigation from "@/components/boardgame/Navigation.vue";
import NavTab from "@/components/profile/NavTab.vue";
import MyReviews from "@/components/profile/reviews/MyReviews.vue";
import MyMission from "@/components/profile/missions/MyMission.vue";
import MyGames from "@/components/profile/games/MyGames.vue";
import Settings from "@/components/profile/settings/Settings.vue";

export default {
  name: "Profile",
  components: {
    Navigation,
    NavTab,
    MyReviews,
    MyMission,
    MyGames,
    Settings,
  },
  data: function () {
    return {
      selectedTab: 'review'
    }
  },
  methods: {
    selectTab: function (tab) {
      this.selectedTab = tab
    }
  }
}
</script>

<style scoped>
.profile {
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.tab > div {
  animation: show 0.5s 1 ease-out;
}

@keyframes show {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>