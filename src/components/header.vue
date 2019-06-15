<template>
  <div class="header">
    <div class="iconfont icon-xiangzuo" @click="beback"></div>
    <slot name="jiaban"></slot>
    <slot name="sss"></slot>
  </div>
</template>

<script>
export default {
  methods: {
    beback() {
      this.$router.back();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../static/scss/_minix.scss";
@import "../static/scss/common.scss";
.header {
  width: 100%;
  font-size: rem(20px);
  height: rem(36px);
  justify-content: space-between;
  line-height: rem(40px);
  display: flex;
  div:nth-child(1) {
    margin-left: rem(15px);
  }
  div:nth-child(2) {
    font-weight: 550;
    font-size: rem(18px);
  }
  div:nth-child(3) {
    display: flex;
    margin-right: rem(10px);
    div:nth-child(2) {
      margin-left: rem(15px);
    }
  }
}
</style>

