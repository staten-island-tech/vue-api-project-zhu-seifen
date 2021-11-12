import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Book from "../views/Book.vue";
import Test from "../views/Test.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/book/:id",
    name: "Book",
    component: Book,
    props: true,
  },
  {
    path: "/test/",
    name: "Test",
    component: Test,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
