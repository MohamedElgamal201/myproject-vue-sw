<template>
  <div>
    <section class="seller py-5">
      <div class="container">
        <!--Section title-->
        <div class="row mb-5">
          <div
            class="col d-flex flex-wrap text-uppercase justify-content-center"
          >
            <h1 class="font-weight-bold align-self-center mx-1">
              High Rate Courses
            </h1>
          </div>
        </div>
        <!---End of Title-->
        <div class="row">
          <div class="col-sm-6 ">
            <div class="seller-item">
              <img src="../../assets/com.png" alt="" class="img-fluid photo" />
              <p>COMPATIA NETWORK+ COURCE</p>
            </div>
          </div>
          <!--End of first column-->
          <div class="col-sm-6 d-flex flex-column justify-content-between">
            <div class="row">
              <!--first item-->
              <div class="col-sm-6">
                <div class="seller-item">
                  <img
                    src="../../assets/ccna.jpg"
                    alt=""
                    class="img-fluid seller-img"
                  />

                  <p>CCNA COURCE</p>
                </div>
              </div>
              <!--End of 1st item-->
              <!--first item-->
              <div class="col-sm-6">
                <div class="seller-item">
                  <img
                    src="../../assets/py.jpg"
                    alt=""
                    class="img-fluid seller-img"
                  />

                  <p>PYTHON COURSE</p>
                </div>
              </div>
              <!--End of 1st item-->
            </div>
            <!--end of row-->
            <div class="row">
              <!--first item-->
              <div class="col-sm-6">
                <div class="seller-item">
                  <img
                    src="../../assets/c++.webp"
                    alt=""
                    class="img-fluid seller-img
                      img-top"
                  />

                  <p>C++ COURSE.</p>
                </div>
              </div>
              <!--End of 1st item-->
              <!--first item-->
              <div class="col-sm-6">
                <div class="seller-item">
                  <img
                    src="../../assets/css.jpg"
                    alt=""
                    class="img-fluid seller-img
                      img-top"
                  />

                  <p>CSS COURSE</p>
                </div>
              </div>
              <!--End of 1st item-->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "SellerSec"
};
</script>
<style lang="scss">
@import "SellerSec.scss";
</style>
