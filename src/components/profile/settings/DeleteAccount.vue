<template>
  <div class="delete-account">
    <h1 class="text-danger fw-bold">계정 삭제</h1>
    <p>BoardGamers 계정을 삭제합니다. 삭제된 계정은 다시 복구가 불가능 하며 계정의 게시물이나 정보는 완전히 삭제 됩니다.</p>
    <p>그래도 계정을 삭제하시겠습니까? <input type="checkbox" v-model="value"></p>
    <button class="btn btn-danger" :disabled="!value" @click="deleteAccount">Delete</button>
  </div>
</template>

<script>
import UserApi from "@/apis/UserApi.js";

export default {
  name: "DeleteAccount",
  data: function () {
    return {
      value: false
    }
  },
  methods: {
    deleteAccount: async function () {
      const id = localStorage.getItem('id')
      const confirm = await swal({
        icon: 'warning',
        text: '계정을 삭제하시려면 아이디를 입력해 주세요',
        content: 'input',
        buttons: ['취소', '삭제'],
        dangerMode: true
      })
      if (!confirm) return null
      if (confirm !== id) {
        return swal({
          icon: 'error',
          title: '아이디가 일치하지 않습니다.'
        })
      } else {
        const response = await UserApi.deleteAccount(confirm)
        localStorage.clear()
        await swal({
          icon: 'success',
          title: response.message
        })
        this.$router.push({ name: 'Login'})
      }
    }
  }
}
</script>

<style scoped>
.delete-account {
  text-align: start;
  margin-top: 3rem;
  padding: 0 12px;
  font-weight: bold;
}

</style>