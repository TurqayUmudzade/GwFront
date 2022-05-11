import apiClient from "./base"

export function getUserData() {
  return apiClient.get("/users/me").then((response) => response.data)
}

export function register(data) {
  return apiClient.post("/users/create", data).then((response) => response.data)
}

export function login(data) {
  return apiClient.post("/token", data).then((response) => response.data)
}
