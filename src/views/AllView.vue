<template>
    <div class="all">
     
        <p>THIS IS All kpis VUE</p>
    <Budget/>
    

    </div>
</template>

<script>
import Budget from './BudgetView.vue'
export default {
    name : "allVue",
    components :{
    Budget}
     
    
}

</script>
<style scoped>
.all{
    display: flex;
    justify-content: center;
    align-items: center;
}</style>