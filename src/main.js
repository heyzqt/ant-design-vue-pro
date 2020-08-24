import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  Button,
  Layout,
  Menu,
  Icon,
  Drawer,
  Radio,
  Form,
  Input,
  Select
} from "ant-design-vue";
import "ant-design-vue/dist/antd.less";
import Authorized from "./components/Authorized";
import auth from "./directive/authorized";

Vue.use(Button);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Form);
Vue.use(Input);
Vue.use(Select);

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2022965_8eyvhxslfpp.js"
});
Vue.component("IconFont", IconFont);

Vue.use(auth);
Vue.component("t-auth", Authorized);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
