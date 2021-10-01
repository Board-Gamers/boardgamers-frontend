import axios from "axios";
import store from "@/store/index";

const baseUrl = "http://j5a404.p.ssafy.io:9090";

const requestQnaList = async function(data, callback, errorCallback) {
  const response = await axios({
    method: "GET",
    url: baseUrl + "/board/list",
  });
  return response.data.data;
};

const requestQnaDetail = async function(data, callback, errorCallback) {
  const response = await axios({
    method: "GET",
    url: baseUrl + `/board/${data}`,
  });
  return response.data;
};

const replyQnA = async function(data, callback, errorCallback) {
  const response = await axios({
    method: "POST",
    url: baseUrl + "/board/reply",
    headers: store.state.headers,
    data: data,
  });
  return response.data;
};

const deleteReply = async function(data, callback, errorCallback) {
  const response = await axios({
    method: "DELETE",
    url: baseUrl + "/board/reply",
    headers: store.state.headers,
    data: data,
  });
  return response;
};

const QnaApi = {
  requestQnaList: (data, callback, errorCallback) =>
    requestQnaList(data, callback, errorCallback),
  requestQnaDetail: (data, callback, errorCallback) =>
    requestQnaDetail(data, callback, errorCallback),
  replyQnA: (data, callback, errorCallback) =>
    replyQnA(data, callback, errorCallback),
  deleteReply: (data, callback, errorCallback) =>
    deleteReply(data, callback, errorCallback),
};

export default QnaApi;
