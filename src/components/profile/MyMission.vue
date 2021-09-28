<template>
  <div class="my-mission">
    <h1>달성</h1>
    <div class="medal-list">
      <MissionItems v-for="n in 15" :key="n"/>
    </div>
  </div>
</template>

<script>
import MissionItems from "@/components/profile/MissionItems.vue";

export default {
  name: "MyMission",
  components: {
    MissionItems,
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
  grid-template-columns: repeat(5, auto);
  gap: 5vw;
}

</style>