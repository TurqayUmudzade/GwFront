import React, { lazy } from "react"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"

import Layout from "components/Layout"
import Order from "./Order"
import OrderHistory from "./OrderHistory"
const Login = lazy(() => import("./Login"))
const Register = lazy(() => import("./Register"))

function App() {
  return (
    <Router>
      <React.Suspense fallback={""}>
        <Layout>
          <Routes>
            <Route path="/" element={<Order />}></Route>
            <Route path="/order-history" element={<OrderHistory />}></Route>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />}></Route>
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </Layout>
      </React.Suspense>
    </Router>
  )
}

export default App
