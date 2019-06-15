<template>
  <div class="pix" v-show="flag">{{text}}</div>
</template>

<script>
export default {
  props: {
    text: String
  },
  data() {
    return {
      flag: true,
      timer: null
    };
  },
  mounted() {
    this.timer = setTimeout(() => {
      this.flag = false;
    }, 3000);
  },
  destroyed() {
    clearTimeout(this.timer);
  }
};
</script>

<style lang="scss" scoped>
@import "../static/scss/_minix.scss";
@import "../static/scss/common.scss";
.pix {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: rem(20px);
  z-index: 99;
  background: rgba(0, 0, 0, 0.6);
}
</style>
