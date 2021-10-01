import axios from "axios";
import store from "@/store/index";

const baseUrl = "http://j5a404.p.ssafy.io:9090";
// 회원가입
const requestSignUp = (data, callback, errorCallback) => {
  axios
    .post(baseUrl + `/user/signup`, data)
    .then((res) => {
      alert(res.data.message);
    })
    .catch((e) => {
      //window.swal(e.response.data.message + "!");
    });
};

// 로그인
const requestLogin = (data, callback, errorCallback) => {
  axios
    .post(baseUrl + `/user/login`, data)
    .then((res) => {
      localStorage.setItem("nickname", res.data.nickname);
      localStorage.setItem("jwt", res.headers.authorization);
      store.state.headers.Authorization = res.headers.authorization;
      callback(res.data.nickname);
    })
    .catch((e) => {
      //window.swal(e.response.data.message + "!");
    });
};

const UserApi = {
  requestSignUp: (data, callback, errorCallback) =>
    requestSignUp(data, callback, errorCallback),
  requestLogin: (data, callback, errorCallback) =>
    requestLogin(data, callback, errorCallback),
};

export default UserApi;
