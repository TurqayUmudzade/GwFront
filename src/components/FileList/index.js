import { ReactComponent as X } from "assets/x.svg"
import { ReactComponent as Import } from "assets/import.svg"
import API from "api"
const FileList = ({ files, setFiles }) => {
  const handleRemove = (filename) => {
    let newFiles = files.filter((f) => f.name !== filename)
    setFiles(newFiles)
  }

  const uploadFile = (file) => {
    // let data = new FormData()
    // data.append("file", file)

    const formData = new FormData()
    files.forEach((file) => {
      formData.append("files", file)
    })
    API.uploadFile(formData).then((res) => {
      console.log(res)
    })
  }

  return (
    <div className="def-border p-0">
      {files.length > 0 && (
        <div className="flex items-center justify-between px-4 py-4">
          <h1 className="text-lg  ">Imported data</h1>
          <Import className="file-list-imort" />
        </div>
      )}
      {files.map((file, i) => (
        <div key={i} className="px-4 py-3  dark:hover:bg-slate-600">
          <div className="flex text-gray text-xs items-center  justify-between dark:text-slate-100 mb-1">
            <div className="flex gap-4">
              <p>{file.type} </p> <p>{file.size} kb</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="cursor-pointer" onClick={() => uploadFile(file)}>
                Test upload
              </div>
              <p className="text-green text-xs dark:text-teal-400">
                23% loading...
              </p>
              <X
                className="close-red"
                onClick={() => handleRemove(file.name)}
              />
            </div>
          </div>

          <p>{file.name}</p>
        </div>
      ))}
    </div>
  )
}

export default FileList
