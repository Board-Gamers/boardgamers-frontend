<template>
  <div class="profile">

    <Navigation />
  
    <NavTab />

    <MyReviews />


  </div>
</template>

<script>
import Navigation from "@/components/boardgame/Navigation.vue";
import NavTab from "@/components/profile/NavTab.vue";
import MyReviews from "@/components/profile/MyReviews.vue";

export default {
  name: "Profile",
  components: {
    Navigation,
    NavTab,
    MyReviews
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
</style>