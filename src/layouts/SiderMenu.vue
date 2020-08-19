<template>
  <div style="width: 256px">
    <a-menu mode="inline" :theme="$attrs.theme" :inline-collapsed="collapsed">
      <template v-for="item in menuData">
        <a-menu-item v-if="!item.children" :key="item.path">
          <a-icon v-if="item.meta.icon" :type="item.meta.icon" />
          <span>{{ item.meta.title }}</span>
        </a-menu-item>
        <sub-menu v-else :key="item.path" :menu-info="item" />
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
      const list = [];
      routes.forEach(item => {
        if (!item.hideInMenu) {
          if (item.name) {
            const obj = { ...item };
            delete obj.children;
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
                list.push(...array);
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
