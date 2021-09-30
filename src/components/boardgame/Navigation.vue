<template>
  <div class="py-4 navigation">
    <div class="logo">
      <div class="logo-btn fs-1 text-black btn fw-bold" v-on:click="goMain"><i class="fas fa-dice"></i> Boardgamers</div>
      <div class="hamburger btn" @click="openTab"><i class="fas fa-bars"></i></div>
    </div>
    <div class="tab">
      <div class="px-2 btn" v-on:click="goSearch"><i class="fas fa-search"></i><br />&nbsp;&nbsp;&nbsp;검색&nbsp;&nbsp;&nbsp;</div>
      <div class="px-2 btn" v-on:click="goLogout" v-if="isLogin"><i class="fas fa-sign-out-alt"></i><br />로그아웃</div>
      <div class="px-2 btn" v-on:click="goLogin" v-else><i class="fas fa-sign-in-alt"></i><br />로그인</div>
      <div class="px-2 btn" v-on:click="goQna"><i class="far fa-question-circle"></i><br />고객센터</div>
      <div class="px-2 btn" v-on:click="goProfile"><i class="fas fa-user"></i><br />내 프로필</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navigation",
  computed: {
    isLogin() {
      return localStorage.getItem("nickname");
    },
  },
  methods: {
    goMain() {
      if (this.$route.name !== "Main") this.$router.push({ name: "Main" });
      else this.$router.go();
    },
    goSearch() {
      if (this.$route.name !== "BoardGameSearch") this.$router.push({ name: "BoardGameSearch" });
    },
    goLogin() {
      if (this.$route.name !== "Login") this.$router.push({ name: "Login" });
    },
    goQna() {
      if (this.$route.name !== "QnA") this.$router.push({ name: "QnA" });
    },
    goProfile() {
      if (this.$route.name !== "Profile") this.$router.push({ name: "Profile", params: { nickname: 'asd' } });
    },
    goLogout() {
      localStorage.clear();
      this.$router.go();
    },
    openTab() {
      const tab = this.$el.querySelector('.tab')
      tab.classList.toggle('active')
    }
  },
};
</script>

<style scoped>
.navigation {
  position: relative;
  display: flex;
  justify-content: space-between;
}

.logo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tab {
  display: flex;
  overflow: hidden;
}

.tab > div {
  font-weight: bold;
  font-size: 1.2rem;
}

.hamburger {
  display: none;
  font-size: 2rem;
}

@media screen and (max-width: 767px) {
  .navigation {
    flex-direction: column;
  }

  .tab.active {
    height: 100%;
  }

  .tab {
    width: 100%;
    height: 0px;
    justify-content: space-evenly;
  }

  .hamburger {
    display: inherit;
  }
}

@media screen and (max-width: 575px) {
  .tab > div {
    font-size: 16px;
  }
}
</style>
