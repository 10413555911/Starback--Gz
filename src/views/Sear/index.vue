<template>
  <div class="wrap">
    <Header>
      <div slot="jiaban">筛选</div>
      <div slot="sss"></div>
    </Header>
    <div class="main">
      <div></div>
    </div>

    <Bottom>
      <div slot="quxiao">全部取消</div>
      <div slot="queding">确定</div>
    </Bottom>
  </div>
</template>

<script>
import Bottom from "../../components/bottom";
export default {
  components: {
    Bottom
  }
};
</script>
<style  lang="scss" scoped>
@import "./static/scss/_minix.scss";
@import "./static/scss/common.scss";
.wrap {
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1;
}
</style>
