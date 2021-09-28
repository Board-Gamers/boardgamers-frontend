<template>
  <div class="medal">
    <img src="@/assets/profile/medal.png" alt="medal">
    <!-- <div>
      <img src="@/assets/profile/medal_active.png" alt="medal-active">
      <div class="medal-icon">
        <div>👽</div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "MissionItems"
}
</script>

<style scoped>
.medal {
  width: 100%;
  position: relative;
}

.medal img {
  width: 100%;
}

.medal-icon {
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
}
</style>