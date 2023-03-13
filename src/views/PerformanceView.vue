<template>
        <div><h1>Performance Vue</h1>
            <div class="container">
  <div class="row">
    <div class="col-sm">
     <MyChart/>
    </div>
    <div class="col-sm">
        

    </div>
    <div class="col-sm">

    </div>
  </div>
</div>
</div>
</template>
<script >
import axios from 'axios';
import MyChart from './MyChart.vue'

const http=axios.create()
export default{
    name : 'PerformanceView',
    components:{
        MyChart
    
    },
mounted(){
    http.get('/MOCK_DATA.json').then(response =>{
        this.$store.commit('SET_LIST', response.data)
    })
}
}

</script>
