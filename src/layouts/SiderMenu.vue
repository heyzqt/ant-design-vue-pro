<template>
  <div style="width: 256px">
    <a-button
      type="primary"
      style="margin-bottom: 16px"
      @click="toggleCollapsed"
    >
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <a-menu
      :default-selected-keys="['1']"
      :default-open-keys="['2']"
      mode="inline"
      :theme="$attrs.theme"
      :inline-collapsed="collapsed"
    >
      <template v-for="item in menuData">
        <a-menu-item v-if="!item.children" :key="item.key">
          <a-icon type="pie-chart" />
          <span>{{ item.title }}</span>
        </a-menu-item>
        <sub-menu v-else :key="item.key" :menu-info="item" />
      </template>
    </a-menu>
  </div>
</template>

<script>
import SubMenu from "./SubMenu.vue";
export default {
  components: {
    "sub-menu": SubMenu
  },
  data() {
    const menuData = this.getMenuData(this.$router.options.routes); //this.$router.options.routes获取当前的route配置
    console.log(menuData);
    return {
      collapsed: false,
      menuData
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    getMenuData(routes) {
      debugger;
      //规则只有带name属性的route才添加到菜单栏中
      const list = [];
      routes.forEach(item => {
        if (!item.hideInMenu) {
          if (item.name) {
            let obj = {};
            obj.key = item.name;
            obj.title = item.meta.title;
            if (!item.hideChildrenMenu && item.children) {
              let children = this.getMenuData(item.children);
              if (children) {
                obj.children = children;
              }
            }
            list.push(obj);
          } else {
            if (item.children) {
              let array = this.getMenuData(item.children);
              if (array) {
                list.push(array);
              }
            }
          }
        }
      });
      return list;
    }
  }
};
</script>

<style></style>
