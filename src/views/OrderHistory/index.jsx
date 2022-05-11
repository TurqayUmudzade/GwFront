import "./style.scss"
import { arr } from "constants/dashboard"
import { useEffect } from "react"
import API from "api"
const OrderHistory = () => {
  useEffect(() => {
    API.getMyOrders().then((res) => {
      console.log(res)
    })
  }, [])
  return (
    <div className="dashboard container mx-auto">
      <div className="def-border p-0 table mt-10">
        <div className="t-head ">
          <div></div>
          {arr.map((e, i) => (
            <div key={i + "e"}>{e.label}</div>
          ))}
        </div>
        {[1, 1, 1, 1].map((e, i) => (
          <div className="t-body" key={i + "d"}>
            <div>flow_1(link)</div>
            <div>2022-03-14T13:26:44</div>
            <div>45 min</div>
            <div className="prog green">Downloading</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrderHistory
