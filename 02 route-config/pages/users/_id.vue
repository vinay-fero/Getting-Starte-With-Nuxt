<template>
  <h1>User {{ $route.params.id }}</h1>
</template>

<script>
export default {
  name: "DynamicUser",
  validate(data) {
    console.log('data', data.params);
    return /^\d+$/.test(data.params.id);
  }
}
</script>

<style scoped>

</style>
