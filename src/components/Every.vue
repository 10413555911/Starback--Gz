<template>
  <div>
    <div
      class="main-box"
      v-for="(item) in font.data"
      :key="item.applicationNumber"
      @click="details(item.applicationNumber,item.list_type)"
    >
      <div class="box-top">
        <p>{{item.applicationNumber}}</p>
        <div class="top-a">
          <i></i>
          <p>待审批</p>
        </div>
      </div>
      <div class="box-con">
        <div class="con-a">
          <p>申请人</p>
          <span>{{item.nickname}}</span>
        </div>
        <div class="con-a">
          <p>加班类型</p>
          <span>{{item.describes}}</span>
        </div>
        <div class="con-a">
          <p>加班日期</p>
          <span>{{item.startTime}}</span>
        </div>
        <div class="con-a">
          <p>加班时数</p>
          <span>{{item.type}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["font"],
  created() {},
  methods: {
    details(keys, type) {
      this.$router.push("/details" + "/" + keys + "/" + type);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../static/scss/_minix.scss";
@import "../static/scss/common.scss";
.main-box {
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid red;
  height: rem(100px);
}
.box-top {
  width: 100%;
  height: rem(30px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 rem(15px);
  box-sizing: border-box;
}
.box-con {
  width: 100%;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
}
.con-a {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.con-a p {
  margin-right: rem(10px);
}
</style>
