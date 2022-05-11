import apiClient from "./base"

export function uploadFile(data) {
  return apiClient.post("/upload", data).then((response) => response.data)
}
