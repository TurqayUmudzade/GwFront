import API from "api"
import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import Select from 'react-select';

const Order = () => {
  // let navigate = useNavigate()
  const [menuItems, setMenuItems] = useState([])
  const [addresses, setAddresses] = useState([])
  const [address, setAddress] = useState('')
  useEffect(() => {
    API.getMenuData().then((res) => {
      console.log(res)
      setMenuItems(res)
    })
    API.getAddressData().then((res) => {
      console.log(res)
      setAddresses(Array.from(res, (item) => { return { value: item.id, label: item.street } }))
    })
  }, [])

  const { register, handleSubmit, watch } = useForm()

  const password = useRef({})
  password.current = watch("password", "")
  const onSubmit = (data) => {
    const { menus } = data
    let finalMenus = []
    for (let i = 0; i < menuItems.length; i++) {
      menus[i].menu_id = menuItems[i].id
      if (menus[i].quantity) {
        finalMenus.push(menus[i])
      }
    }
    console.log(finalMenus)
  }

  return (
    <div className="container w-1/3 mx-auto mt-10  justify-center">
      <h1 className="mt-20 mb-9 text-center text-3xl">Order</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 auth">
        <h2>Choose Menus: </h2>
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
                  min="0"
                  {...register("menus." + i + ".quantity", { required: false })}
                />
              </div>
            </div>
          ))}
        </div>

        <h2>Choose Address: </h2>
        <Select
          className="bg-transparent"
          value={address.street}
          onChange={setAddress}
          options={addresses}
        />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default Order
