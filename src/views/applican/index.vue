<template>
  <!-- 发起请求详情 -->
  <div class="wrap">
    <Header>
      <div
        slot="jiaban"
        class="jiaban"
        v-if=" this.$route.params.id=='休假'?typs_name='休假':typs_name='加班'"
      >{{typs_name}}</div>
      <div slot="sss"></div>
    </Header>

    <div class="headers">
      <div>
        <!-- <img :src="userinfo.data.avatar"> -->
      </div>
      <div>
        <div class="names">
          <div>申请人姓名</div>
          <div>{{userinfo.data.nickname}}</div>
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
          <span>{{this.$route.params.id}}日期</span>
          <span>
            <p class="p_1">
              <el-date-picker
                value-format="yyy-MM-dd"
                :default-value="new Date().toLocaleDateString()"
                v-model="data"
                class="q"
              ></el-date-picker>
            </p>
            <p>></p>
          </span>
        </div>

        <div>
          <span>{{this.$route.params.id}}类型</span>
          <span>
            <p>
              <select v-model="usetype">
                <option value="-1">默认选择</option>
                <option v-for="item in types_vacation" :key="item.id" value>{{item.name}}</option>
              </select>
            </p>
            <p>></p>
          </span>
        </div>

        <div>
          <span>{{this.$route.params.id}}开始时间</span>
          <span>
            <p class="p_1">
              <el-time-picker v-model="startTime" @click="c(startTime)" format="HH:mm"/>
            </p>
            <p>></p>
          </span>
        </div>
        <div>
          <span>{{this.$route.params.id}}截止时间</span>
          <span>
            <p class="p_1">
              <el-time-picker @change="sumTime" format="HH:mm" v-model="endTime"/>
            </p>
            <p>></p>
          </span>
        </div>
        <div>
          <span>{{this.$route.params.id}}共计时间</span>
          <span>
            <p>{{cha}}分钟</p>
          </span>
        </div>
        <p></p>
      </div>
      <div class="user_2">
        <span class="texts_2">申请理由</span>
        <div>
          <input v-model="plead">
        </div>
        <!-- {{getdatas.describes}} -->
      </div>
      <div class="user_3">
        <fliepicker :picDate="imagesUp"></fliepicker>
        <div class="jia" v-if="lengthflag">
          <input type="file" class="inp" @change="pushfile">
          +
        </div>
      </div>
    </div>
    <alertBox :text='tishi'></alertBox>
    <Bottom>
      <div slot="quxiao" @click="$router.back()">取消</div>
      <div slot="queding" @click="submit">提交</div>
    </Bottom>
  </div>
</template>

<script>
import Bottom from "@/components/bottom";
import request from "../../utils/request";
import isfiles from "../../utils/isfiles";
import fliepicker from "../../components/fliepicker";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      usetype: "",
      data: "",
      startTime: "",
      endTime: "",
      cha: "",
      imagesUp: [],
      lengthflag: true,
      plead: "",
      // usertype,
      types_vacation: [
        {
          id: 1,
          name: "双休日"
        },
        {
          id: 2,
          name: "节假日"
        },
        {
          id: 3,
          name: "工作日"
        }
      ],
      typs_name: "",
      tishi:'显示错误'
    };
  },

  computed: {
    ...mapState("user", ["userinfo"])
  },
  created() {
    this.getUserInfo();
    this.$route.params.id;
    if (this.$route.params.id == "加班") {
      this.$route.params.id = "加班";
    } else {
      this.$route.params.id = "休假";
      this.types_vacation = [
        {
          id: 0,
          name: "年假"
        },
        {
          id: 1,
          name: "正常"
        }
      ];
    }
    window.ccc = this;
  },
  watch: {
    imagesUp(val) {
      if (val.length > 1) {
        this.lengthflag = false;
        return;
      }
    }
  },
  components: {
    Bottom,
    fliepicker
  },
  methods: {
    ...mapActions("user", ["getUserInfo"]),
    sumTime() {
      console.log(this.startTime);
      if (this.startTime == "") {
        alert("请选择开始时间");
        this.cha = "请重新选择";
      } else {
        let cha = new Date(this.endTime) - new Date(this.startTime);
        this.cha = Math.floor(cha / 1000 / 60);
        console.log;
        if (cha < 0) {
          alert("您选择的时间有误");
          this.cha = "请重新选择";
          return;
        }
      }
    },
    pushfile(e) {
      let images = e.target.files[0];
      let isTrue = new isfiles(images, {
        type: ["jpg", "png", "gif", "jpeg"],
        size: 3
      });
      if (isTrue.isType() && isTrue.isSize()) {
        let imgWinod = new FormData();
        imgWinod.append("file", images);
        request.post("/api/upload", imgWinod).then(res => {
          this.imagesUp.push(res.data.url);
        });
      } else {
        console.log("文件选择错误");
      }
    },
    submit() {
      let subobj = {
        annex: this.imagesUp,
        describe: this.plead,
        endTime: this.endTime,
        startTime: this.startTime,
        type: "approval"
      };
      if (
        subobj.startTime != "" &&
        subobj.endTime != "" &&
        subobj.describe != ""
      ) {
        // request.post("/api/apply/overtime", subobj).then(res => {
        //   console.log(res);
        // });
        this.$router.back();
      } else {


        alert("请输入");
        console.log();

      }
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
  overflow-y: auto;
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
.p_1 {
  flex: 1;
  overflow: hidden;
}
.inp {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  z-index: 999;
  top: 0;
  opacity: 0;
}
.jia {
  position: relative;
}
</style>
