import AddProcessButton from "components/AddProcessButton"
import DND from "components/DND"
import FileList from "components/FileList"
import FileUpload from "components/FileUpload"
import ProcessModal from "components/Modal"
import { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function Workflow() {
  const [isOpen, setIsOpen] = useState(false)
  const [processes, setProcesses] = useState([])
  const [files, setFiles] = useState([])
  const [index, setIndex] = useState()
  const [openForms, setOpenForms] = useState([])
  const addProcess = (i) => {
    if (files.length === 0) {
      notify()
      return
    }
    setIndex(i)
    setIsOpen(true)
  }

  const notify = () => toast.warn("Select a file")
  const openForm = (i) => {
    if (!openForms[i]) {
      openForms[i] = true
    } else {
      openForms[i] = false
    }
    setOpenForms([...openForms])
  }

  useEffect(() => {
    setOpenForms(new Array(processes.length).fill(false))
  }, [processes])

  return (
    <>
      <ProcessModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        processes={processes}
        setProcesses={setProcesses}
        index={index}
      />
      <ToastContainer autoClose={5000} />
      <div className="container mx-auto grid gap-4">
        <input
          type="text"
          placeholder="Workspace name"
          className="def-border"
        />
        <input type="text" placeholder="Description" className="def-border" />
        <FileUpload files={files} setFiles={setFiles} />
        <FileList files={files} setFiles={setFiles} />
        <div className="flex justify-center" onClick={addProcess}>
          {processes.length === 0 ? (
            <AddProcessButton />
          ) : (
            <i className="far fa-plus-circle cursor-pointer hover:text-blue-500 text-xl"></i>
          )}
        </div>
        <DND
          processes={processes}
          openForm={openForm}
          openForms={openForms}
          addProcess={addProcess}
          setProcesses={setProcesses}
        />
        {processes.length > 0 && (
          <div className="flex justify-center">
            <button className="btn btn-blue">Save workflow</button>
          </div>
        )}
      </div>
    </>
  )
}
export default Workflow
