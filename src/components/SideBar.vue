<template>
    <div>
        <div class="sidebar">

           
            <div class="menu-items ">
                <router-link to="/all" active-class="active" exact tag="button" class="side-btn">
                    <div class="link-container ">
                        <b>Dashboard</b>
                    </div>
                </router-link>
                <hr>
                <router-link to="/people" active-class="active" exact tag="button" class="side-btn">
                    <div class="link-container">
                        <b>People</b>
                    </div>
                </router-link>
                <router-link to="/budget" active-class="active" exact tag="button" class="side-btn">
                    <div class="link-container">
                        <b> Budget</b>
                    </div>
                </router-link>
                <router-link to="/performance" active-class="active" exact tag="button" class="side-btn">
                    <div class="link-container">
                        <b>Performance</b>
                    </div>
                </router-link>
                <br>
                <hr>

            </div>
        </div>
      
    </div>
</template>
<script>
export default {

}
</script>

<style scoped>
hr{
    color: white;
}
.nav-link {
    display: flex;
    flex-direction: column;
    margin-top: 40 px;
    margin-bottom: 20px;
}

.menu-items {

    font: 1rem/1.5 var(--bs-font-sans-serif);
    display: flex;
    flex-direction: column;
    margin-top: 0px
}

.menu-items>* {
    margin-top: 15px;
}


.side-btn:focus {
    outline: none;
}

.side-btn.active {
    background-color: white;
    color: #f16e00;
    font-size: 500;
}

.side-btn {
    border: none;
    padding: 10px 0px;
    cursor: pointer;
    font-size: 16px;
    color: white;
    background-color: transparent;}

    .sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px; /* adjust as needed */
 
}
</style>