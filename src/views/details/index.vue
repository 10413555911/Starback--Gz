<template>
  <div class="wrap">
    <Header>
      <div
        slot="jiaban"
        class="jiaban"
        v-if="id=='overtime'?typs_name='放假':typs_name='加班'"
      >{{typs_name}}</div>
      <div slot="sss"></div>
    </Header>

    <div v-if="logding">logding....</div>
    <div class="headers" v-else>
      <div>
        <img :src="'http://localhost:3000'+getdatas.annex[0]" alt>
      </div>
      <div>
        <div class="names">
          <div>申请人姓名</div>
          <div>{{getdatas.nickname}}</div>
          <div>></div>
        </div>
        <div class="names">
          <div>直接主管</div>
          <div>秦义超</div>
          <div></div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="user">
        <span class="texts">申请信息</span>
        <div>
          <span>加班日期</span>
          <span>
            <p>{{getdatas.startTime.slice(0,getdatas.startTime.indexOf('T'))}}</p>
            <p>></p>
          </span>
        </div>

        <div>
          <span>加班类型</span>
          <span>
            <p>双休日加班</p>
            <p>></p>
          </span>
        </div>

        <div>
          <span>开始时间</span>
          <span>
            <p>9:30</p>
            <p>></p>
          </span>
        </div>
        <div>
          <span>截止时间</span>
          <span>
            <p>{{getdatas.endTime.slice(0,getdatas.endTime.indexOf('T'))}}</p>
            <p>></p>
          </span>
        </div>
        <div>
          <span>共计天数</span>
          <span>
            <p>4</p>
          </span>
        </div>
        <p></p>
      </div>
      <div class="user_2">
        <span class="texts_2">申请信息</span>
        <div>{{getdatas.describes}}</div>
      </div>
      <div class="user_3">
        <div>+</div>上传附件
      </div>
    </div>
    <Bottom>
      <div slot="quxiao">取消</div>
      <div slot="queding">提交</div>
    </Bottom>
  </div>
</template>

<script>
import Bottom from "@/components/bottom";
import request from "../../utils/request";
export default {
  data() {
    return {
      typs_name: "",
      getdatas: {},
      logding: true
    };
  },
  components: {
    Bottom
  },
  props: {
    id: String,
    type: String
  },
  created() {
    this.getdata();
  },
  methods: {
    getdata() {
      request
        .get(`/api/apply/${this.id}`, {
          applicationNumber: this.type
        })
        .then(res => {
          this.getdatas = res.data.data;
          this.typs_name = this.$route.meta.title;
          this.logding = false;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/static/scss/_minix.scss";
@import "@/static/scss/common.scss";
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  background: rgb(0, 98, 24);
  color: #fff;
  border: 0;
}
.jiaban {
  font-weight: normal;
}
.headers {
  width: 100%;
  height: rem(130px);
  background: rgb(0, 98, 24);
  margin-top: rem(-1px);
  border-radius: 0 0 rem(40px) rem(40px);
  display: flex;
  & > div:nth-child(1) {
    width: 15%;
    border-radius: rem(60px);
    overflow: hidden;
    height: 40%;
    background: #fff;
    margin-left: 8%;
    margin-top: 1%;
  }
  & > div:nth-child(2) {
    display: flex;
    margin-left: 1%;
    flex: 1;
    font-size: rem(14px);
    flex-direction: column;
  }
}
.names {
  color: #fff;
  display: flex;
  justify-content: space-around;
  margin-top: 2%;
  span {
    display: inline-block;
    flex: 1;
  }
}
.main {
  flex: 1;
}
.user {
  width: 90%;
  height: 55%;
  border-radius: 3%;
  margin: 0 auto;
  margin-top: -13%;
  border: rem(1px) solid #fcccfc;
  background: #ffff;
  display: flex;
  flex-direction: column;
  .texts {
    border-bottom: rem(1px) solid #ccc;
    height: 20%;
    text-indent: rem(15px);
    line-height: rem(60px);
    font-size: rem(19px);
  }
  div {
    font-size: rem(13px);
    flex: 1;
    border-bottom: rem(1px) solid #ccc;
    display: flex;
    justify-content: space-around;
    line-height: rem(50px);
    & > span:nth-child(1) {
      width: 30%;
      margin-left: 5%;
      color: #ccc;
    }
    & > span:nth-child(2) {
      flex: 1;
      display: flex;
      > p:nth-child(1) {
        margin-left: 60%;
      }
      > p:nth-child(2) {
        margin-left: 5%;
      }
    }
  }
}
.user_2 {
  width: 90%;
  height: 35%;
  border: rem(1px) solid #fcccfc;
  margin: 5% auto;
}
.user_3 {
  display: flex;
  margin: 5% auto;
  text-indent: rem(20px);
  width: 90%;
  height: 11%;
  font-size: rem(19px);
  line-height: rem(60px);
  border: rem(1px) solid #fcccfc;
}
.user_2 {
  width: 90%;
  display: flex;
  flex-direction: column;
  .texts_2 {
    border-bottom: rem(1px) solid #ccc;
    height: 20%;
    text-indent: rem(15px);
    line-height: rem(37px);
    font-size: rem(19px);
  }
  div {
    flex: 1;
    padding: rem(20px);
  }
}
img {
  width: 100%;
  height: 100%;
}
.ti {
  font-size: rem(12px);
  overflow: hidden;
}
</style>
