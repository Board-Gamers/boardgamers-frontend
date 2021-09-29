import axios from "axios";
import store from "@/store/index";

const baseUrl = "http://j5a404.p.ssafy.io:9090";

// 보드게임 검색 결과 가져오기
const requestGameSearch = (data, callback, errorCallback) => {
    return axios.get(baseUrl + `/game/search?category=${data.category}&keyword=${data.keyword}&page=${data.page}&pageSize=12`);
};

// 보드게임 정보 가져오기
const requestGameInfo = (id, callback, errorCallback) => {
    return axios.get(baseUrl + `/game/${id}`);
};

// 보드게임 리뷰 가져오기
const requestGameReview = (id, callback, errorCallback) => {
    return axios.get(baseUrl + `/review?gameId=${id}`);
};

// 보드게임 리뷰 작성하기
const requestWriteReview = (data, callback, errorCallback) => {
    axios
        .post(baseUrl + `/review`, data)
        .then((res) => {
            callback();
        })
        .catch((e) => {
            //window.swal(e.response.data.message + "!");
        });
};

const BoardgameApi = {
    requestGameInfo: (data, callback, errorCallback) => requestGameInfo(data, callback, errorCallback),
    requestGameSearch: (data, callback, errorCallback) => requestGameSearch(data, callback, errorCallback),
    requestGameReview: (data, callback, errorCallback) => requestGameReview(data, callback, errorCallback),
    requestWriteReview: (data, callback, errorCallback) => requestWriteReview(data, callback, errorCallback),
};

export default BoardgameApi;
