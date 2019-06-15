<template>
  <div class="bottom">
    <div>
      <slot name="quxiao"></slot>
    </div>
    <div>
      <slot name="queding"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../static/scss/_minix.scss";
@import "../static/scss/common.scss";
.bottom {
  width: 100%;
  height: rem(60px);
  display: flex;
  text-align: center;
  line-height: rem(60px);
  font-size: rem(22px);
  font-family: 100;
  div {
    flex: 1;
  }
  div:nth-child(1) {
    box-shadow: 0px 0px 0px 1px #ccc;
  }
  div:nth-child(2) {
    color: #fff;
    background: rgb(0, 99, 25);
  }
}
</style>
