<template>
  <div>
    <div class="table-body" @click="getQnaDetail(data.id)">
      <div>{{ data.id }}</div>
      <div class="text-start">{{ data.title }}
        <div v-if="data.answered" class="bg-success reply-chip">답변완료</div>
      </div>
      <div>{{ data.writerNickname }}</div>
      <div>{{ data.addDate.slice(0, 8) }}</div>
      <div>{{ data.viewCnt }}</div>
    </div>
    <QnADetail v-if="drawer" :data="detail"/>
  </div>
</template>

<script>
import QnaApi from "@/apis/QnaApi.js";
import QnADetail from "./QnADetail.vue";

export default {
  name: "QnAItem",
  props: {
    data: Object
  },
  components: {
    QnADetail
  },
  data: function () {
    return {
      detail: {},
      drawer: false
    }
  },
  methods: {
    getQnaDetail: async function (id) {
      if (!Object.keys(this.detail).length) {
        const res = await QnaApi.requestQnaDetail(id)
        this.detail = {...res.data}
      }
      this.drawer = !this.drawer
    }
  }
}
</script>

<style scoped>
.table-body {
  border-bottom: 2px solid #dee2e6;
  padding: 13px 0;
  text-align: center;
  display: grid;
  grid-template-columns: 70px auto 140px 100px 80px;
  gap: 1vw;
  transition: 0.25s;
}

.table-body:hover {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.075);
}

.table-body > div {
  padding: 0 1vw;
}

.reply-chip {
  display: inline-block;
  padding: 0 0.5em;
  color: #fff;
  border-radius: 50rem;
  font-size: 10px;
  cursor: default;
}

@media screen and (max-width: 767px) {
  .table-body {
    font-size: 14px;
    grid-template-columns: 70px auto 100px 80px 70px;
  }
}

@media screen and (max-width: 575px) {
  .table-body {
    font-size: 12px;
    grid-template-columns: 40px auto 60px 50px 40px;
  }
}

</style>