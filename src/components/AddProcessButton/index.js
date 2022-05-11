import React from "react"

const AddProcessButton = () => {
  return (
    <div className="w-full">
      <div className="group text-xl w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 leading-6 text-slate-900 font-medium py-10 cursor-pointer hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 dark:border-slate-700 dark:text-slate-100 dark:hover:border-blue-500 dark:hover:bg-transparent dark:hover:text-blue-500">
          <i className="far fa-plus mb-1 text-slate-400 group-hover:text-blue-500"></i>
        New process
      </div>
    </div>
  )
}

export default AddProcessButton
