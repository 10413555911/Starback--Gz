<template>
  <div class="add">
    <ul class="imagesbox">
      <li v-for="item in picDate" :key="item.id">
        <img :src="'http://localhost:3000'+item">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    picDate: null
  }
};
</script>

<style lang="scss" scoped>
@import "../static/scss/_minix.scss";
@import "../static/scss/common.scss";
.add {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  overflow: hidden;
}
.imagesbox {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
}
.imagesbox li {
  height: rem(120px);
  margin-top: rem(5px);
  border: rem(1px) solid red;
  margin-left: 2%;
  padding: rem(12px);
}
.imagesbox li img {
  height: 100%;
}
</style>
