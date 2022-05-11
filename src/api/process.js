import apiClient from "./base"

export function getProcesses() {
  return apiClient.get("/processes").then((response) => response.data)
}
