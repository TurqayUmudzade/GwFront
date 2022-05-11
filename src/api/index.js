import * as userServices from "./user"
import * as processServices from "./process"
import * as fileServices from "./file"

const API = {
  ...userServices,
  ...processServices,
  ...fileServices,
}

export default API
