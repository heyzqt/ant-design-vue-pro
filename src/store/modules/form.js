import request from "../../utils/request";
import router from "../../router";

const state = {
  step: {
    payAccount: "11111"
  }
};

const actions = {
  async submitStepForm({ commit }, { payload }) {
    await request({
      method: "POST",
      url: "/api/form",
      data: payload
    });
    commit("saveStepForm", { payload });
    router.push({ name: "result" });
  }
};

const mutations = {
  saveStepForm(state, { payload }) {
    state.step = {
      ...state.step,
      ...payload
    };
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
