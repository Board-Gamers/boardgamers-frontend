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
        <GenderRadioBtn :value="gender" @input="changeGender"/>
      </div>
      <div class="age">
        <label for="age">나이</label>
        <input type="number" id="age" max="99" min="1" maxlength="2" @input="maxLengthCheck">
      </div>
    </form>
    <button class="btn btn-success" style="width: 130px;">Update info</button>
  </div>
</template>

<script>
import GenderRadioBtn from "../GenderRadioBtn.vue"

export default {
  name: "UpdateInfo",
  components: {
    GenderRadioBtn
  },
  data: function () {
    return {
      gender: true
    }
  },
  methods: {
    changeGender: function (data) {
      this.gender = data
    },
    maxLengthCheck: function (object) {
      if (object.target.value.length > object.target.maxLength){
        object.target.value = object.target.value.slice(0, object.target.maxLength);
      }  
    }
  }
}
</script>

<style scoped>
label {
  font-size: 20px;
  font-weight: bold;
  margin-right: 0.5rem;
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
  font-weight: bold;
}

input:focus {
  background: #fff;
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
  width: 100%;
  display: grid;
  grid-template-columns: auto 65px 65px;
  gap: 20px;
}

.update-info {
  width: 100%;
  margin-bottom: 1.5rem;
  padding: 0 12px;
  text-align: start;
  display: flex;
  flex-direction: column;
}

.nickname, .age {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 0 1rem;
}

@media screen and (max-width: 767px) {
  form {
    grid-template-columns: repeat(2, 50%);
    gap: 0px;
    margin-bottom: 0.5rem;
  }

  .nickname {
    grid-row: 1 / 2;
    grid-column: 1 / 3;
  }

  .gender {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  .age {
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
  }

  .age input {
    width: 65px;
  }
}

@media screen and (max-width: 575px) {
  .age {
    justify-content: flex-start;
  }
}
</style>