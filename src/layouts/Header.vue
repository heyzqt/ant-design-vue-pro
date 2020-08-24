<template>
  <div>
    <a-dropdown class="menu">
      <a class="ant-dropdown-link" @click="e => e.preventDefault()">
        {{ curLang == "zhCN" ? "中文" : "英文" }}<a-icon type="down" />
      </a>
      <a-menu slot="overlay">
        <a-menu-item @click="changeLang('zhCN')">
          中文
        </a-menu-item>
        <a-menu-item @click="changeLang('enUS')">
          英文
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curLang: "zhCN"
    };
  },
  methods: {
    changeLang(locale) {
      this.curLang = locale;
      this.$router.push({ query: { ...this.$route.query, locale } });
      this.$i18n.locale = locale;
    }
  }
};
</script>

<style scoped>
.menu {
  float: right;
  margin-right: 50px;
}
</style>
