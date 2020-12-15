<template>
  <div class="sss">
    <div class="bg">
      <img src="../assets/bg-intro-desktop.png" alt="background" />
    </div>
    <section class="Sign-up">
      <div class="container">
        <div class="left-side">
          <h2>Learn to code by watching others</h2>
          <p>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <div class="right-side">
          <div class="head-form">
            <span class="d">Try it free 7 days</span>
            <span class="c">then $20/mo. thereafter</span>
          </div>
          <form action="" method="">
            <div>
              <div style="margin: 0">
                <input
                  type="text"
                  id="fname"
                  placeholder="First Name "
                  class="text-input"
                />
                <img
                  src="../assets/icon-error.svg"
                  alt="error"
                  class="error-img"
                />
              </div>
              <div class="error"><span>Name cannot be empty</span></div>
            </div>
            <div>
              <div style="margin: 0">
                <input
                  type="text"
                  id="lname"
                  placeholder="Last Name"
                  class="text-input"
                />
                <img
                  src="../assets/icon-error.svg"
                  alt="error"
                  class="error-img"
                />
              </div>
              <div class="error"><span>Last Name cannot be empty</span></div>
            </div>
            <div>
              <div style="margin: 0">
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  class="text-input"
                />
                <img
                  src="../assets/icon-error.svg"
                  alt="error"
                  class="error-img"
                />
              </div>
              <div class="error">
                <span>Looks like that is not an email</span>
              </div>
            </div>
            <div>
              <div style="margin: 0">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  class="text-input"
                />
                <img
                  src="../assets/icon-error.svg"
                  alt="error"
                  class="error-img"
                />
              </div>
              <div class="error"><span>Password cannot be empty</span></div>
            </div>
            <input
              type="submit"
              value="Sign Up"
              class="submit-input"
              @click="submitFun"
            />
            <div class="foot-form">
              <span class="a"
                >By clicking the button, you are agreeing to our
              </span>
              <span class="b">Terms and Services</span>
            </div>
          </form>
        </div>
      </div>
    </section>
    <footer>
      <span>Desgin by : Mohamed M.Elgamal</span>
    </footer>
  </div>
</template>
<script>
export default {
  name: "SignUp",
  methods: {
    submitFun(e) {
      var errors = document.querySelectorAll(".error");
      var fname = document.getElementById("fname");
      var lname = document.getElementById("lname");
      var email = document.getElementById("email");
      var password = document.getElementById("password");
      var errorImgs = document.querySelectorAll(".error-img");
      e.preventDefault();
      errors.forEach(() => {
        if (fname.value == "") {
          errors[0].style.display = "block";
          errorImgs[0].style.display = "block";
        } else {
          errors[0].style.display = "none";
          errorImgs[0].style.display = "none";
        }
        if (lname.value == "") {
          errors[1].style.display = "block";
          errorImgs[1].style.display = "block";
        } else {
          errors[1].style.display = "none";
          errorImgs[1].style.display = "none";
        }
        if (email.value == "") {
          errors[2].style.display = "block";
          errorImgs[2].style.display = "block";
          errors[2].innerHTML = "Email cannot be empty";
        } else if (!email.value.includes("@")) {
          errors[2].style.display = "block";
          errorImgs[2].style.display = "block";
          errors[2].innerHTML = "Looks like that is not an email";
        } else {
          errors[2].style.display = "none";
          errorImgs[2].style.display = "none";
        }
        if (password.value == "") {
          errors[3].style.display = "block";
          errorImgs[3].style.display = "block";
        } else {
          errors[3].style.display = "none";
          errorImgs[3].style.display = "none";
        }
      });
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.sss {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
}
.mynavoo {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.navbar .nav-link {
  font-size: 14px;
  text-transform: uppercase;
  padding-left: 16px !important;
  padding-right: 16px !important;
}
.navbar-toggler {
  outline: none !important;
}
.bg-black {
  background: #000;
}

.bg {
  background-color: hsl(228, 28%, 20%);
  height: 100vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
}
.bg img {
  width: 100%;
}

.Sign-up {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 92vh;
}
.Sign-up .container {
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.Sign-up .container .left-side {
  width: 50%;
}
.Sign-up .container .left-side h2 {
  color: white;
  margin-bottom: 35px;
  font-size: 3em;
}
.Sign-up .container .left-side p {
  color: white;
  font-size: 1em;
}
.Sign-up .container .right-side {
  width: 50%;
}
.Sign-up .container .right-side .head-form {
  background-color: var(--headFormColor);
  padding: 15px;
  text-align: center;
  color: white;
  border-radius: 10px;
  margin-bottom: 18px;
  box-shadow: 1px 6px 1px 1px rgba(0, 0, 0, 0.251);
}
.Sign-up .container .right-side .head-form .d {
  font-weight: 600;
}
.Sign-up .container .right-side .head-form .c {
  font-weight: 400;
  font-size: 0.9em;
}
.Sign-up .container .right-side form {
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 41px;
  border-radius: 10px;
}
.Sign-up .container .right-side form div {
  position: relative;
  margin-bottom: 15px;
}
.Sign-up .container .right-side form div div {
  position: relative;
}
.Sign-up .container .right-side form div div .text-input {
  width: 100%;
  padding: 15px;
  outline: none;
  border: 1px solid var(--borderColor);
  color: var(--inputColor);
  border-radius: 10px;
  font-weight: 700;
}
.Sign-up .container .right-side form div div .text-input:focus {
  transition: all 0.3s;
  border-color: black;
}
.Sign-up .container .right-side form div div img {
  position: absolute;
  top: 50%;
  right: 12px;
  z-index: 11;
  transform: translateY(-50%);
  display: none;
}
.Sign-up .container .right-side form div .error {
  display: none;
  font-size: 0.55em;
  color: var(--bgColor);
  font-weight: 600;
  padding: 3px;
  text-align: right;
  margin-bottom: 0;
}
.Sign-up .container .right-side form .submit-input {
  padding: 17px;
  color: white;
  background-color: var(--buttonColor);
  border: none;
  outline: none;
  border-radius: 10px;
  text-transform: uppercase;
  margin-bottom: 17px;
  cursor: pointer;
}
.Sign-up .container .right-side form .submit-input:hover {
  transition: all 0.3s;
  background-color: #61d6a3;
}
.Sign-up .container .right-side form .foot-form {
  font-size: 0.75em;
  text-align: center;
  font-weight: 500;
}
.Sign-up .container .right-side form .foot-form .a {
  color: var(--borderColor);
}
.Sign-up .container .right-side form .foot-form .b {
  color: var(--bgColor);
}
footer {
  position: absolute;
  bottom: 0;
  right: 0;
  color: black;
  background-color: rgba(255, 255, 255, 0.644);
  padding: 3px;
}
</style>
