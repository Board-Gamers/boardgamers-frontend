<template>
  <div class="qna">
    <Navigation />

    <div class="qna-description">
      <div>
        <h2>고객센터</h2>
        <p>자유롭게 질문을 올릴 수 있습니다.<br />적절하지 않은 게시글은 관리자에 의해 삭제 조치될 수 있습니다.</p>
      </div>
      <button v-if="$store.state.headers.Authorization" class="btn btn-primary write-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >글 쓰기</button>
    </div>

    <UploadBoard @upload-board="uploadBoard"/>

    <div class="table-header">
      <div>번호</div>
      <div>제목</div>
      <div>작성자</div>
      <div>작성일</div>
      <div>조회수</div>
    </div>

    <div v-if="qna.length">
      <QnAItem v-for="(data, idx) in qna" :key="idx" :data="data" @update-reply="updateReply"/>
    </div>
  </div>
</template>

<script>
import QnaApi from "@/apis/QnaApi.js";

import Navigation from "@/components/boardgame/Navigation.vue";
import QnAItem from "@/components/qna/QnAItem.vue";
import UploadBoard from "@/components/qna/UploadBoard.vue";

export default {
  name: "QnA",
  components: {
    Navigation,
    QnAItem,
    UploadBoard
  },
  data: function() {
    return {
      qna: [],
      openModal: true
    };
  },
  methods: {
    getQnaList: async function () {
      const res = await QnaApi.requestQnaList()
      this.qna = res.questions
    },
    updateReply: function () {
      this.getQnaList()
    },
    uploadBoard: function () {
      this.getQnaList()
    }
  },
  mounted: async function () {
    this.getQnaList()
  }
};
</script>

<style scoped>
h2 {
  font-size: 24px;
  font-weight: bold;
}

p {
  margin: 0;
}

.qna {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  padding: 0 12px;
}

.table-header {
  border-top: 2px solid #dee2e6;
  border-bottom: 2px solid #dee2e6;
  padding: 1em 0;
  display: grid;
  grid-template-columns: 70px auto 140px  100px 80px;
  gap: 1vw;
  text-align: center;
}

.table-header > div {
  padding: 0 1vw;
}

.write-btn {
  width: 100px;
  height: 40px;
  border-radius: 50rem;
}

.qna-description {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  text-align: start;
  position: relative;
  margin-bottom: 1rem;
}

@media screen and (max-width: 767px) {
  .table-header {
    font-size: 12px;
    grid-template-columns: 70px auto 100px 80px 70px;
  }
}

@media screen and (max-width: 575px) {
  .write-btn {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0;
    font-size: 14px;
    height: 28px;
    width: 70px;
  }

  .table-header {
    font-size: 10px;
    grid-template-columns: 40px auto 60px 50px 40px;
  }
}
</style>
