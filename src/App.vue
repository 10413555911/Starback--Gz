<template>
  <div class="wrap">
    <!-- 路由的视口 -->
    <router-view></router-view>
  </div>
</template> 
<script>
import request from "./utils/request";

export default {
  components: {

  }
};
</script>
 
<style lang="scss" scoped>
@import "./static/scss/_minix.scss";
@import "./static/scss/common.scss";
html,
body,
.wrap {
  width: 100%;
  height: 100%;
}
</style>
