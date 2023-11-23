<template>
  <!-- <HelloWorld msg="欢迎我吧"/> -->
  <DepthMonitoring />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import DepthMonitoring from './components/DepthMonitoring.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    DepthMonitoring
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
