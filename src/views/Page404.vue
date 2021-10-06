<template>
  <div class="page404">
    <Navigation />

    <h1>404</h1>
    <h1>Page Not Found</h1>
  </div>
</template>

<script>
import Navigation from "@/components/boardgame/Navigation.vue";

export default {
  name: "Page404",
  components: {
    Navigation,
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  font-weight: bold;
  font-size: 10vw;
}
</style>