<template>
  <div class="update-pwd">
    <h1>비밀번호 변경</h1>

    <div class="password">
      <label for="password">현재 비밀번호</label>
      <input type="password" id="password" v-model="credentials.password">
    </div>

    <div class="new-password">
      <label for="new_password">새 비밀번호</label>
      <input type="password" id="new_password" v-model="credentials.newPassword">
    </div>

    <div class="password-confirmation">
      <label for="password_confirmation">비밀번호 확인</label>
      <input type="password" id="password_confirmation" v-model="passwordConfirmation">
      <p v-if="error">{{ error }}</p>
    </div>

    <button class="btn btn-success" style="width: 130px;" :disabled="isConfirm" @click="updatePwd">Change Pwd</button>
  </div>
</template>

<script>
import UserApi from "@/apis/UserApi.js";

export default {
  name: "UpdatePwd",
  data: function () {
    return {
      credentials: {
        password: null,
        newPassword: null,
      },
      passwordConfirmation: null,
      error: null,
    }
  },
  methods: {
    updatePwd: function () {
      const id = localStorage.getItem('id')
      const data = {
        id,
        credentials: {...this.credentials}
      }
      UserApi.updatePassword(data)
      .then(res => {
        alert(res.data.message)
        this.credentials = {password: null, newPassword: null}
        this.passwordConfirmation = null
      })
      .catch(err => {
        alert('비밀번호를 다시 한번 확인해 주세요.')
        this.credentials = {password: null, newPassword: null}
        this.passwordConfirmation = null
      })
    }
  },
  computed: {
    isConfirm: function () {
      if (!this.credentials.password || !this.credentials.newPassword || !this.passwordConfirmation) {
        return true
      } else if (this.credentials.newPassword !== this.passwordConfirmation) {
        this.error = '비밀번호가 일치하지 않습니다.'
        return true
      } else {
        this.error = null
        return false
      }
    }
  }
}
</script>

<style scoped>
.update-pwd {
  width: 100%;
  padding: 0 12px;
  text-align: start;
}

.update-pwd > div {
  margin-bottom: 1.5rem;
}

label {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  max-width: 440px;
  padding: 5px 12px;
  line-height: 20px;
  font-size: 14px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.05);
  outline: none;
}

input:focus {
  background: #fff;
}

:is(.password-confirmation, .password) p {
  font-size: 0.75em;
  color: #dc3545;
}

</style>