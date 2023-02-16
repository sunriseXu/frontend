<template>
  <section class="notifications navbar-notifications">
    <header class="cardHeader card-header">
      <div class="text-center mb-sm">
        <strong>You have 13 notifications</strong>
      </div>
      <!-- b-button-group是一个div标签，用来包裹button子元素，里面的button水平排列 -->
      <b-button-group id="notification-b-buttons">
        <!-- 这里的button样式应该改变过，但是在哪改变的呢，_overrides.scss中重写了button样式 -->
        <b-button variant="default" @click="changeNotificationsTab(1)"
          >Notifications</b-button
        >
        <b-button variant="default" @click="changeNotificationsTab(2)"
          >Messages</b-button
        >
        <b-button variant="default" @click="changeNotificationsTab(3)"
          >Progress</b-button
        >
      </b-button-group>
    </header>
    <NewNotifictionsList v-if="newNotifications" />
    <NotifictionsList v-else-if="notificationsTabSelected === 1" />
    <Messages v-else-if="notificationsTabSelected === 2" />
    <Progress v-else-if="notificationsTabSelected === 3" />
    <NotifictionsList v-else />
    <!-- card-footer为bootstrap中的类型，包含自动设置padding、圆角、背景颜色等 -->
    <!-- text-sm是tailwindcss的类，但是没有tailwindcss的依赖，应该是冗余的 -->
    <footer class="cardFooter text-sm card-footer">
      <!-- fs-mini在_util.scss中引用，用来定义字体大小 -->
      <span class="fs-mini">Synced at: 21 Apr 2014 18:36</span>
      <b-button
        variant="link"
        @click="loadNotifications"
        :class="{
          disabled: isLoad,
          'btnNotificationsReload btn-xs float-right py-0': true,
        }"
      >
        <span v-if="isLoad"
          ><i class="la la-refresh la-spin" /> Loading...</span
        >
        <i v-else class="la la-refresh" />
      </b-button>
    </footer>
  </section>
</template>

<script>
import Vue from "vue";

import NotifictionsList from "./NotificationsDemo/NotificationsList";
import NewNotifictionsList from "./NotificationsDemo/NewNotificationsList";
import Messages from "./NotificationsDemo/Messages";
import Progress from "./NotificationsDemo/Progress";
// 返回一个纯对象
// 该对象包含
// data()函数： 该函数返回一个纯对象，对象中的数据可以由组件的html访问
export default {
  name: "Notification",
  components: {
    NotifictionsList,
    NewNotifictionsList,
    Messages,
    Progress,
  },
  data() {
    return {
      notificationsTabSelected: 1,
      newNotifications: null,
      isLoad: false,
    };
  },
  // 方法为什么要用vue set来修改值呢，我记得有更方便的方式。
  methods: {
    changeNotificationsTab(tab) {
      Vue.set(this, "notificationsTabSelected", tab);
      Vue.set(this, "newNotifications", null);
    },
    loadNotifications() {
      Vue.set(this, "isLoad", true);

      setTimeout(() => {
        Vue.set(this, "newNotifications", "new notifications component");
        Vue.set(this, "isLoad", false);
        this.changeNotificationsTab(1);
      }, 1500);
    },
  },
};
</script>

<style src="./Notifications.scss" lang="scss" />
