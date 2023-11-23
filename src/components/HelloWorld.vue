<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <div>
    <input v-model="xing" type="text" />
    <input v-model="ming" type="text" />
    <input v-model="fullname" type="text" />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  watch: {
    fullname:{
      handler(newValue,oldValue){
        console.log(newValue,oldValue)
      }
    }
  },
  data(){
    return{
      xing: '张',
      ming: '三',
    }
  },
  methods:{
  },
  computed:{
    fullname:{
      get(){
        console.log(this);
        return this.xing +"-"+this.ming;
      },
      set(value){
        console.log("set被调用了");
        const arr = value.split('-')
        this.xing = arr[0]
        this.ming = arr[1]
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
