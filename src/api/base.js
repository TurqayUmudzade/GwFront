import axios from "axios"
import Cookies from "js-cookie"

const axiosConfig = Object.freeze({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 100000,
  withCredentials: true,
})

const axiosInstance = axios.create(axiosConfig)

axiosInstance.interceptors.request.use((config) => {
  const token = Cookies.get("auth")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default axiosInstance
