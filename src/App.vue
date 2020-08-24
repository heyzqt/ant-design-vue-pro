<template>
  <a-locale-provider :locale="locale">
    <div id="app">
      <router-view />
    </div>
  </a-locale-provider>
</template>
<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import enUS from "ant-design-vue/lib/locale-provider/en_US";
export default {
  data() {
    return {
      locale: zhCN
    };
  },
  watch: {
    "$route.query.locale"(val) {
      if (val == "zhCN") {
        this.locale = zhCN;
      } else {
        this.locale = enUS;
      }
    }
  }
};
</script>

<style lang="less"></style>
