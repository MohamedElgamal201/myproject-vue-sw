<template>
  <div>
    <section id="products" class="products py-5">
      <div class="container">
        <!-- section title -->
        <div class="row">
          <div class="col-10 mx-auto col-sm-6 text-center">
            <h1 class="text-capitalize product-title">Featured COURSES</h1>
          </div>
        </div>
        <!-- end section title -->
        <!-- Product items -->
        <div class="row product-items" id="product-items">
          <!-- single items -->
          <div class="col-10 col-sm-6 col-lg-4 mx-auto my-3">
            <div class="card single-item">
              <div class="img-container">
                <img
                  src="../../assets/c++.webp"
                  class="card-img-top product-img"
                  alt=""
                />
              </div>
              <div class="card-body">
                <div
                  class="card-text d-flex justify-content-between text-capitalize"
                >
                  <h5 id="item-name">C++ course</h5>
                  <span><i class="fas fa-dollar-sign"></i>350$</span>
                  <div class="btn"><a>Details</a></div>
                </div>
              </div>
            </div>
          </div>
          <!-- end of single item -->
          <!-- single items -->
          <div class="col-10 col-sm-6 col-lg-4 mx-auto my-3">
            <div class="card single-item">
              <div class="img-container">
                <img
                  src="../../assets/php.jpg"
                  class="card-img-top product-img"
                  alt=""
                />
              </div>
              <div class="card-body">
                <div
                  class="card-text d-flex justify-content-between text-capitalize"
                >
                  <h5 id="item-name">PHP Course</h5>
                  <span><i class="fas fa-dollar-sign"></i>200$</span>
                  <div class="btn"><a>Details</a></div>
                </div>
              </div>
            </div>
          </div>
          <!-- end of single item -->
          <!-- single items -->
          <div class="col-10 col-sm-6 col-lg-4 mx-auto my-3">
            <div class="card single-item">
              <div class="img/img-container">
                <img
                  src="../../assets/ccna.jpg"
                  class="card-img-top product-img"
                  alt=""
                />
              </div>
              <div class="card-body">
                <div
                  class="card-text d-flex justify-content-between text-capitalize"
                >
                  <h5 id="item-name">CCNA Course</h5>
                  <span><i class="fas fa-dollar-sign"></i>900$</span>
                  <div class="btn"><a>Details</a></div>
                </div>
              </div>
            </div>
          </div>
          <!-- end of single item -->
          <!-- single items -->
          <div class="col-10 col-sm-6 col-lg-4 mx-auto my-3">
            <div class="card single-item">
              <div class="img-container">
                <img
                  src="../../assets/com.png"
                  class="card-img-top product-img"
                  alt=""
                />
              </div>
              <div class="card-body">
                <div
                  class="card-text d-flex justify-content-between text-capitalize"
                >
                  <h5 id="item-name">NETWORK+ Course</h5>
                  <span><i class="fas fa-dollar-sign"></i>650$</span>
                  <div class="btn"><a>Details</a></div>
                </div>
              </div>
            </div>
          </div>
          <!-- end of single item -->

          <!-- single items -->
          <div class="col-10 col-sm-6 col-lg-4 mx-auto my-3">
            <div class="card single-item">
              <div class="img-container">
                <img
                  src="../../assets/nod.jpg"
                  class="card-img-top product-img"
                  alt=""
                />
              </div>
              <div class="card-body">
                <div
                  class="card-text d-flex justify-content-between text-capitalize"
                >
                  <h5 id="store-item-name">NODE.JS Course</h5>
                  <span><i class="fas fa-dollar-sign"></i>350$</span>
                  <div class="btn"><a>Details</a></div>
                </div>
              </div>
            </div>
          </div>
          <!-- end of single item -->

          <!-- single items -->
          <div class="col-10 col-sm-6 col-lg-4 mx-auto my-3">
            <div class="card single-item">
              <div class="img-container">
                <img
                  :src="require('../../assets/py.jpg')"
                  class="card-img-top product-img"
                  alt=""
                />
              </div>
              <div class="card-body">
                <div
                  class="card-text d-flex justify-content-between text-capitalize"
                >
                  <h5 id="item-name">PYTHON Course</h5>
                  <span><i class="fas fa-dollar-sign"></i>550$</span>
                  <div class="btn"><a>Details</a></div>
                </div>
              </div>
            </div>
          </div>
          <!-- end of single item -->
        </div>
        <!-- end of store items -->
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "ProductSec"
};
</script>
<style lang="scss">
@import "ProductSec";
</style>
