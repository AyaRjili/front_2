<template>
    <div class="dashboard">
        <SideBar />

        <div class="content">
<router-view />        </div>

    </div>
</template>

<script>
import SideBar from "./SideBar.vue"
export default {
    name: "dashBoard",
    components: {
        SideBar

    }
}

</script>
<style scoped>
    .dashboard{
        display: grid;
        grid-template-columns: 1fr 5fr;
        background-color: black;
        height: 100vh;
        width: 100 vw;


    }
    .content {
        background-color: white;
        border-radius: 20px;
        margin : 6px 6px 6
    }

</style>