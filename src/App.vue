<template>
  <!-- <HelloWorld msg="欢迎我吧"/> -->
  <!-- <DepthMonitoring /> -->
  <ListFilter></ListFilter>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import DepthMonitoring from './components/DepthMonitoring.vue'
import ListFilter from './components/ListFilter.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // DepthMonitoring
    ListFilter
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
