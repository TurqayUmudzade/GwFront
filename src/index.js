import React from "react"
import ReactDOM from "react-dom"
import App from "./views/App"
import "./styles/tailwind.css"
import "./styles/index.scss"
import { UserProvider } from "context/userContext"
import reportWebVitals from "./reportWebVitals"

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
reportWebVitals()
