<template>
  <div class="settings">
    
    <UpdateInfo />
    
    <div class="d-flex flex-column w-100">
      <UpdatePwd />
      <DeleteAccount />
    </div>
    
  </div>
</template>

<script>
import UpdateInfo from "./UpdateInfo.vue";
import UpdatePwd from "./UpdatePwd.vue";
import DeleteAccount from "./DeleteAccount.vue";

export default {
  name: "Settings",
  components: {
    UpdateInfo,
    UpdatePwd,
    DeleteAccount,
  }
}
</script>

<style scoped>
.settings {
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 5vw;
}

@media screen and (max-width: 575px) {
  .settings {
    flex-direction: column;
  }
}

</style>