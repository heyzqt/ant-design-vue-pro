<template>
  <div>
    <a-drawer
      title="抽屉菜单"
      placement="right"
      :closable="false"
      :visible="visible"
      @close="onClose"
      width="300"
    >
      <template v-slot:handle>
        <div class="handle" @click="visible = !visible">
          <a-icon :type="visible ? 'close' : 'setting'"></a-icon>
        </div>
      </template>
      <h1>整体风格设置</h1>
      <a-radio-group
        v-model="navTheme"
        :options="options1"
        @change="e => handleSettingsChange('navTheme', e.target.value)"
      />

      <h1>导航设置</h1>
      <a-radio-group
        v-model="navLayout"
        :options="options2"
        @change="e => handleSettingsChange('navLayout', e.target.value)"
      />
    </a-drawer>
  </div>
</template>
<script>
const options1 = [
  { label: "黑色", value: "dark" },
  { label: "白色", value: "light" }
];
const options2 = [
  { label: "左侧导航", value: "left" },
  { label: "顶部导航", value: "top" }
];
export default {
  data() {
    return {
      visible: false,
      options1,
      options2,
      navTheme: this.$route.query.navTheme || "dark",
      navLayout: this.$route.query.navLayout || "left"
    };
  },
  methods: {
    toggleDrawer() {
      this.visible = !this.visible;
    },
    onClose() {
      this.visible = false;
    },
    handleSettingsChange(type, value) {
      this.$router.push({ query: { ...this.$route.query, [type]: value } });
    }
  }
};
</script>
<style scoped>
.handle {
  width: 64px;
  height: 64px;
  background-color: #1890ff;
  position: absolute;
  top: 240px;
  right: 300px;
  color: #fff;
  border-radius: 4px 0 0 4px;
  font-size: 20px;
  line-height: 64px;
  text-align: center;
}
</style>
