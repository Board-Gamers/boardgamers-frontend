<template>
  <div class="settings">
    
    <UpdateInfo />
    
    <UpdatePwd />
    
  </div>
</template>

<script>
import UpdateInfo from "./UpdateInfo.vue";
import UpdatePwd from "./UpdatePwd.vue";

export default {
  name: "Settings",
  components: {
    UpdateInfo,
    UpdatePwd,
  }
}
</script>

<style scoped>
.settings {
  position: relative;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  gap: 5vw;
}

</style>