import API from "api"
import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"

const Payment = () => {
  const [menuItems, setMenuItems] = useState([])
  useEffect(() => {
    API.getMenuData().then((res) => {
      console.log(res)
      setMenuItems(res)
    })
  }, [])

  const { register, handleSubmit, watch } = useForm()

  const password = useRef({})
  password.current = watch("password", "")
  const onSubmit = (data) => {
    const { menus } = data
    let res = []
    for (let i = 0; i < menuItems.length; i++) {
      menus[i].menu_id = menuItems[i].id
      if (menus[i].quantity) {
        res.push(menus[i])
      }
    }
    console.log(res)
  }

  return (
    <div className="container  mx-auto mt-10  justify-center">
      <h1 className="mt-20 mb-9 text-center text-3xl">Card Info</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 auth">
        <input type="text" placeholder="Paypall" className="def-border" />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default Payment
