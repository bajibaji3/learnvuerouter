<template>
  <div>
    <p>我是首页</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <p>这是用来测试git切换版本的</p>
    <p>测试分支合并</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      path: '/home/news'
    }
  },
  //activated和deactivated只有在该组件被保持了状态，使用了keep-alive时才会执行
  activated() {
    this.$router.push(this.path);
  },
  deactivated() {
  },
  beforeRouteLeave(to, from, next) {
    this.path = this.$route.path;
    next();
  }
}
</script>

<style scoped>

</style>