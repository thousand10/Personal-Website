import Vue from "vue";
import VueRouter from "vue-router";
import Contact from '../views/Contact';
import Projects from '../views/Projects';
import About from '../views/About';
import Homepage from '../views/Homepage'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Homepage
  },
  {
    path: "/Projects",
    name: 'Projects',
    component: Projects
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
