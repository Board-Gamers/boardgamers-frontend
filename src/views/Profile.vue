<template>
  <div class="profile">

    <Navigation />
  
    <NavTab @select="selectTab"/>

    <br>

    <div class="tab">
      <MyReviews v-if="selectedTab === 'review'"/>
      <MyMission v-else-if="selectedTab === 'mission'"/>
      <MyGames v-else-if="selectedTab === 'game'"/>
    </div>

    <!-- <Settings /> -->

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
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 1000px;
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