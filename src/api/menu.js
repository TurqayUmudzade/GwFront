import apiClient from "./base"

export function getMenuData(data) {
  return apiClient.get("/menus", data).then((response) => response.data)
}

export function getAddressData(data) {
  return apiClient.get("/addresses", data).then((response) => response.data)
}
export function addOrder(data) {
  return apiClient.post("/orders", data).then((response) => response.data)
}

export function getMyOrders() {
  return apiClient.get("/orders/me").then((response) => response.data)
}
