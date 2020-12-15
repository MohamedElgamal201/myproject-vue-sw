<template>
  <div id="app">
    <div>
      <head-app />
    </div>
    <router-view />
  </div>
</template>
<script>
import HeadApp from "./components/HeadApp/HeadApp.vue";
export default {
  name: "App",
  components: {
    HeadApp
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
