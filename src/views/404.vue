<template>
  <div style="text-align: center;">
    <icon-font type="iconicon-404" style="font-size: 100px" />
    <!-- <img :src="logo" /> -->
    <Logo></Logo>
  </div>
</template>

<script>
// import logo from "@/assets/logo.svg"; //此时导入的logo其实是一个url，是由vue cli内置的svg loader将svg图片处理成了url
import Logo from "@/assets/logo.svg"; //在重新配置了svg的loader后，此时Logo是变为了一个组件被引入，而不是url
export default {
  // data() {
  //   return {
  //     logo
  //   };
  // }
  components: {
    Logo
  }
};
</script>

<style></style>
