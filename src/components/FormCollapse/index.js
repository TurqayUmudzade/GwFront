import React from "react"
import { Collapse } from "react-collapse"
import { useForm } from "react-hook-form"
const FormCollapse = ({ process, isOpen }) => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  const getLast = () => {
    return process.params[process.params.length - 1]
  }
  let isEven = process.params.length % 2 === 0
  return (
    <Collapse isOpened={isOpen}>
      <form onChange={handleSubmit(onSubmit)}>
        <div className="grid gap-5 grid-cols-2 py-4">
          {process.params.map((param, i) => {
            if ((!isEven && i !== process.params.length - 1) || isEven) {
              return (
                <div key={i}>
                  <label className="text-md" htmlFor="">
                    {capitalizeFirstLetter(param.name)}
                  </label>
                  <input
                    type="text"
                    className="def-border dark:bg-slate-600 mt-1"
                    {...register("" + param.name)}
                    defaultValue={param.default}
                  />
                </div>
              )
            } else return ""
          })}
        </div>
        {!isEven && (
          <div className="pb-4">
            <label className="text-md" htmlFor="">
              {capitalizeFirstLetter(getLast().name)}
            </label>
            <input
              type="text"
              className="def-border dark:bg-slate-600 mt-1"
              {...register("" + getLast().name)}
              defaultValue={getLast().default}
            />
          </div>
        )}
      </form>
    </Collapse>
  )
}

export default FormCollapse
