<template>
  <div class="wrap">
    <div class="header">
      <div>X</div>
      <div>欢迎来到星享俱乐部</div>
    </div>

    <div class="ipt">
      <div class="phone">
        <input type="text" placeholder="手机号码" v-model="phone">
      </div>
      <div class="pass">
        <input type="text" placeholder="密码" v-model="password">
        <div class="yan">获取验证码</div>
      </div>
    </div>
    <button class="btn" @click="btn">登录/注册</button>
    <div class="use">使用账号密码登录</div>
  </div>
</template>

<script>
import api from "@/api";
export default {
  data() {
    return {
      phone: "",
      password: "",
      phoneReg: /^1[357]\d{9}$/
    };
  },
  methods: {
    btn() {
      if (this.phone.trim() !== "" && this.phoneReg.test(this.phone)) {
      api.userLogin({
            phone: this.phone,
            password: this.password
          })
          .then(res => {
            let { token } = res.data;
            window.localStorage.setItem("token", token);
            this.$router.push("/home");
          })
          .catch(err => {});
      } else {
        alert("账号密码输入错误");
      }
    }
  },
  components: {}
};
</script>

<style  lang="scss" scoped>
@import "./static/scss/_minix.scss";
@import "./static/scss/common.scss";
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  width: 100%;
  height: rem(130px);
  text-indent: rem(10px);
  box-shadow: 0px 0px 10px 5px #ccc;
  div:nth-child(1) {
    font-size: rem(20px);
    font-weight: 600;
    margin-top: rem(23px);
  }
  div:nth-child(2) {
    margin-top: rem(10px);
    font-size: rem(34px);
    font-weight: 500;
  }
}
.ipt {
  width: 98%;
  margin: 0 auto;
  height: rem(180px);
  display: flex;
  flex-direction: column;
  div {
    flex: 1;
    border-bottom: 1px solid #ccc;
    input {
      font-size: rem(18px);
      width: 100%;
      height: 100%;
      text-indent: rem(8px);
    }
  }
  .pass {
    position: relative;
    .yan {
      position: absolute;
      z-index: 999;
      right: rem(10px);
      top: rem(40px);
      color: #999;
    }
  }
}
.btn {
  margin-top: rem(80px) !important;
  width: 90%;
  border-radius: rem(30px);
  height: rem(50px);
  text-align: center;
  margin: 0 auto;
  line-height: rem(50px);
  border: none;
  font-size: rem(18px);
  color: #fff;
}
.use {
  color: green;
  margin-top: rem(38px);
  text-align: center;
}
</style>
