import axios from "axios";
import dotenv from "dotenv";

const baseUrl = "https://www.googleapis.com/youtube/v3";

// 보드게임 검색 결과 가져오기
const requestYoutube = (data) => {
    dotenv.config();
    let API_KEY = process.env.VUE_APP_API_KEY;
    //console.log(data, API_KEY);
    return axios({
        method: "get",
        url: baseUrl + `/search?key=${API_KEY}&q=${data} boardgame&maxResults=1&part=id&type=video`,
        headers: {
            Authorization: "881428576324-5v8jsig3lr9a1a100i4ree0ap9ia72mb.apps.googleusercontent.com",
        },
    });
};

const YoutubeApi = {
    requestYoutube,
};

export default YoutubeApi;
