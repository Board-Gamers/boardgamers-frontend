<template>
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">문의사항 작성하기</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div>
            <label for="title">제목</label>
            <input type="text" id="title" v-model="title">
          </div>
          <div>
            <label for="content">내용</label>
            <textarea id="content" rows="5" v-model="content"></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="uploadBoard" :disabled="!content || !title">작성</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QnaApi from "@/apis/QnaApi.js";

export default {
  name: "UploadBoard",
  data: function () {
    return {
      title: null,
      content: null
    }
  },
  methods: {
    uploadBoard: async function () {
      const response = await QnaApi.uploadBoard(this.$data)
      swal(response.data.message)
      this.title = null
      this.content = null
      this.$emit('upload-board')
    }
  }
}
</script>

<style scoped>
textarea, input {
  width: 100%;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  outline: unset;
  padding: 5px 10px;
}

.modal-body {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

label {
  font-weight: bold;
}
</style>