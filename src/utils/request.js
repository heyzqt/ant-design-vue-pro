import axios from "axios";
import { notification } from "ant-design-vue";

function request(options) {
  return axios(options)
    .then(res => {
      return res;
    })
    .catch(error => {
      notification["error"]({
        message: "404",
        description: "请求失败，请重新刷新"
      });
      return Promise.reject(error);
    });
}

export default request;
