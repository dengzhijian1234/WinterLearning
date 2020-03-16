import axios from 'axios'

const http = axios.create({
  baseURL: 'https://v1.itooi.cn/tencent'
})

export default http;