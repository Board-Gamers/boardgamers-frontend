import axios from "axios";
import store from "@/store/index";

const baseUrl = "http://j5a404.p.ssafy.io:9090";

// 보드게임 검색 결과 가져오기
const requestGameSearch = (data, callback, errorCallback) => {
    return axios.get(
        baseUrl +
            `/game/search?category=${data.category}&keyword=${data.keyword}&page=${data.page}&pageSize=12&maxPlayTime=${data.maxPlayTime}&minPlayers=${data.minPlayers}&maxPlayers=${data.maxPlayers}&minAge=${data.minAge}`
    );
};

// 보드게임 정보 가져오기
const requestGameInfo = (id, callback, errorCallback) => {
    return axios.get(baseUrl + `/game/${id}`, {
        headers: { Authorization: localStorage.getItem("jwt") },
    });
};

// 보드게임 리뷰 가져오기
const requestGameReview = (id, callback, errorCallback) => {
    return axios.get(baseUrl + `/review?gameId=${id}`);
};

// 보드게임 리뷰 작성하기
const requestWriteReview = (data, callback, errorCallback) => {
    axios
        .post(baseUrl + `/review`, data, {
            headers: { Authorization: localStorage.getItem("jwt") },
        })
        .then((res) => {
            callback();
            let userId = localStorage.getItem("userId");
            axios.post(`http://j5a404.p.ssafy.io:8082/boardgamerec/update/gd/${userId}`).then(() => {
                swal("추천 결과를 갱신했습니다.").then(() => {
                    location.reload();
                });
            });
        })
        .catch((e) => {
            //window.swal(e.response.data.message + "!");
        });
};

// 보드게임 리뷰 삭제하기
const requestDeleteReview = (id, callback, errorCallback) => {
    return axios.delete(baseUrl + `/review?id=${id}`, {
        headers: { Authorization: localStorage.getItem("jwt") },
    });
};

// 보드게임 질문 가져오기
const requestGameQuestion = (id, callback, errorCallback) => {
    return axios.get(baseUrl + `/game/qna?gameId=${id}`);
};
// 보드게임 질문 답변 가져오기
const requestGameQuestionReply = (id, callback, errorCallback) => {
    return axios.get(baseUrl + `/game/qna?questionId=${id}`, {
        headers: { Authorization: localStorage.getItem("jwt") },
    });
};

// 보드게임 질문 작성하기
const requestGameWriteQuestion = (data, callback, errorCallback) => {
    axios
        .post(baseUrl + `/game/qna`, data, {
            headers: { Authorization: localStorage.getItem("jwt") },
        })
        .then((res) => {
            callback();
        })
        .catch((e) => {
            //window.swal(e.response.data.message + "!");
        });
};

// 보드게임 질문 삭제하기
const requestDeleteQna = (id, callback, errorCallback) => {
    return axios.delete(baseUrl + `/game/qna/${id}`, {
        headers: { Authorization: localStorage.getItem("jwt") },
    });
};

// 보드게임 질문 답변 작성하기
const requestGameQuestionWriteReply = (data, callback, errorCallback) => {
    axios
        .post(baseUrl + `/game/qna/${data.gameId}`, data.content, {
            headers: { Authorization: localStorage.getItem("jwt") },
        })
        .then((res) => {
            callback();
        })
        .catch((e) => {
            //window.swal(e.response.data.message + "!");
        });
};

// 보드게임 즐겨찾기하기
const requestGameBookmark = (data, callback, errorCallback) => {
    axios({
        method: "POST",
        url: baseUrl + `/game/favorite?gameId=${data}`,
        headers: store.state.headers,
    }).then((res) => {
        callback();
    });
    // axios
    //     .post(, {
    //         headers: {  },
    //     })
    //     .then((res) => {
    //         callback();
    //     })
    //     .catch((e) => {
    //         //window.swal(e.response.data.message + "!");
    //     });
};

// 게임 답변 좋아요
const likeAnswer = (data, callback, errorCallback) => {
    return axios({
        method: "POST",
        url: baseUrl + "/game/qna/like",
        headers: store.state.headers,
        params: { answerId: data.id },
        data: { isLiked: data.likes },
    });
};

const BoardgameApi = {
    requestGameInfo: (data, callback, errorCallback) => requestGameInfo(data, callback, errorCallback),
    requestGameSearch: (data, callback, errorCallback) => requestGameSearch(data, callback, errorCallback),
    requestGameReview: (data, callback, errorCallback) => requestGameReview(data, callback, errorCallback),
    requestWriteReview: (data, callback, errorCallback) => requestWriteReview(data, callback, errorCallback),
    requestDeleteReview: (data, callback, errorCallback) => requestDeleteReview(data, callback, errorCallback),
    requestDeleteQna: (data, callback, errorCallback) => requestDeleteQna(data, callback, errorCallback),
    requestGameQuestion: (data, callback, errorCallback) => requestGameQuestion(data, callback, errorCallback),
    requestGameQuestionReply: (data, callback, errorCallback) => requestGameQuestionReply(data, callback, errorCallback),
    requestGameWriteQuestion: (data, callback, errorCallback) => requestGameWriteQuestion(data, callback, errorCallback),
    requestGameQuestionWriteReply: (data, callback, errorCallback) => requestGameQuestionWriteReply(data, callback, errorCallback),
    requestGameBookmark: (data, callback, errorCallback) => requestGameBookmark(data, callback, errorCallback),
    likeAnswer: (data, callback, errorCallback) => likeAnswer(data, callback, errorCallback),
};

export default BoardgameApi;
