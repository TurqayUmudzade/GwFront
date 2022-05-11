import "./style.scss"
import { useEffect, useState } from "react"

import API from "api"
import { v4 } from "uuid"
import Modal from "react-modal"
import { cloneDeep } from "lodash"

const customStyles = {
  content: {
    top: "45%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

Modal.setAppElement("#root")

function ProcessModal({ isOpen, processes, setIsOpen, setProcesses, index }) {
  const [processList, setProcessList] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const [isFetching, setIsFetching] = useState(true)
  useEffect(() => {
    API.getProcesses()
      .then((res) => {
        setProcessList(res)
        setSearchResult(res)
      })
      .finally(() => {
        setIsFetching(false)
      })
  }, [])

  const searchHandler = (e) => {
    const key = e.target.value
    if (key.length >= 3)
      setSearchResult(processList.filter((e) => e.title.includes(key)))
    else setSearchResult(processList)
  }

  function closeModal() {
    setIsOpen(false)
  }
  function addProcess(process, index) {
    let newProcess = cloneDeep(process)
    newProcess.uuid = v4()
    if (!index) setProcesses([newProcess, ...processes])
    else {
      processes.splice(index, 0, newProcess)
      setProcesses(processes)
    }
    closeModal()
  }
  return (
    <Modal style={customStyles} isOpen={isOpen}>
      <div className=" pb-4 p-5 dark:bg-slate-800">
        <div className="flex justify-between pb-4">
          <h1>Processes</h1>
          <i className="fab fa-mixer cursor-pointer" onClick={closeModal}></i>
        </div>
        <div className="group relative rounded-md dark:bg-slate-700 dark:highlight-white/10 dark:focus-within:bg-transparent">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500 dark:text-slate-500"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            ></path>
          </svg>
          <input
            type="text"
            aria-label="Filter projects"
            placeholder="Filter projects..."
            onChange={searchHandler}
            className="appearance-none w-full text-sm leading-6 bg-transparent text-slate-900 placeholder:text-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-slate-100 dark:placeholder:text-slate-500 dark:ring-0 dark:focus:ring-2"
          />
        </div>
      </div>
      <div className="dark:bg-slate-800">
        <ul className="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-1 gap-4 text-sm leading-6 dark:bg-slate-900/40 dark:ring-1 dark:ring-white/5">
          {!isFetching &&
            searchResult.map((process, i) => (
              <li
                key={i}
                onClick={() => addProcess(process, index + 1)}
                className="group cursor-pointer rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md dark:bg-slate-700 dark:ring-0 dark:highlight-white/10 dark:hover:bg-blue-500"
              >
                <div className="flex items-center">
                  <div className="relative pt-full bg-white rounded-md shadow-lg overflow-hidden transition-[filter] duration-500 w-24 h-24 mr-4">
                    <img
                      src="https://picsum.photos/536/354"
                      alt="test"
                      className="absolute z-10 inset-0 w-full h-full object-cover"
                    />
                  </div>

                  <div className="grid max-w-[85%]">
                    <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
                      <div>
                        <dd className="font-semibold text-slate-900 group-hover:text-white dark:text-slate-100 text-lg">
                          {process.title}
                        </dd>
                      </div>
                      <div>
                        <dd className="text-slate-200 group-hover:text-blue-200 text-sm">
                          {process.description}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </Modal>
  )
}
export default ProcessModal
