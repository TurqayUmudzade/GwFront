import React, { lazy } from "react"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"
import { userContext as UserContext } from "context/userContext"

import Layout from "components/Layout"
const Dashboard = lazy(() => import("./Dashboard"))
const Workflow = lazy(() => import("./Workflow"))
const Login = lazy(() => import("./Login"))
const Register = lazy(() => import("./Register"))

function App() {
  return (
    <Router>
      <React.Suspense fallback={""}>
        <UserContext.Consumer>
          {({ user, loading }) => {
            if (!loading) {
              if (user) {
                return (
                  <Layout>
                    <Routes>
                      <Route path="/" element={<Workflow />}></Route>
                      <Route path="/workflow" element={<Workflow />}></Route>
                      <Route path="/dashboard" element={<Dashboard />}></Route>
                      <Route path="*" element={<Navigate to="/workflow" />} />
                    </Routes>
                  </Layout>
                )
              } else {
                return (
                  <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="*" element={<Navigate to="/login" />} />
                  </Routes>
                )
              }
            }
          }}
        </UserContext.Consumer>
      </React.Suspense>
    </Router>
  )
}

export default App
