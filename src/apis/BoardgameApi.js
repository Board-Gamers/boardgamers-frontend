import axios from "axios";
import store from "@/store/index";

const baseUrl = "http://j5a404.p.ssafy.io:8080";

const requestGameInfo = (id, callback, errorCallback) => {
    return axios.get(baseUrl + `/game/${id}`);
};

const requestGameSearch = (data, callback, errorCallback) => {
    return axios.get(baseUrl + `/game/search?category=${data.category}&keyword=${data.keyword}&page=${data.page}`);
};

const BoardgameApi = {
    requestGameInfo: (data, callback, errorCallback) => requestGameInfo(data, callback, errorCallback),
    requestGameSearch: (data, callback, errorCallback) => requestGameSearch(data, callback, errorCallback),
};

export default BoardgameApi;
