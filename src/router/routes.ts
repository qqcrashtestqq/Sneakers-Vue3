import HomePage from "@/pages/HomePage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import AuthorizationPage from "../pages/AuthorizationPage.vue";
import ProfilePage from "../pages/ProfilePage.vue";

export default [
  { path: "/", name: "home", component: HomePage },
  { path: "/about", name: "about", component: AboutPage },
  {
    path: "/auth",
    name: "authorization",
    component: AuthorizationPage,
  },
  { path: "/profile", name: "profile", component: ProfilePage },
  // {path: "/basket", name: "basket", component: },
];
