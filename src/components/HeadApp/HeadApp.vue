<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-dark bg-black">
      <div class="container">
        <a href="#" class="navbar-brand">ONLINE COURSES</a>
        <button
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>

            <li class="nav-item">
              <router-link to="/courses" class="nav-link">Courses</router-link>
            </li>
            <li class="nav-item">
              <a href="about us/index.html" class="nav-link">About Us</a>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link"
                >Contact Us</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/signup" class="nav-link">Sign Up</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/signin" class="nav-link">Sign In</router-link>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link"
                ><i class="fas fa-shopping-cart fa-2x"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "HeadApp"
};
</script>
<style lang="scss">
@import "HeadApp.scss";
</style>
