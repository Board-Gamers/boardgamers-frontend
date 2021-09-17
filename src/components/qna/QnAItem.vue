<template>
  <div class="row table-body">
    <div class="col-2 col-sm-1">{{ data.id }}</div>
    <div class="col text-start">{{ data.title }}
      <div v-if="data.is_reply" class="bg-success reply-chip">답변완료</div>
    </div>
    <div class="col-2">{{ data.writer_name }}</div>
    <div class="col-2">{{ data.write_at }}</div>
    <div class="col-2 col-md-1">{{ data.view_cnt }}</div>
  </div>
</template>

<script>
export default {
  name: "QnAItem",
  props: {
    data: Object
  }
}
</script>

<style scoped>
.table-body {
  border-bottom: 2px solid #dee2e6;
  padding: 1em 0;
  text-align: center;
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
    font-size: 12px;
  }
}

@media screen and (max-width: 575px) {
  .table-body {
    font-size: 10px;
  }
}

</style>