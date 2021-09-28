<template>
  <div class="update-pwd">
    <h1>비밀번호 변경</h1>

    <br>

    <div class="nickname">
      <label for="password">현재 비밀번호</label>
      <input type="password" id="password">
    </div>

    <div class="nickname">
      <label for="new_password">새 비밀번호</label>
      <input type="password" id="new_password">
    </div>

    <div class="nickname">
      <label for="password_confirmation">비밀번호 확인</label>
      <input type="password" id="password_confirmation">
    </div>

    <button class="btn btn-success" style="width: 130px;">Change Pwd</button>
  </div>
</template>

<script>
export default {
  name: "UpdatePwd"
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
}

</style>