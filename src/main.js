import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import qs from "query-string";

import {
  Button,
  Layout,
  Menu,
  Icon,
  Drawer,
  Radio,
  Form,
  Input,
  Select,
  LocaleProvider,
  DatePicker,
  Dropdown
} from "ant-design-vue";
import "ant-design-vue/dist/antd.less";
import Authorized from "./components/Authorized";
import auth from "./directive/authorized";
import VueI18n from "vue-i18n";
import zhCN from "@/locale/zhCN";
import enUS from "@/locale/enUS";

Vue.use(Button);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Form);
Vue.use(Input);
Vue.use(Select);
Vue.use(LocaleProvider);
Vue.use(DatePicker);
Vue.use(Dropdown);

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2022965_8eyvhxslfpp.js"
});
Vue.component("IconFont", IconFont);

Vue.use(auth);
Vue.component("t-auth", Authorized);

Vue.use(VueI18n);
//创建VueI18n实例
const i18n = new VueI18n({
  locale: qs.parse(window.location.search).locale || "zhCN",
  messages: {
    zhCN: {
      message: zhCN
    },
    enUS: {
      message: enUS
    }
  }
});

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
