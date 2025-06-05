import axios from 'axios';

const APIURL = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    // 'Content-Type': 'application/json' //각 요청별로 타입 지정하기로 함
  },
  withCredentials: true
});

export default APIURL;