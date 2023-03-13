<template><div id="app">

    <div class="fixed-top">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="top: 0">
        <div class="container-fluid">
          <div class="navbar-brand">
            <a class="stretched-link" href="/">
              <img src="../assets/orange-logo.svg" width="50" height="50" alt="Boosted - Back to Home" loading="lazy">
            </a>
          </div>

          <div class="collapse navbar-collapse align-items-end" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <router-link class="menuItem-active-link" to="/"><a class="nav-link " aria-current="page"
                    href="/">Home</a></router-link>

              </li>
              <li class="nav-item">
                <router-link class="menuItem-active-link" to="/files"><a class="nav-link " aria-current="page"
                    href="/files">Upload</a></router-link>

              </li>


            </ul>
            <form class="d-flex navbar-item ms-3" role="search">
              <input class="form-control me-2 float-right" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-primary btn-inverse" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>


    </div>
    <router-view />

        </div>

</template>
<script>
export default{

}

</script>
<style scoped>
</style>