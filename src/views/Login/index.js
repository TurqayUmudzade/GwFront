import classNames from "classnames"
import { useForm } from "react-hook-form"
import { useNavigate, NavLink } from "react-router-dom"

const Login = () => {
  let navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    navigate("/")
  }

  return (
    <div className="container w-1/3 mx-auto mt-10  justify-center">
      <h1 className="mt-20 mb-9 text-center text-3xl">LOGIN</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-8 auth">
        <div className="grid gap-2">
          <input
            type="text"
            placeholder="Username"
            className={classNames(
              { "border-red": errors.username },
              "def-border"
            )}
            {...register("username", { required: true, minLength: 3 })}
          />
          {errors.username && (
            <span className="text-sm text-red"> Username is required</span>
          )}
        </div>
        <div className="grid gap-2">
          <input
            type="password"
            placeholder="Password"
            className={classNames(
              { "border-red": errors.password },
              "def-border"
            )}
            {...register("password", { required: true, minLength: 3 })}
          />
          {errors.password && (
            <span className="text-sm text-red"> Password is required</span>
          )}
          {errors.auth && (
            <span className="text-sm text-red">
              Incorrect username or password
            </span>
          )}
        </div>
        <button>Submit</button>

        <span className="mx-auto text-gray text-sm hover:text-main-400 cursor-pointer hover:underline underline-offset-1">
          If you dont have an account
          <b className=" ml-1 hover:text-main-400 ">
            <NavLink className="cursor-pointer" to="/register">
              register
            </NavLink>
          </b>
        </span>
      </form>
    </div>
  )
}

export default Login
