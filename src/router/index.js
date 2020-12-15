import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Courses from "../views/Courses.vue";
import SignUp from "../views/SignUp.vue";
import SignIn from "../views/SignIn.vue";
import Contact from "../views/Contact.vue";
import Enrol from "../views/Enrol.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },

  {
    path: "/courses",
    name: "Courses",
    component: Courses
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp
  },
  {
    path: "/signin",
    name: "Signin",
    component: SignIn
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/enrol",
    name: "Enrol",
    component: Enrol
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
