import API from "api"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Order = () => {
  const [menuItems, setMenuItems] = useState([])

  useEffect(() => {
    API.getMenuData().then((res) => {
      setMenuItems(res)
    })
  }, [])

  const { register, handleSubmit, reset } = useForm()

  const notify = () => toast.success("Order placed!")

  const onSubmit = (data) => {
    const { menus } = data
    let res = []
    for (let i = 0; i < menuItems.length; i++) {
      menus[i].menu_id = menuItems[i].id
      if (menus[i].quantity) {
        res.push(menus[i])
      }
    }
    let orderData = {
      order_status: "ARRIVING",
      user_id: 1,
      payment_id: 1,
      adress_id: 1,
      items: res,
    }
    API.addOrder(orderData).then((res) => {
      notify()
      reset()
    })
  }

  return (
    <div className="container w-1/3 mx-auto mt-10  justify-center">
      <ToastContainer autoClose={5000} />
      <h1 className="mt-20 mb-9 text-center text-3xl">Order</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 auth">
        <div className="grid grid-cols-3 gap-5">
          {menuItems.map((item, i) => (
            <div key={i} className="flex relative">
              <div className="w-24 h-24 overflow-hidden">
                <img src={item.image} alt="menu" />
              </div>
              <div className="ml-4 flex flex-wrap">
                <p className="w-full">{item.mealName}</p>
                <input
                  type="number"
                  placeholder="0"
                  className="def-border h-4 w-20"
                  {...register("menus." + i + ".quantity", { required: false })}
                />
              </div>
            </div>
          ))}
        </div>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default Order
