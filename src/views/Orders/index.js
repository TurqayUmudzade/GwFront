import API from "api"
import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"

const Order = () => {
  // let navigate = useNavigate()
  const [menuItems, setMenuItems] = useState([])
  useEffect(() => {
    API.getMenuData().then((res) => {
      console.log(res)
      setMenuItems(res)
    })
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm()

  const password = useRef({})
  password.current = watch("password", "")
  const onSubmit = (data) => {
    const { menus } = data
    let res  = []
    for (let i = 0; i < menuItems.length; i++) {
      menus[i].menu_id = menuItems[i].id;
      if(menus[i].quantity){
        res.push(menus[i])
      }
    }
    console.log(res)
  }

  return (
    <div className="container w-1/3 mx-auto mt-10  justify-center">
      <h1 className="mt-20 mb-9 text-center text-3xl">Order</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 auth">
        {menuItems.map((item, i) => (
          <div key={i} className="grid grid-cols-2 relative">
            <img src={item.image} className="w-[10em] h-[14em]" alt="menu" />
            <div>
            <p>{item.mealName}</p>
            <input
              type="number"
              placeholder="0"
              className="dark:text-black"
              {...register("menus." + i + ".quantity", { required: false })}
              />
              </div>
          </div>
        ))}

        <h2 className="my-5">Card Info</h2>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default Order
