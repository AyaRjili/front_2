

<template>
  <div>
    <Dashboard />
  </div>
</template>

<script>



import Dashboard from "./components/DashBoard.vue"
export default {
  name: "App",
  components: {
    Dashboard

  },
    

}

</script>
<style>
.router-link-exact-active.menuItem-active-link {
  border-bottom-color: #F19238;
  color: #F19238
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
