import axios from "axios";

const baseUrl = "http://j5a404.p.ssafy.io:9090";

const requestQnaList = (data, callback, errorCallback) => {
  return axios({
    method: "GET",
    url: baseUrl + "/board/list",
  }).then((res) => res.data.data);
};

const requestQnaDetail = (data, callback, errorCallback) => {
  return axios({
    method: "GET",
    url: baseUrl + `/board/${data}`,
  }).then((res) => res.data);
};

const QnaApi = {
  requestQnaList: (data, callback, errorCallback) =>
    requestQnaList(data, callback, errorCallback),
  requestQnaDetail: (data, callback, errorCallback) =>
    requestQnaDetail(data, callback, errorCallback),
};

export default QnaApi;
