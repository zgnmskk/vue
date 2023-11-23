<template>
    <div>
        <h1>列表过滤</h1>
        <el-button @click="filterUser" type="primary">去除高于20岁的人</el-button>
    </div>
    <div v-for="(user) in userLIst" :key="user.name">
        {{ user.name }}--{{ user.age }}--{{ user.sex }}
    </div>
</template>

<script>

export default{
    data() {
        return {
            property: 'value',
            userLIst:[
                {name:"张三",age:19,sex:'男'},
                {name:"李四",age:25,sex:'男'},
                {name:"王五",age:18,sex:'女'},
                {name:"王11",age:20,sex:'女'},
                {name:"赵六",age:19,sex:'男'}
            ],
        };
    },
    methods: {
        filterUser(){
            this.userLIst = this.userLIst.filter(
                i=>{ return i.age<=20 }
            )
        }
    },
    computed:{
        usercpmputed(){
            /* return this.userLIst.filter(p => {
                return p.age<=20
            }) */

            const arr = this.userLIst
            arr.sort((a,b)=>{return a.age-b.age})
            return arr;
        }
    }

}


</script>