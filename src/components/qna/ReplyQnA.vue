<template>
  <div class="reply">
    <label class="a-mark">A</label>
    <div class="answer">
      <textarea rows="3" placeholder="답변 작성하기" v-model="content"></textarea>
      <div>
        <button @click="replyQnA" :disabled="!content">답변 작성</button>
      </div>
    </div>
  </div>
</template>

<script>
import QnaApi from "@/apis/QnaApi.js"

export default {
  name: "ReplyQnA",
  props: {
    qnaId: {
      type: Number
    }
  },
  data: function () {
    return {
      content: null
    }
  },
  methods: {
    replyQnA: async function () {
      const data = {
        qnaId: this.qnaId,
        content: this.content,
        title: '1'
      }
      const res = await QnaApi.replyQnA(data)
      this.content = null
      alert(res.message)
      this.$emit('add-reply', res.data)
    }
  }
}
</script>

<style scoped>
.reply {
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

.answer > div:last-child {
  display: flex;
  padding: 5px 0px 5px 12px;
  gap: 2vw;
  color: #808080;
  font-size: 12px;
  font-weight: bold;
}

textarea {
  width: 100%;
  min-height: 48px;
  max-height: 150px;
  outline: none;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  border: 2px solid #DBE8D8;
  border-radius: 5px;
  font-size: 16px;
}

button {
  background-color: #DBE8D8;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  padding: 5px 10px;
  margin: 0 0 0 auto;
}

button:hover:not(:disabled) {
  filter: brightness(95%);
}

button:focus {
  box-shadow: 0 0 0 1px #d3ded1;
}

@media screen and (max-width: 767px) {
  .a-mark {
    width: 35px;
    height: 35px;
    font-size: 1.2rem;
  }

  .reply {
    grid-template-columns: 35px auto;
    gap: 15px;
  }

  textarea {
    min-height: 35px;
    max-height: 105px;
    font-size: 14px;
    padding: 5px 12px;
  }
}

@media screen and (max-width: 575px) {
  .a-mark {
    width: 30px;
    height: 30px;
    font-size: 1rem;
  }

  .reply {
    grid-template-columns: 30px auto;
    gap: 10px;
  }

  textarea {
    min-height: 32px;
    max-height: 96px;
    padding: 5px 10px;
    font-size: 12px;
  }
}
</style>