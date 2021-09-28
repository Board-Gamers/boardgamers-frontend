<template>
  <div class="table-body">
    <div>★★★★★ 10</div>
    <div class="text-start">내용</div>
    <div>스플랜더</div>
    <div>21.08.25</div>
  </div>
</template>

<script>
export default {
  name: "ReviewItems"
}
</script>

<style scoped>
.table-body {
  width: 100%;
  border-bottom: 2px solid #dee2e6;
  padding: 13px 0;
  text-align: center;
  display: grid;
  grid-template-columns: 140px auto 140px 100px;
  gap: 20px;
}

@media screen and (max-width: 767px) {
  .table-body {
    font-size: 12px;
    grid-template-columns: 100px auto 100px 80px;
  }
}

@media screen and (max-width: 575px) {
  .table-body {
    font-size: 10px;
    grid-template-columns: 70px auto 60px 50px;
    gap: 5px;
  }

  .table-body > div:first-child {
    padding: 0 5px;
  }
}

</style>