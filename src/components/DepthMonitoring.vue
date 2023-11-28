<template>
  <div class="hello">
    <h1>深度监视</h1>
  </div>
  <div>
    <input type="text" v-model="property.a">
    <input type="text" v-model="property.b">
    <input type="text" v-model="property.c">
  </div>
</template>
  
<script>
export default {
  name: 'DepthMonitoring',
  data() {
    return {
      property: {
        a: 1,
        b: 1,
        c: 1
      },
    };
  },
  watch: {
    "property": {
      deep: true,
      handler() {
        console.log("修改了")
      }
    }
  }

}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
  