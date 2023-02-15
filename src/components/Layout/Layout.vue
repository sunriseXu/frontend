<template>
  <div :class="[{ root: true, sidebarClose, sidebarStatic }, 'sing-dashboard']">
    <Sidebar />
    <Helper />
    <div class="wrap">
      <Header />
      <v-touch
        class="content"
        @swipe="handleSwipe"
        :swipe-options="{ direction: 'horizontal' }"
      >
        <breadcrumb-history></breadcrumb-history>
        <transition name="router-animation">
          <router-view />
        </transition>
        <footer class="contentFooter">
          Sing App Vue Dashboard Free Template - Made by
          <a
            href="https://flatlogic.com"
            rel="nofollow noopener noreferrer"
            target="_blank"
            >Flatlogic</a
          >
        </footer>
      </v-touch>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("layout");

import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import Helper from "@/components/Helper/Helper";
import BreadcrumbHistory from "@/components/BreadcrumbHistory/BreadcrumbHistory";

import "./Layout.scss";

// vue文件导出一个纯对象
// 该对象包含键值对：
// name: 不知道有什么用
// componnets：用于注册外部组件，以便在本组建的html中使用，字典类型
// methods：该组件的内部方法，方法之间的调用用this关键字引用，字典类型
// computed: 一种可以改变值的变量，字典类型
// created()：方法，组件初始化时调用，可以用this来引用methods中的私有方法
// beforeDestroy()：方法，组件销毁时调用，销毁的时刻是何时？
export default {
  name: "Layout",
  components: { Sidebar, Header, Helper, BreadcrumbHistory },
  methods: {
    // ...mapActions([])语句用于将store中的actions映射为组件的私有方法，方便调用，而不用每次都用store.dispatch来调用
    ...mapActions([
      "switchSidebar",
      "handleSwipe",
      "changeSidebarActive",
      "toggleSidebar",
    ]),
    handleWindowResize() {
      const width = window.innerWidth;

      if (width <= 768 && this.sidebarStatic) {
        this.toggleSidebar();
        this.changeSidebarActive(null);
      }
    },
  },
  computed: {
    // ...mapState([])语句用于将store中的state中的变量映射为本地变量
    // 貌似只能够读取值而不能改变，不然要那些mutations和actions函数干嘛
    ...mapState(["sidebarClose", "sidebarStatic"]),
  },
  created() {
    const staticSidebar = JSON.parse(localStorage.getItem("sidebarStatic"));

    if (staticSidebar) {
      //通过this.$store来获取全局注册的store对象
      this.$store.state.layout.sidebarStatic = true;
    } else if (!this.sidebarClose) {
      setTimeout(() => {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      }, 2500);
    }

    this.handleWindowResize();
    //window.addEventListener函数能够对特定事件进行监听，并且提供回调函数对事件进行相应
    window.addEventListener("resize", this.handleWindowResize);
  },
  beforeDestroy() {
    //window.removeEventListener用于取消监听的函数注册
    window.removeEventListener("resize", this.handleWindowResize);
  },
};
</script>

<style src="./Layout.scss" lang="scss" />
