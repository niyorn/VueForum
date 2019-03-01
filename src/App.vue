<template>
  <div id="app">
    <TheNavbar/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>


<script>
import TheNavbar from '@/components/TheNavbar'

export default {
  components: {
    TheNavbar
  }
}
</script>



<style lang="scss">
@import "assets/css/style.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
