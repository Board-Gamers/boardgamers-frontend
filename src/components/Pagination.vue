<template>
  <div class="pagination">
    <button class="prev-btn" :disabled="!index" @click="prevPage"><i class="fas fa-caret-left"></i></button>
    <div v-for="n in 5" :key="n" @click="changePage(n)" class="number">{{ n }}</div>
    <button class="next-btn" :disabled="index === 4" @click="nextPage"><i class="fas fa-caret-right"></i></button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    start: {
      type: Number,
      default: 0
    }
  },
  data: function () {
    return {
      index: this.start
    }
  },
  methods: {
    changePage: function (idx) {
      this.index = idx-1
      const active = this.$el.querySelector('.active')
      active.classList.remove('active')
      const nums = this.$el.querySelectorAll('.number')
      const select = nums[idx-1]
      select.classList.add('active')
    },
    prevPage: function () {
      this.index -= 1
      const active = this.$el.querySelector('.active')
      const prev = active.previousElementSibling
      active.classList.remove('active')
      prev.classList.add('active')
    },
    nextPage: function () {
      this.index += 1
      const active = this.$el.querySelector('.active')
      const next = active.nextElementSibling
      active.classList.remove('active')
      next.classList.add('active')
    }
  },
  watch: {
    start: function (e) {
      this.index = e
      const active = this.$el.querySelector('.active')
      active.classList.remove('active')
      const nums = this.$el.querySelectorAll('.number')
      const select = nums[e]
      select.classList.add('active')
    },
    index: function () {
      this.$emit('change', this.index)
    }
  },
  mounted: function () {
    const start = this.$el.querySelectorAll('.number')[this.index]
    start.classList.add('active')
  },
}
</script>

<style scoped>
button:disabled {
  opacity: 0.5;
}

.pagination > div, button {
  width: 40px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0d6efd;
}

.pagination > div {
  cursor: pointer;
  box-shadow: inset 0 -5px 5px rgba(0, 0, 0, 0.1),
              0 5px 10px rgba(0, 0, 0, 0.1),
              0 10px 15px rgba(0, 0, 0, 0.1);
}

.pagination > div.active {
  box-shadow: inset 0 -5px 5px rgba(0, 0, 0, 0.025),
              inset 0 5px 10px rgba(0, 0, 0, 0.1);
}

.prev-btn {
  border-radius: 10px 0 0 10px;
}

.next-btn {
  border-radius: 0 10px 10px 0;
}
</style>