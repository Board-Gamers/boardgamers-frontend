<template>
  <span class="rating">
    <span>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
    </span>
    <span>
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
    </span>
  </span>
</template>

<script>
export default {
  name: "Raiting",
  props: {
    value: {
      type: Number,
      validator: function (value) {
        return value >= 0 && value <= 10
      }
    },
    color: {
      type: String,
      default: '#000'
    },
    size: {
      type: String,
    }
  },
  methods: {
    calcRate: function () {
      const rate = this.$el
      const score = rate.firstElementChild
      rate.style.color = this.color
      rate.style.fontSize = `${this.size}px`
      score.style.width = `${10 * this.value}%`
    }
  },
  watch: {
    value: function () {
      this.calcRate()
    }
  },
  mounted: function () {
    this.calcRate()
  }
}
</script>

<style scoped>
.rating {
  position: relative;
  display: inline !important;
}

.rating > span:first-child {
  position: absolute;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  top: 0;
  left: 0;
}

</style>