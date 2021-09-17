import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Main from "../views/Main.vue";
import QnA from "../views/QnA.vue";
import Login from "@/views/user/Login.vue";
import Signup from "@/views/user/SignUp.vue";
import BoardGameDetail from "@/views/boardgame/BoardGameDetail.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/signup",
        name: "Signup",
        component: Signup,
    },
    {
        path: "/qna",
        name: "QnA",
        component: QnA,
    },
    {
        path: "/main",
        name: "Main",
        component: Main,
    },
    {
        path: "/board/:id",
        name: "BoardGameDetail",
        component: BoardGameDetail,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
