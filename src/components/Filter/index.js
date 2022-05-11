import { ReactComponent as FilterIcon } from "assets/filter.svg"
import { useState } from "react"
import Select from "react-select"

const Filter = ({ options }) => {
  const binaryOperators = [{ label: "AND" }, { label: "OR" }]
  const [firstFilter, setFirstFilter] = useState()
  const [binaryOperator, setBinaryOperator] = useState()
  const [secondFilter, setSecondFilter] = useState()

  const handleFirstFilter = (data) => {
    setFirstFilter(data.label)
  }
  const handleBO = (data) => {
    setBinaryOperator(data.label)
  }
  const handleSecondFilter = (data) => {
    setSecondFilter(data.label)
  }
  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-4 dashboard-btn">
        <FilterIcon />
        <p className="text-lg">Filter</p>
      </div>
      <Select
        className="bg-transparent text-md min-w-[16rem]"
        placeholder="Enter property name or value"
        classNamePrefix="select"
        isClearable={false}
        options={options}
        onChange={handleFirstFilter}
      />
      {firstFilter && (
        <Select
          className="bg-transparent text-md min-w-[4rem]"
          placeholder="Operator"
          classNamePrefix="select"
          isClearable={false}
          options={binaryOperators}
          onChange={handleBO}
        />
      )}
      {binaryOperator && (
        <Select
          className="bg-transparent text-md min-w-[16rem]"
          placeholder="Enter property name or value "
          classNamePrefix="select"
          isClearable={false}
          options={options}
          onChange={handleSecondFilter}
        />
      )}
    </div>
  )
}

export default Filter
