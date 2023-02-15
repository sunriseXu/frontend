import isScreen from "@/core/screenHelper";

// 直接导出一个对象，这个对象就是store对象
// 包含关键的键值对：namespaced, state（用于存放变量), mutations， actions
export default {
  namespaced: true,
  state: {
    sidebarClose: false,
    sidebarStatic: false,
    sidebarActiveElement: null,
    chatOpen: false,
    chatNotificationIcon: false,
    chatNotificationPopover: false,
  },
  // mutations的函数专门用来改变state中的变量，
  // 调用mutation中的函数是通过commit函数间接调用的
  mutations: {
    toggleSidebar(state) {
      const nextState = !state.sidebarStatic;

      localStorage.sidebarStatic = nextState;
      state.sidebarStatic = nextState;

      if (!nextState && (isScreen("lg") || isScreen("xl"))) {
        state.sidebarClose = true;
      }
    },
    switchSidebar(state, value) {
      if (value) {
        state.sidebarClose = value;
      } else {
        state.sidebarClose = !state.sidebarClose;
      }
    },
    handleSwipe(state, e) {
      if ("ontouchstart" in window) {
        if (e.direction === 4) {
          state.sidebarClose = false;
        }

        if (e.direction === 2 && !state.sidebarClose) {
          state.sidebarClose = true;
        }
      }
    },
    changeSidebarActive(state, index) {
      state.sidebarActiveElement = index;
    },
  },
  // actions的函数专门用于调用mutation中的函数的
  // 通过commit函数来间接调用
  // actions的位置感觉有点冗余，直接用mutations的函数不就可以吗
  actions: {
    toggleSidebar({ commit }) {
      commit("toggleSidebar");
    },
    switchSidebar({ commit }, value) {
      commit("switchSidebar", value);
    },
    handleSwipe({ commit }, e) {
      commit("handleSwipe", e);
    },
    changeSidebarActive({ commit }, index) {
      commit("changeSidebarActive", index);
    },
  },
};
