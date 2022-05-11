import apiClient from "./base"

export function getMenuData(data) {
  return apiClient.get("/menus", data).then((response) => response.data)
}
