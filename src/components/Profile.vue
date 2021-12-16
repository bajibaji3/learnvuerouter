<template>
  <div>
    <p>我是Profile</p>
    <p>{{ $route.query.name }}</p>
    <p>{{ $route.query.age }}</p>
    <p>{{ $route.query.height }}</p>
  </div>
</template>

<script>
export default {
  name: "Profile"
}
</script>

<style scoped>

</style>