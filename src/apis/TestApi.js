import axios from "axios";

const requestTest = (data, callback, errorCallback) => {
    axios
        .get("https://koreanjson.com/users")
        .then(function(response) {})
        .catch((e) => {
            errorCallback();
        });
};

const TestApi = {
    requestTest: (data, callback, errorCallback) => requestTest(data, callback, errorCallback),
};

export default TestApi;
