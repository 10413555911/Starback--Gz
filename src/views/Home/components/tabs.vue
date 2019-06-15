<template>
  <div class="tab">
    <div v-for="item in list" :key="item.status">
      <ul :class="{
          active:index===item.status
      }" @click="clicks(item.status)">
        <li :class="'iconfont ' + item.icon"></li>
        <span>{{item.title}}</span>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      list: [
        {
          title: "待处理",
          icon: "icon-daichuli",
          status: 0
        },
        {
          title: "已发起",
          icon: "icon-paper-airplane",
          status: 1
        },
        {
          title: "已处理",
          icon: "icon-iconset0209",
          status: 2
        }
      ]
    };
  },
  methods: {
    clicks(index) {
      this.index = index;
      this.$emit("change", { index, titles: "overtime" });
    }
  }
};
</script>

<style  lang="scss" scoped>
@import "./static/scss/common.scss";
.tab {
  width: 100%;
  margin-top: rem(15px);
  height: rem(80px);
  display: flex;
  justify-content: space-around;
  text-align: center;
  div {
    width: 100%;
    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      li {
        flex: 1;
        font-size: rem(40px);
      }
    }
  }
}
.active {
  color: rgb(0, 99, 25);
}
</style>
