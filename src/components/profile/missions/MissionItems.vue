<template>
  <div class="medal card">
    <div class="medal-img">
      <img src="@/assets/profile/medal_active.png" alt="medal-active">
      <div class="medal-icon">
        <img :src="imgUrl" alt="logo">
      </div>
    </div>
    <div class="content">
      <h6>{{ value.title }}</h6>
      <p>{{ value.detail }}</p>
      <p>{{ value.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MissionItems",
  props: {
    value: {
      type: Object
    }
  },
  computed: {
    imgUrl: function () {
      const title = this.value.title
      return require(`@/assets/profile/achievement/${title}.png`)
    }
  }
}
</script>

<style scoped>
.medal {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  padding: 15px;
}

.medal-img {
  width: 50%;
  position: relative;
  display: flex;
  justify-content: center;
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

.medal-icon > img {
  width: 100%;
  padding: 20%;
}

.content {
  width: 100%;
}

.content h6 {
  text-align: center;
  font-weight: bold;
}

.content > p:last-child {
  margin: 0;
}

@media screen and (max-width: 767px) {
  .medal-img {
    width: 100%;
  }
}

@media screen and (max-width: 575px) {
  .medal-img {
    width: 80%;
  }
}
</style>