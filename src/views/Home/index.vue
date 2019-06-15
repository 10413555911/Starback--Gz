<template>
  <div class="wrap">
    <Header>
      <div slot="jiaban">加班/休假</div>
      <div slot="sss">
        <div class="p iconfont icon-daichuli"></div>
        <div class="iconfont icon-search"></div>
      </div>
    </Header>

    <tabs @change="tabmenu"></tabs>

    <div class="tab_two">
      <div class="radius">
        <div :class="{ back:type=='overtime' }" @click="touchs('overtime')">加班</div>
        <div :class="{ back:type=='vacation' }" @click="touchs('vacation')">休假</div>
      </div>
      <div class="chajian">
        <span class="iconfont icon-iconset0209"></span>
        <span class="iconfont icon-jiekuanchulichenggongfill"></span>
      </div>
    </div>
    <div class="main">
      <Every :font="datalist"></Every>
    </div>
    <div class="task" @click="model">发起任务</div>

    <div class="model" v-show="show">
      <div class="bot">
        <div @click="click_select(item_jiaban)">
          <span class="iconfont icon-paper-airplane"></span>
          <span>{{item_jiaban}}</span>
        </div>
        <div @click="click_select(item_xiujia)">
          <span class="iconfont icon-paper-airplane"></span>
          <span>{{item_xiujia}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Every from "../../components/Every";
import tabs from "./components/tabs";
import request from "../../utils/request";
import { mapActions } from "vuex";
import api from "@/api";
export default {
  data() {
    return {
      item_jiaban: "加班",
      item_xiujia: "休假",
      type: "overtime",
      show: false,
      dataOptions: {
        page: 1,
        pageSize: 8,
        status: 0,
        type: "overtime"
      },
      datalist: []
    };
  },
  components: {
    Every,
    tabs
  },

  created() {
    this.getUserInfo();
    this.getTasklist();
  },
  methods: {
    ...mapActions("user", ["getUserInfo"]),
    getTasklist() {
      api.getList(this.dataOptions).then(res => {
        this.datalist = res.data;
      });
    },
    tabmenu(status) {
      this.type = status.titles;
      this.dataOptions.type = status.titles;
      this.dataOptions.status = status.index;
      this.getTasklist();
    },
    touchs(key) {
      this.type = key;
      this.dataOptions.type = key;
      this.getTasklist();
    },

    model: function() {
      this.show = true;
    },
    click_select: function(item) {
      this.show = false;
      this.$router.push("/applican/" + item);

      console.log(this.type);
    }
  }
};
</script>

<style  lang="scss" scoped>
@import "./static/scss/common.scss";
.wrap {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.iconfont {
  font-size: rem(38px);
}

.io {
  font-size: rem(29px);
}
.tab_two {
  width: 100%;
  height: rem(72px);
  display: flex;
  align-items: center;
}
.radius {
  overflow: hidden;
  display: flex;
  width: rem(188px);
  height: rem(28px);
  border: 1px solid green;
  border-radius: rem(30px);
  margin: 0 auto;
  div {
    flex: 1;
    text-align: center;
    line-height: rem(28px);
  }
  div:nth-child(1) {
    border-right: 1px solid green;
  }
}
.active {
  color: green;
}
.main {
  flex: 1;
  width: 100%;
  overflow-y: auto;
  flex-direction: column;
}
.back {
  background: rgb(0, 99, 25);
  color: #fff;
}
.chajian {
  span {
    font-size: rem(20px);
  }
}
.task {
  width: rem(180px);
  height: rem(55px);
  background: rgb(0, 99, 25);
  text-align: center;
  color: #ffffff;
  line-height: rem(55px);
  font-size: rem(19px);
  overflow: hidden;
  border-radius: rem(30px);
  position: absolute;
  bottom: rem(5px);
  right: rem(5px);
  z-index: 999;
}
.p {
  font-size: rem(23px);
}
.model {
  background: rgba(126, 126, 126, 0.8);
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 999;
}
.bot {
  width: 100%;
  height: rem(120px);
  background: #ffffff;
  position: absolute;
  display: flex;
  bottom: 0;
  align-items: center;
  div {
    flex: 1;
    display: flex;
    text-align: center;
    flex-direction: column;
    span:nth-child(2) {
      margin-top: rem(10px);
    }
  }
}
</style>
