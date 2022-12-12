<template>
  <Dog msg="Welcome to Your Vue.js Application"/>
</template>

<script>
import Dog from './components/Dog.vue'

export default {
  name: 'App',
  components: {
    Dog
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
