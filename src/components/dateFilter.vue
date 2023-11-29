<template>

<div>
    <h2>时间</h2>
   <input type="text" v-model="time">
    <h3>转化后时间戳：{{ timeFormat() }}</h3>
    <h3>转化后时间戳：{{ timeFormat("YYYY-MM-DD HH:mm:ss") }}</h3>
    <h3></h3>
    <h3></h3>

</div>


</template>

<script>
import { dayjs } from 'element-plus';

/* Vue.filter('myClice',function(value){
    return value.slice(0,11)
}) */
export default{
    data() {
        return {
            time:"2022-12-31",
        };
    },
    computed:{
        timeFormat(){
            return (str="YYYY年MM月DD日 HH:mm:ss")=>{
            return dayjs(this.time).format(str)
            }
            
        }
    }

}
</script>