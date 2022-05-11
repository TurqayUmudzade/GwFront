import "./style.scss"
import { arr } from "constants/dashboard"
import { useEffect, useState } from "react"
import API from "api"
const OrderHistory = () => {
  const [orders, setOrders] = useState([])
  useEffect(() => {
    API.getMyOrders().then((res) => {
      console.log(res)
      setOrders(res)
    })
  }, [])

  const formatDate = (sqlDate) => {
    let date = new Date(sqlDate)
    const options = { year: "numeric", month: "long", day: "numeric" }
    return date.toLocaleDateString("en-GB", options)
  }
  return (
    <div className="dashboard container mx-auto">
      <div className="def-border p-0 table mt-10">
        <div className="t-head ">
          {arr.map((e, i) => (
            <div key={i + "e"}>{e.label}</div>
          ))}
        </div>
        {orders.map((order, i) => (
          <div className="t-body" key={i + "d"}>
            <div>{`${order.Menus[0].MenuOrder.quantity} ${order.Menus[0].mealName} ...`}</div>
            <div>{order.Payment.amount + ' $'}</div>
            <div>{formatDate(order.createdAt)}</div>
            <div>{order.Address.street}</div>
            <div className="prog green mx-auto">{order.order_status}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrderHistory
