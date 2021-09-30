<template>
  <div class="qna-detail">

    <label class="q-mark">Q</label>
    <div class="question">
      <div>{{ data.question.content }}</div>
      <div>
        <span>{{ data.question.writerNickname }}123</span>
        <span>{{ data.question.addDate }}</span>
      </div>
    </div>

    <div class="answers">
      <label class="a-mark">A</label>
      <div class="answer">
        <div>{{ data.question.content }}</div>
        <div>
          <span>{{ data.question.writerNickname }}123</span>
          <span>{{ data.question.addDate }}</span>
        </div>
      </div>
    </div>

    
  </div>
</template>

<script>
export default {
  name: "QnADetail",
  props: {
    data: {
      type: Object
    }
  }
}
</script>

<style scoped>
.qna-detail {
  border-bottom: 2px solid #dee2e6;
  padding: 13px 12px;
}

.qna-detail, .answers {
  display: grid;
  grid-template-columns: 45px auto;
  gap: 20px;
}

.q-mark, .a-mark {
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

.a-mark {
  background-color: #DBE8D8;
}

.question, .answers {
  grid-column: 2 / 3;
}

:is(.question, .answer) > div:first-child {
  padding: 10px 12px;
  display: flex;
  align-items: center;
  border: 2px solid #DAE98E;
  border-radius: 5px;
  font-size: 16px;
}

:is(.question, .answer) > div:last-child {
  display: flex;
  padding: 5px 12px;
  gap: 2vw;
  color: #808080;
  font-size: 12px;
  font-weight: bold;
}

.answer > div:first-child {
  border: 2px solid #DBE8D8;
}

@media screen and (max-width: 767px) {
  .q-mark, .a-mark {
    width: 35px;
    height: 35px;
    font-size: 1.2rem;
  }

  .qna-detail, .answers {
    grid-template-columns: 35px auto;
    gap: 15px;
  }

  :is(.question, .answer) > div:first-child {
    padding: 5px 12px;
    font-size: 14px;
  }
}

@media screen and (max-width: 575px) {
  .q-mark, .a-mark {
    width: 30px;
    height: 30px;
    font-size: 1rem;
  }

  .qna-detail, .answers {
    grid-template-columns: 30px auto;
    gap: 10px;
  }

  :is(.question, .answer) > div:first-child {
    padding: 5px 10px;
    font-size: 12px;
  }
}
</style>