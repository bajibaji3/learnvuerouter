<template>
  <div id="app">
    <!--vue-router使用步骤
      第一步：创建路由组件
      第二步：配置路由映射：组件和路径映射关系
      第三步：使用路由：通过<router-link>和<router-view>
    -->
    <!--通过tag属性可以将router-link标签渲染成指定的标签，比如这里渲染成button-->
    <!--通过replace属性可以使浏览器的前进和后退按钮不可用，原理就是不适用pushState这个方法而是用replaceState这个方法-->
<!--    <router-link to="/home" tag="button" replace>首页</router-link>-->
<!--    <router-link to="/about" replace>关于</router-link>-->

    <!--通过代码实现路由跳转-->
<!--    <button @click="homeClick">首页</button>-->
<!--    <button @click="aboutClick">关于</button>-->

    <!--动态路由-->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/' + userId">用户</router-link>
    <router-link :to="{path: '/profile', query: {name: 'kk', age: '18', height: '1.88'}}">
      档案
    </router-link>

<!--    <button @click="userClick">用户</button>-->
<!--    <button @click="profileClick">档案</button>-->
    <!--实现切换到别的路由地址后仍保持不被销毁-->
    <!--不使用keep-alive时，切换到别的路由后会调用生命周期中的beforeDestroy，再次切换回来会重新调用created-->
    <!--keep-alive的exclude属性可以排除指定的组件不被保持状态-->
    <keep-alive exclude="Profile,User">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      userId: '22222',
    }
  },
  methods: {
    // homeClick() {
    //   // this.$router.push('/home');
    //   this.$router.replace('/home');
    // },
    // aboutClick() {
    //   // this.$router.push('/about');
    //   this.$router.replace('/about');
    // },
    userClick() {
      this.$router.push('/user/' + this.userId);
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'kk',
          age: 18,
          height: 1.88
        }
      })
    },
  },
}
</script>

<style>
.active {
  color: #f00;
}
</style>
