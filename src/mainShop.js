import "./assets/main.css";
import { createApp } from "vue";
import Shoppingin from "./Shoppingin.vue";
import "animate.css";
import { createWebHistory, createRouter } from "vue-router";

import WelcomeShoppingin from "./components/Shoppingin/WelcomeShoppingin.vue";
import Login from "./components/Shoppingin/Login.vue";
import Cart from "./components/Shoppingin/Cart.vue";
import Profile from "./components/Shoppingin/Profile.vue";
const routes = [
	{ path: "/", component: WelcomeShoppingin },
	{ path : "/login", component : Login},
	{ path : "/profile", component : Profile},
	{ path : "/cart", component : Cart},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

const app = createApp(Shoppingin);
app.use(router);
app.mount("#app");
