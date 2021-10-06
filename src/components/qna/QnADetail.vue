<template>
  <div class="qna-detail">

    <label class="q-mark">Q</label>
    <div class="question">
      <div>{{ data.question.content }}</div>
      <div>
        <span>{{ data.question.writerNickname }}</span>
        <span>{{ data.question.addDate }}</span>
      </div>
    </div>

    <ReplyQnA v-if="$store.state.isAdmin" :qnaId="data.question.id" @add-reply="updateReply"/>

    <AnswerItem v-for="(reply, idx) in replies" :data="reply" :key="idx" @delete-reply="updateReply"/>
    
  </div>
</template>

<script>
import ReplyQnA from "./ReplyQnA.vue"
import AnswerItem from "./AnswerItem.vue"

export default {
  name: "QnADetail",
  components: {
    ReplyQnA,
    AnswerItem
  },
  props: {
    data: {
      type: Object
    }
  },
  data: function () {
    return {
      replies: this.data.reply
    }
  },
  methods: {
    updateReply: function () {
      this.$emit('update-reply')
    }
  },
}
</script>

<style scoped>
.qna-detail {
  border-bottom: 2px solid #dee2e6;
  padding: 13px 12px;
  display: grid;
  grid-template-columns: 45px auto;
  gap: 20px;
}

.q-mark {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  width: 45px;
  height: 45px;
  background-color: #DAE98E;
  border-radius: 50%;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.5);
}

.question {
  grid-column: 2 / 3;
}

.question > div:first-child {
  padding: 10px 12px;
  display: flex;
  align-items: center;
  border: 2px solid #DAE98E;
  border-radius: 5px;
  font-size: 16px;
}

.question > div:last-child {
  display: flex;
  padding: 5px 12px;
  gap: 2vw;
  color: #808080;
  font-size: 12px;
  font-weight: bold;
}

@media screen and (max-width: 767px) {
  .q-mark {
    width: 35px;
    height: 35px;
    font-size: 1.2rem;
  }

  .qna-detail {
    grid-template-columns: 35px auto;
    gap: 15px;
  }

  .question > div:first-child {
    padding: 5px 12px;
    font-size: 14px;
  }
}

@media screen and (max-width: 575px) {
  .q-mark {
    width: 30px;
    height: 30px;
    font-size: 1rem;
  }

  .qna-detail {
    grid-template-columns: 30px auto;
    gap: 10px;
  }

  .question > div:first-child {
    padding: 5px 10px;
    font-size: 12px;
  }
}
</style>