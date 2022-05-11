import { ReactComponent as Create } from "assets/create.svg"
import { ReactComponent as Start } from "assets/start.svg"
import { ReactComponent as Stop } from "assets/stop.svg"
import { ReactComponent as Delete } from "assets/delete.svg"
import { ReactComponent as Dublicate } from "assets/dublicate.svg"
import "./style.scss"
import Filter from "components/Filter"
import { arr } from "constants/dashboard"
const Dashboard = () => {
  return (
    <>
      <div className="flex justify-end space-x-4 mx-10">
        <div className="dashboard-btn ">
          <Create className="mr-3 blue" /> Create new Workflow
        </div>
        <div className="dashboard-btn">
          <Start className="mr-3 green" />
          Start
        </div>
        <div className="dashboard-btn">
          <Stop className="mr-3 red" />
          Stop
        </div>
        <div className="dashboard-btn">
          <Delete className="mr-3 red" />
          Delete
        </div>
        <div className="dashboard-btn">
          <Dublicate className="mr-3" />
          Dublicate
        </div>
      </div>
      <div className="dashboard container mx-auto">
        <Filter options={arr} />
        <div className="def-border p-0 table mt-10">
          <div className="t-head ">
            <div></div>
            {arr.map((e, i) => (
              <div key={i + "e"}>{e.label}</div>
            ))}
          </div>
          {[1, 1, 1, 1].map((e, i) => (
            <div className="t-body" key={i + "d"}>
              <input type="checkbox" name="" id="" />
              <div>flow_1(link)</div>
              <div>2022-03-14T13:26:44</div>
              <div>45 min</div>
              <div className="prog green">Downloading</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Dashboard
