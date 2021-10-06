<template>
  <div class="answer">
    <label class="a-mark">A</label>
    <div class="content">
      <div>{{ data.content }}</div>
      <div>
        <span>{{ data.addDate }}</span>
        <button v-if="$store.state.isAdmin" @click="deleteReply"><i class="fas fa-trash-alt"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
import QnaApi from "@/apis/QnaApi.js"

export default {
  name: "AnswerItem",
  props: {
    data: {
      type: Object
    }
  },
  methods: {
    deleteReply: async function () {
      const data = { id: this.data.id }
      const res = await QnaApi.deleteReply(data)
      swal(res.data.message)
      this.$emit('delete-reply')
    }
  }
}
</script>

<style scoped>
.answer {
  grid-column: 2 / 3;
  display: grid;
  grid-template-columns: 45px auto;
  gap: 20px;
}

.a-mark {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  width: 45px;
  height: 45px;
  background-color: #DBE8D8;
  border-radius: 50%;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.5);
}

.content > div:first-child {
  padding: 10px 12px;
  display: flex;
  align-items: center;
  border: 2px solid #DBE8D8;
  border-radius: 5px;
  font-size: 16px;
}

.content > div:last-child {
  display: flex;
  align-items: flex-end;
  padding: 5px 12px;
  gap: 2vw;
  color: #808080;
  font-size: 12px;
  font-weight: bold;
}

button {
  all: unset;
  cursor: pointer;
}

button:hover {
  color: red;
}

@media screen and (max-width: 767px) {
  .a-mark {
    width: 35px;
    height: 35px;
    font-size: 1.2rem;
  }

  .answer {
    grid-template-columns: 35px auto;
    gap: 15px;
  }

  .content > div:first-child {
    padding: 5px 12px;
    font-size: 14px;
  }
}

@media screen and (max-width: 575px) {
  .a-mark {
    width: 30px;
    height: 30px;
    font-size: 1rem;
  }

  .answer {
    grid-template-columns: 30px auto;
    gap: 10px;
  }

  .content > div:first-child {
    padding: 5px 10px;
    font-size: 12px;
  }
}

</style>