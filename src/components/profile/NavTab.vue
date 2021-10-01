<template>
  <div class="navtab">
    <img src="@/assets/profile/profile_image.png" alt="profile">
    <div>
      <div class="user-info">
        <h3>Yeong-a</h3>
      </div>
      <ul>
        <li @click="selectReview"><i class="far fa-comment-alt"></i> 리뷰</li>
        <li @click="selectMission"><i class="fas fa-medal"></i> 달성</li>
        <li @click="selectGame"><i class="far fa-folder-open"></i> 즐겨찾기</li>
        <li @click="selectSetting"><i class="fas fa-cog"></i> 설정</li>
        <!-- <li class="disabled"><i class="fas fa-cog"></i> 설정</li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavTab",
  methods: {
    selectTab: function (e) {
      const tab = e.currentTarget
      const selectedTab = this.$el.querySelector('.active')
      if (tab !== selectedTab) {
        selectedTab.classList.remove('active')
        tab.classList.add('active')
      }
    },
    selectReview: function (e) {
      this.selectTab(e)
      this.$emit('select', 'review')
    },
    selectMission: function (e) {
      this.selectTab(e)
      this.$emit('select', 'mission')
    },
    selectGame: function (e) {
      this.selectTab(e)
      this.$emit('select', 'game')
    },
    selectSetting: function (e) {
      this.selectTab(e)
      this.$emit('select', 'setting')
    },
  },
  mounted: function () {
    const x = this.$el.querySelector('li')
    x.classList.add('active')
  }
}
</script>

<style scoped>
h3 {
  margin: 0;
  font-weight: bold;
}

.navtab {
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  text-align: start;
  gap: 36px;
  background: #fff;
  z-index: 1;
}

.navtab img {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 50%;
}

.user-info {
  margin: 10px 0;
}

ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

ul li {
  text-align: center;
  width: 140px;
  font-size: 20px;
  padding: 8px 0;
  cursor: pointer;
}

ul li:hover {
  border-bottom: 3px solid #C4C4C4;
  background: rgba(0, 0, 0, 0.05);
}

ul li.active {
  border-bottom: 3px solid #9CB8FF;
  background: #fff;
}

ul li.disabled {
  cursor: default;
  color: #C4C4C4;
}

ul li.disabled:hover {
  background: #fff;
  border-bottom: unset;
}

@media screen and (max-width: 767px){
  .navtab img {
    position: absolute;
    top: 0px;
    left: calc((100vw - 572px) / 2);
    width: 50px;
    height: 50px;
  }

  .user-info {
    margin-left: 67px;
  }
}

@media screen and (max-width: 575px){
  .navtab img {
    left: 12px;
  }

  .user-info {
    margin-left: 82px;
  }

  ul li {
    width: 25vw;
    font-size: 14px;
    font-weight: bold;
  }

}
</style>