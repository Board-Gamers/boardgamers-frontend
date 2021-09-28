<template>
  <div class="update-info">
    <h1>회원정보 수정</h1>
    <img src="@/assets/profile/profile_image.png" alt="profile">
    <form>
      <div class="nickname">
        <label for="nickname">닉네임</label>
        <input type="text" id="nickname">
      </div>
      <div class="gender">
        <label>성별</label>
        <div>
          <input type="radio" name="gender" id="male" :value="true" v-model="gender">
          <label for="male" style="color: blue;"><i class="fas fa-mars"></i></label>
          <input type="radio" name="gender" id="female" :value="false" v-model="gender">
          <label for="female" style="color: red;"><i class="fas fa-venus"></i></label>
        </div>
      </div>
      <div class="age">
        <label for="age">나이</label>
        <input type="number" id="age" max="99" min="1">
      </div>
    </form>
    <button class="btn btn-success" style="width: 130px;">Update info</button>
  </div>
</template>

<script>
export default {
  name: "UpdateInfo",
  data: function () {
    return {
      gender: true
    }
  }
}
</script>

<style scoped>
label {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
}

input[type="radio"] {
  display: none;
}

input[type="radio"]:checked + label {
  background-color: #c4c4c4;
}

img {
  width: 200px;
  height: 200px;
  display: block;
  margin: 2rem auto;
  border: 1px solid black;
  border-radius: 50%;
}

form {
  display: grid;
  grid-template-columns: auto 60px auto;
  gap: 30px;
  
}

.update-info {
  width: 100%;
  padding: 0 12px;
  text-align: start;
  display: flex;
  flex-direction: column;
}

.nickname, .gender, .age {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 0 1rem;
}

.nickname {
  flex-direction: column;
}

.gender div label {
  width: 30px;
  height: 30px;
  border: 1px solid black;
  text-align: center;
}

</style>