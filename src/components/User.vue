<template>
  <div>
    <p>我是用户信息</p>
    <p>{{userId}}</p>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      //$route与$router的区别
      //$router表示的是router里index.js中定义的router对象；$route表示的是router里index.js中routes中处于活跃状态的路由
      return this.$route.params.userId;
    }
  }
}
</script>

<style scoped>

</style>