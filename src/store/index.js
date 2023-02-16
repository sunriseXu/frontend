import Vue from "vue";
import Vuex from "vuex";

// 引入纯对象
import layout from "./layout";

// 通过Vue.use(Vuex)来启动vuex
Vue.use(Vuex);

// 纯对象需要通过Vuex.Store({modules:{ obj }})
// 初始化为store对象
export default new Vuex.Store({
  modules: {
    layout,
  },
});
