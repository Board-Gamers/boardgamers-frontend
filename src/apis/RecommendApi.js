import axios from "axios";

const baseUrl = "http://j5a404.p.ssafy.io:9090";

const rankRec = async function(data, callback, errorCallback) {
  const response = await axios({
    method: "GET",
    url: baseUrl + "/game/search",
    params: { order: "rank" },
  });
  return response.data.data;
};

const reviewRec = async function(data, callback, errorCallback) {
  const response = await axios({
    method: "GET",
    url: baseUrl + "/game/search",
    params: { order: "review" },
  });
  return response.data.data;
};

const RecApi = {
  rankRec: (data, callback, errorCallback) =>
    rankRec(data, callback, errorCallback),
  reviewRec: (data, callback, errorCallback) =>
    reviewRec(data, callback, errorCallback),
};

export default RecApi;
