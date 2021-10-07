import axios from "axios";
import store from "@/store/index.js";

const baseUrl = "http://j5a404.p.ssafy.io:9090";

const rankRec = async function(data = 1, callback, errorCallback) {
  const response = await axios({
    method: "GET",
    url: baseUrl + "/game/search",
    params: { page: data, order: "rank", pageSize: 9 },
  });
  return response.data.data;
};

const reviewRec = async function(data = 1, callback, errorCallback) {
  const response = await axios({
    method: "GET",
    url: baseUrl + "/game/search",
    params: { page: data, order: "review", pageSize: 9 },
  });
  return response.data.data;
};

const rateRec = async function(data = 1, callback, errorCallback) {
  const response = await axios({
    method: "GET",
    url: baseUrl + "/game/search",
    params: { page: data, order: "rate", pageSize: 9 },
  });
  return response.data.data;
};

const userRec = async function(data, callback, errorCallback) {
  const response = await axios({
    method: "GET",
    url: baseUrl + "/game/recommend",
    headers: store.state.headers,
  });
  return response.data.data;
};

const RecApi = {
  rankRec: (data, callback, errorCallback) =>
    rankRec(data, callback, errorCallback),
  reviewRec: (data, callback, errorCallback) =>
    reviewRec(data, callback, errorCallback),
  userRec: (data, callback, errorCallback) =>
    userRec(data, callback, errorCallback),
  rateRec: (data, callback, errorCallback) =>
    rateRec(data, callback, errorCallback),
};

export default RecApi;
