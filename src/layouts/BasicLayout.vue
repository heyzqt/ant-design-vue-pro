<template>
  <div :class="[`nav-theme-${navTheme}`, `nav-layout-${navLayout}`]">
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider
        v-if="navLayout == 'left'"
        :theme="navTheme"
        v-model="collapsed"
        :trigger="null"
        collapsible
        width="256px"
      >
        <div class="logo">ant design pro navTheme = {{ navTheme }}</div>
        <SiderMenu :theme="navTheme"></SiderMenu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="menu-fold"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="collapsed = !collapsed"
          />
          <Header class="header-layout"></Header>
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          <Footer></Footer>
        </a-layout-footer>
      </a-layout>
    </a-layout>
    <side-drawer></side-drawer>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import SiderMenu from "./SiderMenu";
import SideDrawer from "../components/SideDrawer";
export default {
  data() {
    return {
      collapsed: false,
      visible: true
    };
  },
  components: {
    Header,
    Footer,
    SiderMenu,
    SideDrawer
  },
  computed: {
    navTheme() {
      return this.$route.query.navTheme || "dark";
    },
    navLayout() {
      return this.$route.query.navLayout || "left";
    }
  },
  methods: {
    toggleDrawer() {
      this.visible = !this.visible;
    }
  }
};
</script>
<style lang="scss" scoped>
.menu-fold {
  width: 64px;
  height: 64px;
  line-height: 64px;
  font-size: 23px;
}

.header-layout {
  position: absolute;
  right: 0;
  top: 0;
}

.nav-theme-dark {
  ::v-deep .logo {
    color: #fff;
  }
}
</style>
