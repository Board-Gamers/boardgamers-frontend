import axios from "axios";

const baseUrl = "https://koreanjson.com/users"; // 임시

axios.interceptors.request.use(
    function(config) {
        // 요청을 보내기 전에 수행할 일
        console.log("intertcept before request");
        return config;
    },
    function(error) {
        // 오류 요청을 보내기전 수행할 일
        return Promise.reject(error);
    }
);
axios.interceptors.response.use(
    function(response) {
        // 응답 데이터를 가공
        console.log("intercept before response");
        return response;
    },
    function(error) {
        // 오류 응답을 처리
        console.log("intercept before error");
        return Promise.reject(error);
    }
);
