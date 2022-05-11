import * as userServices from "./user"
import * as processServices from "./process"
import * as fileServices from "./file"
import * as menuServices from "./menu"

const API = {
  ...userServices,
  ...processServices,
  ...fileServices,
  ...menuServices,
}

export default API
