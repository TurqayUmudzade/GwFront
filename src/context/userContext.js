import API from "api"
import React, { useState, createContext, useEffect } from "react"
import Cookies from "js-cookie"
export const userContext = createContext({
  user: undefined,
  setUser: (d) => d,
  loading: true,
})

export const UserProvider = (props) => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    API.getUserData()
      .then((user) => {
        if (user !== null && user) setUser(user)
      })
      .catch(() => {
        setUser(undefined)
      })
      .finally(() => {
        setLoading(false)
      })
    if (Cookies.get("auth")) setUser({ username: "turqay16" })
    setLoading(false)
  }, [])

  return (
    <userContext.Provider
      value={{
        user,
        setUser,
        loading,
      }}
    >
      {props.children}
    </userContext.Provider>
  )
}
