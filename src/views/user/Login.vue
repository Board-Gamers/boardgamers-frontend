<template>
    <div class="whole-login">
        <Bgi />
        <Logo />
        <div class="row">
            <div class="login-box col-md-5 mx-auto px-4 mt-5">
                <div class="login-txt text-white fs-2 py-4">로그인</div>
                <div class="email-box">
                    <Input placeholder="example@exam.ple" type="email" label="이메일" @setInput="setEmail" @keyUp="login" />
                </div>
                <div class="password-box">
                    <Input placeholder="Password" type="password" label="비밀번호" @setInput="setPassword" @keyUp="login" />
                </div>
                <div class="login-btn" v-on:click="login">
                    <Button text="로그인" />
                </div>
                <div class="text-center mt-4">
                    <router-link to="/signup" class="text-white">아직 회원이 아니신가요?</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bgi from "@/components/user/BackgroundImage.vue";
import Logo from "@/components/user/Logo.vue";
import Button from "@/components/user/Button.vue";
import Input from "@/components/user/InputBox.vue";
import UserApi from "@/apis/UserApi.js";

export default {
    name: "Login",
    components: {
        Button,
        Input,
        Logo,
        Bgi,
    },
    methods: {
        setEmail(value) {
            this.email = value;
        },
        setPassword(value) {
            this.password = value;
        },
        login() {
            let data = {
                loginId: this.email,
                password: this.password,
            };

            UserApi.requestLogin(data, (nick) => {
                swal(nick + "님 반갑습니다");
                this.$router.push({ name: "Main" });
            });
        },
    },
    data() {
        return {
            email: "",
            password: "",
        };
    },
};
</script>

<style scoped>
.login-box {
    background-color: rgba(0, 0, 0, 0.7);
    min-height: 600px;
}
</style>
