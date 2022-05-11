import { ReactComponent as FileDrop } from "assets/fileDrop.svg"
import "./style.scss"

const FileUpload = ({ files, setFiles }) => {
  function handleFile(e) {
    const newFiles = Array.from(e.target.files)
    setFiles([...files, ...newFiles])
  }
  return (
    <div className="def-border file-upload relative border-2 border-dashed border-slate-600">
      <input
        type="file"
        className="input-file"
        onChange={handleFile}
        multiple="multiple"
      />
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col items-center text-xl">
          <FileDrop />
          <p className="text-sm mt-7">Drag and drop or browse local files</p>
        </div>
      </div>
    </div>
  )
}

export default FileUpload
