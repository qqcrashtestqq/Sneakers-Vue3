import HomePage from "@/pages/HomePage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import AuthorizationPage from "../pages/AuthorizationPage.vue";

export default [
  { path: "/", name: "home", component: HomePage },
  { path: "/about", name: "about", component: AboutPage },
  {
    path: "/auth",
    name: "authorization",
    component: AuthorizationPage,
  },
  // {path: "/basket", name: "basket", component: },
];
