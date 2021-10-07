<template>
    <div class="whole-login">
        <Bgi />
        <Logo />
        <div class="row">
            <div class="login-box col-md-5 mx-auto px-4 mt-5">
                <div class="login-txt text-white fs-2 py-4">회원가입</div>
                <div class="email-box">
                    <Input placeholder="example@exam.ple" type="email" label="아이디" @setInput="setEmail" @keyUp="signUp" />
                </div>
                <!-- <div class="certi-box">
                    <Input placeholder="인증번호" type="text" label="인증번호" @setInput="setCert" @keyUp="signUp" />
                </div> -->
                <div class="nickname-box">
                    <Input placeholder="nickname" type="text" label="닉네임" @setInput="setNickname" @keyUp="signUp" />
                </div>
                <div class="password-box">
                    <Input placeholder="Password" type="password" label="비밀번호" @setInput="setPassword" @keyUp="signUp" />
                </div>
                <div class="passwordConfirm-box">
                    <Input placeholder="PasswordConfirm" type="password" label="비밀번호 확인" @setInput="setPasswordConfirm" @keyUp="signUp" />
                </div>
                <div class="signup-btn" v-on:click="signUp">
                    <Button text="회원가입" />
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
    name: "Signup",
    components: {
        Bgi,
        Logo,
        Button,
        Input,
    },
    methods: {
        setEmail(value) {
            this.email = value;
        },
        setCert(value) {
            this.certi = value;
        },
        setNickname(value) {
            this.nickname = value;
        },
        setPassword(value) {
            this.password = value;
        },
        setPasswordConfirm(value) {
            this.passwordConfirm = value;
        },
        signUp() {
            let data = {
                id: this.email,
                nickname: this.nickname,
                password: this.password,
            };

            if (!data.id || !data.nickname || !data.password) return;

            if (data.password !== this.passwordConfirm) {
                swal("비밀번호가 다릅니다!");
                return;
            }

            UserApi.requestSignUp(data, () => {
                let logdata = {
                    loginId: this.email,
                    password: this.password,
                };
                UserApi.requestLogin(logdata, () => {
                    this.$router.push({ name: "Rating" });
                });
            });
            // swal(`
            //     email: ${this.email},
            //     certi: ${this.certi},
            //     pass: ${this.password},
            //     passC: ${this.passwordConfirm},
            // `);
        },
    },
    data() {
        return {
            email: "",
            certi: "",
            nickname: "",
            password: "",
            passwordConfirm: "",
        };
    },
};
</script>

<style>
.login-box {
    background-color: rgba(0, 0, 0, 0.7);
    min-height: 600px;
}
</style>
