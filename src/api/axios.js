import axios from 'axios';

const APIURL = axios.create({
  baseURL: '/api',
  // 필요시 withCredentials, timeout 등 추가 옵션 설정 가능
  headers: {
    'Content-Type': 'application/json'
  }
});

export default APIURL;