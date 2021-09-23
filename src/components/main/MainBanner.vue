<template>
  <div class="main-banner">
    <h1 class="fw-bold">스플랜더</h1>
    <h6>용을 물리치고 용사가 되어 보물을 얻는 게임</h6>
    <div class="banner-info">
      <div>
        <img src="@/assets/main/playnum.png" alt="playnum">
        <p class="fw-bold">게임 인원</p>
        <p>2 ~ 4</p>
      </div>
      <div>
        <img src="@/assets/main/age.png" alt="age">
        <p class="fw-bold">게임 연령</p>
        <p>8세</p>
      </div>
      <div>
        <img src="@/assets/main/playtime.png" alt="playtime">
        <p class="fw-bold">게임 시간</p>
        <p>120분</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainBanner",
}
</script>

<style scoped>
h5, p {
  margin: 0;
}

.main-banner {
  width: 100%;
  height: 65vw;
  max-height: 320px;
  padding: 5% 10% 3%;
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
  background-image: url('../../assets/main/1.png');
  background-blend-mode: color;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 14px;
}

.banner-info {
  width: 60%;
  min-width: 260px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.banner-info img {
  max-width: 35px;
  width: 7vw;
  margin-bottom: 0.5em;
}

@media screen and (max-width: 575px){
  .main-banner {
    font-size: 12px
  }
}

</style>