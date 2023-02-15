<template>
  <!-- b-navbar隐藏class为navbar -->
  <b-navbar class="header d-print-none app-header">
    <!-- b-nav相当于ul元素， b-nav-item相当于li元素 -->
    <b-nav>
      <!-- b-nav-item默认就是flex排列 -->
      <b-nav-item>
        <a
          class="d-md-down-none px-2"
          href="#"
          @click="toggleSidebarMethod"
          id="barsTooltip"
        >
          <!-- 使用空的i标签（本是斜体）来展示图标，语义上不正确，但是简洁而方便，用span也行但是比较长 -->
          <i class="fi flaticon-menu" />
        </a>
        <a class="fs-lg d-lg-none" href="#" @click="switchSidebarMethod">
          <i class="fi flaticon-menu" />
        </a>
      </b-nav-item>
      <b-nav-item class="d-md-down-none">
        <a href="#" class="px-2">
          <i class="fi flaticon-flip" />
        </a>
      </b-nav-item>
      <b-nav-item class="d-md-down-none">
        <a href="#" class="px-2">
          <i class="fi flaticon-close" />
        </a>
      </b-nav-item>
    </b-nav>
    <b-nav>
      <!-- 相当于form标签，inline表示横向排列 -->
      <b-form class="d-sm-down-none ml-5" inline>
        <!-- form-group用于控制input，例如标签 -->
        <b-form-group>
          <!-- 相当于input标签 -->
          <b-input-group class="input-group-no-border">
            <!-- 先不管插槽的用法 -->
            <template v-slot:prepend>
              <b-input-group-text>
                <!-- 这个是一个放大镜的图标 -->
                <i class="fi flaticon-search-2" />
              </b-input-group-text>
            </template>
            <b-form-input id="search-input" placeholder="Search Dashboard" />
          </b-input-group>
        </b-form-group>
      </b-form>
    </b-nav>
    <a class="navbarBrand d-md-none">
      <i class="fa fa-circle text-danger" />
      &nbsp; sing &nbsp;
      <i class="fa fa-circle text-primary" />
    </a>
    <b-nav class="ml-auto">
      <!-- b-nav-item-dropdown默认包含dropdown类，其中show表示为展示，否则不展示 -->
      <!-- menu-class表示下拉菜单的类定义，这里也就是包裹Notification的父类元素，为ul标签，该标签默认类为dropdown-menu -->
      <!-- 问题是，你怎么分别哪个是下来菜单组件的？经过测试，里面的子标签默认就是下拉菜单组件，除了插槽元素外 -->
      <!-- notificationsWrapper类是冗余，没有看到任何定义 -->
      <b-nav-item-dropdown
        class="notificationsMenu d-sm-down-none mr-2"
        menu-class="notificationsWrapper py-0 animate__animated animate__animated-fast animate__fadeIn"
        right
      >
        <!-- 插槽的意思就是不是作为子组件，而是作为父类组件的一部分而展示，方便用于自定义html来修改父元素外观 -->
        <!-- button-content是b-nav-item-dropdown的官方插槽，而非随便的名字 -->
        <!-- template slot包裹的子元素就是自定义的html -->
        <template slot="button-content">
          <span class="avatar rounded-circle thumb-sm float-left mr-2">
            <img
              class="rounded-circle"
              src="../../assets/people/a7.png"
              alt="..."
            />
          </span>
          <span class="px-2">Philip Smith</span>
          <span class="ml-1 mr-2 circle text-white fw-bold avatar-badge"
            >9</span
          >
          <i class="fi flaticon-arrow-down px-2" />
        </template>
        <!-- 除了插槽，其他组件都会被看作是下拉菜单 -->
        <Notifications />
        <!-- hello -->
      </b-nav-item-dropdown>
      <b-nav-item-dropdown
        id="v-step-2"
        class="settingsDropdown d-sm-down-none"
        no-caret
        right
      >
        <!-- b-nav-item-dropdown的插槽 -->
        <template slot="button-content">
          <i class="fi flaticon-settings-10 px-2" />
        </template>
        <!-- 下拉菜单 -->
        <b-dropdown-item
          ><i class="fi flaticon-person px-3 mr-3" /> My
          Account</b-dropdown-item
        >
        <b-dropdown-divider />
        <b-dropdown-item
          ><i
            class="fi flaticon-calendar-9 px-3 mr-3"
          />Calendar</b-dropdown-item
        >
        <b-dropdown-item
          ><i class="fi flaticon-email px-3 mr-3" /> Inbox &nbsp;&nbsp;<b-badge
            variant="inverse"
            pill
            class="animate__animated animate__bounceIn"
            style="padding: 6px 9px;"
            >9</b-badge
          >
        </b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item-button @click="logout">
          <i class="fi flaticon-power-1 px-3 mr-3" /> Log Out
        </b-dropdown-item-button>
      </b-nav-item-dropdown>
    </b-nav>
  </b-navbar>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Notifications from "@/components/Notifications/Notifications";

export default {
  name: "Header",
  components: { Notifications },
  computed: {
    ...mapState("layout", ["sidebarClose", "sidebarStatic"]),
  },
  methods: {
    ...mapActions("layout", [
      "toggleSidebar",
      "switchSidebar",
      "changeSidebarActive",
    ]),
    // 点击按钮展开左侧导航函数
    switchSidebarMethod() {
      if (!this.sidebarClose) {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      } else {
        this.switchSidebar(false);
        const paths = this.$route.fullPath.split("/");
        paths.pop();
        this.changeSidebarActive(paths.join("/"));
      }
    },
    toggleSidebarMethod() {
      if (this.sidebarStatic) {
        this.toggleSidebar();
        this.changeSidebarActive(null);
      } else {
        this.toggleSidebar();
        const paths = this.$route.fullPath.split("/");
        paths.pop();
        this.changeSidebarActive(paths.join("/"));
      }
    },
    logout() {
      window.localStorage.setItem("authenticated", false);
      this.$router.push("/login");
    },
  },
};
</script>

<style src="./Header.scss" lang="scss"></style>
