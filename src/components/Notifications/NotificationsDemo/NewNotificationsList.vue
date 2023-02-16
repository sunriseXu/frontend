<template>
  <!-- list-group用来展示list表格，实际是div，每个listitem也是div -->
  <!-- thin-scroll是对滑动条设计样式，不然滑动条默认会很粗，不好看 -->
  <b-list-group class="listGroup thin-scroll">
    <!-- 默认该元素是有border的，bootstrap定义了border -->
    <b-list-group-item class="listGroupItem bg-attention">
      <!-- thumb-sm定义在_utils.scss,用于设计thumb图片样式 -->
      <span class="notificationIcon thumb-sm">
        <!-- fontawesome类 fa fa-check,打勾图标 -->
        <i class="fa fa-check text-success fa-lg" />
      </span>
      <!-- overflow-hidden是自定义，也就是overflow: hidden,超出父元素范围的内容会隐藏 -->
      <!-- 用于父元素控制子元素的行为，所以放在父元素中 -->
      <!-- m-0是margin:0px bootstrap类-->
      <p class="m-0 overflow-hidden">
        2 issues require your approval. &nbsp;<a href="#">The Search Project</a>
        completed on time!
        <time class="help-block m-0">
          just now
        </time>
      </p>
    </b-list-group-item>
    <b-list-group-item class="listGroupItem bg-attention">
      <span class="notificationIcon thumb-sm">
        <img
          class="rounded-circle"
          src="../../../assets/people/a4.jpg"
          alt="..."
        />
      </span>
      <p class="m-0 overflow-hidden">
        <a href="#">Jeniffer Willington</a>has just endorsed you with 50 points!
        <time class="help-block m-0">
          30 sec ago
        </time>
      </p>
    </b-list-group-item>
    <b-list-group-item class="listGroupItem">
      <span class="notificationIcon thumb-sm">
        <img
          class="rounded-circle"
          src="../../../assets/people/a3.jpg"
          alt="..."
        />
      </span>
      <p class="m-0 overflow-hidden">
        1 new user just signed up! Check out &nbsp;<a href="#">Monica Smith</a
        >'s account.
        <time class="help-block m-0">
          2 mins ago
        </time>
      </p>
    </b-list-group-item>
    <b-list-group-item class="listGroupItem">
      <span class="notificationIcon thumb-sm">
        <i class="fa fa-angle-double-up fa-2x" />
      </span>
      <p class="text-ellipsis m-0">
        2.1.0-pre-alpha just released.
        <time class="help-block m-0">
          5h ago
        </time>
      </p>
    </b-list-group-item>
    <b-list-group-item class="listGroupItem">
      <span class="notificationIcon thumb-sm">
        <i class="fa fa-bolt fa-lg" />
      </span>
      <p class="text-ellipsis m-0 overflow-hidden">
        Server load limited.
        <time class="help-block m-0">
          7h ago
        </time>
      </p>
    </b-list-group-item>
    <b-list-group-item class="listGroupItem">
      <span class="notificationIcon thumb-sm">
        <img
          class="rounded-circle"
          src="../../../assets/people/a5.jpg"
          alt="..."
        />
      </span>
      <p class="m-0 overflow-hidden">
        User <a href="#">Jeff</a> registered &nbsp;&nbsp;
        <b-button size="xs" variant="success" class="mr-1">Allow</b-button>
        <b-button size="xs" variant="danger">Deny</b-button>
        <time class="help-block m-0">
          12:18 AM
        </time>
      </p>
    </b-list-group-item>
    <b-list-group-item class="listGroupItem">
      <span class="notificationIcon thumb-sm">
        <i class="fa fa-shield fa-lg" />
      </span>
      <p class="m-0 overflow-hidden">
        Instructions for changing your Envato Account password. Please check
        your account <a href="#">security page</a>.
        <time class="help-block m-0">
          12:18 AM
        </time>
      </p>
    </b-list-group-item>
    <b-list-group-item class="listGroupItem">
      <span class="notificationIcon thumb-sm">
        <span class="rounded bg-primary rounded-lg">
          <i class="fa fa-facebook text-white" />
        </span>
      </span>
      <p class="text-ellipsis m-0">
        New <strong>76</strong> facebook likes received.
        <time class="help-block m-0">
          15 Apr 2014
        </time>
      </p>
    </b-list-group-item>
    <b-list-group-item class="listGroupItem">
      <span class="notificationIcon thumb-sm">
        <span class="circle circle-lg bg-gray-dark">
          <i class="fa fa-circle-o text-white" />
        </span>
      </span>
      <p class="text-ellipsis m-0">
        Dark matter detected.
        <time class="help-block m-0">
          15 Apr 2014
        </time>
      </p>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
  name: "NewNotificationsList",
};
</script>

<style src="./ListGroup.scss" lang="scss" />
