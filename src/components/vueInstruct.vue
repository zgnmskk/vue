<template>
    <h2 v-pre>Vue其实很简单</h2>
    <div v-text="property"></div>
    <div v-text="property1"></div>
    <div v-html="property1"></div>

    初始值：<div v-once>{{ sum }}</div>
    当前值：<div>{{ sum }}</div>

    <button @click="sss">JIAYI</button>
</template>

<script>
export default{
    data() {
        return {
            property: 'value',
            property1: '<h1>value1</h1>',
            sum:1,
        };
    },
    methods:{
        sss(){
            this.sum++
        }
    }

}
</script>