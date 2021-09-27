<template>
  <span class="rating">
    <span>★★★★★</span>
    <span>☆☆☆☆☆</span>
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
  mounted: function () {
    const rate = this.$el
    const score = rate.firstElementChild
    rate.style.color = this.color
    rate.style.fontSize = `${this.size}px`
    score.style.width = `${10 * this.value}%`
  }
}
</script>

<style scoped>
.rating {
  position: relative;
}

.rating > span:first-child {
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
}
</style>