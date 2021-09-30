<template>
  <div class="gender">
    <input type="radio" name="gender" id="male" :value="true" v-model="gender">
    <label for="male" style="color: blue;"><i class="fas fa-mars"></i></label>
    <input type="radio" name="gender" id="female" :value="false" v-model="gender">
    <label for="female" style="color: red;"><i class="fas fa-venus"></i></label>
  </div>
</template>

<script>
export default {
  name: "GenderRadioBtn",
  props: {
    value: {
      type: Boolean
    }
  },
  data: function () {
    return {
      gender: this.value
    }
  },
  watch: {
    gender: function () {
      this.$emit('input', this.gender)
    }
  }
}
</script>

<style scoped>
input[type="radio"] {
  display: none;
}

input[type="radio"]:checked + label {
  box-shadow: inset 0 -5px 5px rgba(0, 0, 0, 0.025),
              inset 0 5px 10px rgba(0, 0, 0, 0.1);
}

#male:checked + label {
  box-shadow: inset 0 -5px 5px rgba(0, 0, 255, 0.025),
              inset 0 5px 10px rgba(0, 0, 255, 0.1);
  background-color: rgba(0, 0, 255, 0.025);
}

#female:checked + label {
  box-shadow: inset 0 -5px 5px rgba(255, 0, 0, 0.025),
              inset 0 5px 10px rgba(255, 0, 0, 0.1);
  background-color: rgba(255, 0, 0, 0.025);
}

.gender {
  display: flex;
  justify-content: flex-start;
}

.gender label {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  box-shadow: inset 0 -5px 5px rgba(0, 0, 0, 0.1),
              0 5px 10px rgba(0, 0, 0, 0.1),
              0 10px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}
</style>