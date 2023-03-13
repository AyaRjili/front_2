<script>
import {mapState} from 'vuex'
import _ from 'lodash'
import Highcharts from 'highcharts'
export default{
computed : mapState ({
    list : state => state.list 
}),
watch : {
    list(){
        this.dataSource()
    }
},
methods:{
    dataSource(){
        const names = this.list.map(item => item.KPI_name)
        const base = _(names)
            .countBy()
            .map((value,key)=>({key,value}))
            .orderBy(['value'],['desc'])
            .value()
        const categories = base.map(item => item.key)
        const values = base.map(item => item.value)
        this.setup({categories,values})

       debugger

    },
    setup(obj){
        const {categories, values} = obj
        Highcharts.chart('container-for-kpis', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Variation des X KPI '
    },
    subtitle: {
        text: 'Source: R27'
    },
    xAxis: {
        categories:categories,
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Unités (jours par exemple)'
        }
    },
   
    series: [{
        name: 'Quantité',
        data: values

    }]
});
    }
}
}
</script>
<template>
    <div id="container-for-kpis">
        chart
    </div>
</template>