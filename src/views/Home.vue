<template>
  <div class="home">
    <div class="about">
      <about-sec />
    </div>
    <div class="product">
      <product-sec />
    </div>
    <div class="about-2">
      <about-two />
    </div>
    <div class="seller">
      <seller-sec />
    </div>
    <div class="footer-app">
      <footer-app />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutSec from "../components/AboutSec/AboutSec.vue";
import ProductSec from "../components/ProductSec/ProductSec.vue";
import AboutTwo from "../components/AboutTwo/AboutTwo.vue";
import SellerSec from "../components/SellerSec/SellerSec.vue";
import FooterApp from "../components/FooterApp/FooterApp.vue";

export default {
  name: "Home",
  components: {
    AboutSec,
    ProductSec,
    AboutTwo,
    SellerSec,
    FooterApp
  }
};
</script>
