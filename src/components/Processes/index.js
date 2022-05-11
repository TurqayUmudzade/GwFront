import classNames from "classnames"
import FormCollapse from "components/FormCollapse"
import { ReactComponent as Delete } from "assets/delete.svg"

const Process = ({
  index,
  process,
  openForm,
  openForms,
  addProcess,
  isDragging,
}) => {
  return (
    <div className="py-2">
      <div className="def-border mb-4" key={index}>
        <div className="flex justify-between items-center ">
          <div>
            <p className="text-lg font-bold">
              <span className="mr-5">{index + 1}</span>
              {process.name}
            </p>
          </div>
          <div className="flex items-center space-x-4 cursor-pointer">
            <Delete className="path-red" />
            <i
              className={classNames(
                "fas fa-chevron-circle-down text-xl cursor-pointer ease-in-out duration-300",
                { "rotate-180": openForms[index] }
              )}
              onClick={() => openForm(index)}
            ></i>
          </div>
        </div>
        <FormCollapse process={process} isOpen={openForms[index]} />
      </div>
      <div
        className={classNames("flex justify-center", {
          "opacity-50": isDragging,
        })}
      >
        <i
          className="far fa-plus-circle cursor-pointer hover:text-blue-500 text-xl"
          onClick={() => addProcess(index)}
        ></i>
      </div>
    </div>
  )
}

export default Process
