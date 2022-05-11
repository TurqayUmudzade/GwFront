import API from "api"
import classNames from "classnames"

import { useRef } from "react"
import { NavLink } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { ReactComponent as Logo } from "assets/logo.svg"

const Login = () => {
  let navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm()

  const password = useRef({})
  password.current = watch("password", "")
  const onSubmit = (data) => {
    const { username, password } = data
    let formData = new FormData()
    formData.set("username", username)
    formData.set("password", password)

    API.register(formData)
      .then(() => {
        navigate("/login", { replace: true })
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <div className="container w-1/3 mx-auto mt-10  justify-center">
      <Logo className="mx-auto" />
      <h1 className="mt-20 mb-9 text-center text-3xl">REGISTRATION</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 auth">
        <div className="grid gap-2">
          <input
            type="text"
            placeholder="Username"
            className={classNames(
              { "border-red": errors.username },
              "dark:text-black"
            )}
            {...register("username", { required: true, minLength: 8 })}
          />
          {errors.username && (
            <span className="text-sm text-red"> Username is required</span>
          )}
        </div>
        <div className="grid gap-2">
          <input
            type="password"
            placeholder="Password"
            className={classNames({ "border-red": errors.password })}
            {...register("password", { required: true, minLength: 8 })}
          />
          {errors.password && (
            <span className="text-sm text-red"> Password is required</span>
          )}
        </div>
        <div className="grid gap-2">
          <input
            type="password"
            placeholder="Repeat password"
            className={classNames({ "border-red": errors.password2 })}
            {...register("password2", {
              validate: (value) =>
                value === password.current || "The passwords do not match",
            })}
          />
          {errors.password2 && (
            <span className="text-sm text-red"> Passwords do not match</span>
          )}
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            className="mr-4"
            {...register("isTermsAccepted", { required: true })}
          />
          <span className="text-sm">Accept terms and conditions</span>
        </div>
        <button>Submit</button>

        <span className="mx-auto text-gray">
          If you have an account
          <b className="text-black ml-1">
            <NavLink className="cursor-pointer" to="/login">
              log in
            </NavLink>
          </b>
        </span>
      </form>
    </div>
  )
}

export default Login
