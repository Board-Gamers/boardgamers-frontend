import axios from "axios";

const baseUrl = "http://j5a404.p.ssafy.io:8080";
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

const UserApi = {
    requestSignUp: (data, callback, errorCallback) => requestSignUp(data, callback, errorCallback),
};

export default UserApi;
