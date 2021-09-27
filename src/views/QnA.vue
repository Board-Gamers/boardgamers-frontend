<template>
  <div class="qna container">
    <Navigation />

    <div class="qna-description">
      <div>
        <h2>고객센터</h2>
        <p>자유롭게 질문을 올릴 수 있습니다.<br />적절하지 않은 게시글은 관리자에 의해 삭제 조치될 수 있습니다.</p>
      </div>
      <button class="btn btn-primary write-btn">글 쓰기</button>
    </div>

    <div class="row table-header">
      <div class="col-2 col-sm-1">번호</div>
      <div class="col">제목</div>
      <div class="col-2">작성자</div>
      <div class="col-2">작성일</div>
      <div class="col-2 col-md-1">조회수</div>
    </div>

    <QnAItem v-for="(data, idx) in qnas" :key="idx" :data="data" />
  </div>
</template>

<script>
import Navigation from "@/components/boardgame/Navigation.vue";
import QnAItem from "@/components/qna/QnAItem.vue";

export default {
  name: "QnA",
  components: {
    Navigation,
    QnAItem,
  },
  data: function() {
    return {
      qnas: [
        {
          id: 10,
          title: "보드게임이 하고싶은데 돈이 없는 초등학생입니다.",
          writer_name: "초딩입니다",
          write_at: "21.08.05",
          view_cnt: 1089,
          is_reply: false,
        },
        {
          id: 9,
          title: "모두의 마블 추가해주세요.",
          writer_name: "중딩입니다",
          write_at: "21.08.03",
          view_cnt: 56,
          is_reply: true,
        },
      ],
    };
  },
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
  text-align: center;
  max-width: 1000px;
  font-size: 14px;
}

.table-header {
  border-top: 2px solid #dee2e6;
  border-bottom: 2px solid #dee2e6;
  padding: 1em 0;
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
  }
}
</style>
