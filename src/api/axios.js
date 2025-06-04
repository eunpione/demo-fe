import axios from 'axios';

const APIURL = axios.create({
  baseURL: process.env.VUE_APP_API_URL
  // 필요시 withCredentials, timeout 등 추가 옵션 설정 가능
});

export default APIURL;