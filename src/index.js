import React from "react"
import ReactDOM from "react-dom"
import App from "./views/App"
import "./styles/tailwind.css"
import "./styles/index.scss"
import reportWebVitals from "./reportWebVitals"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
reportWebVitals()
