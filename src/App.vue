<template>
  <!-- <HelloWorld msg="欢迎我吧"/> -->
  <!-- <DepthMonitoring /> -->
  <!-- <ListFilter></ListFilter> -->
  <!-- <collectFormData></collectFormData> -->
  <!-- <filterss></filterss> -->
  <vueInstruct></vueInstruct>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import DepthMonitoring from './components/DepthMonitoring.vue'
// import ListFilter from './components/ListFilter.vue'
// import collectFormData from './components/collectFormData.vue'
// import filterss from './components/dateFilter.vue'
import vueInstruct from './components/vueInstruct.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // DepthMonitoring
    // ListFilter
    // collectFormData
    // filterss
    vueInstruct
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
