<template>
  <div class="game card">
    <div class="game-img">
      <img src="@/assets/main/1.png" alt="side-img">
      <img src="@/assets/main/1.png" alt="front-img">
    </div>
    <h5 class="card-title">스플랜더</h5>
  </div>
</template>

<script>
export default {
  name: "GameItems"
}
</script>

<style scoped>
.game {
  padding: 10% 5% 5%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
}

.game-img {
  height: auto;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  transform: perspective(500px);
  transform-style: preserve-3d;
}

.game-img img:nth-child(1) {
  width: 15%;
  transform: rotateY(-60deg);
  transform-origin: right;
  filter: brightness(70%);
}

.game-img img:nth-child(2) {
  width: 55%;
  height: auto;
  transform: rotateY(25deg);
  transform-origin: left;
}

.card-title {
  margin: 5% 0 0;
  font-weight: bold;
}

@media screen and (max-width: 575px) {
  .card-title {
    font-size: 12px;
  }
}
</style>