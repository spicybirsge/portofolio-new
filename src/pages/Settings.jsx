import getExactThemeSetting from "../functions/getExactThemeSetting"
import Sidebar from "../components/SideBar"
import { Typography, Select } from "antd"
import { useState } from "react"
export default function Settings() {
     const [theme, setTheme] = useState(getExactThemeSetting())
     const changeTheme = (e) => {
        setTheme(e)
       if (e === "system") { 
        window.localStorage.removeItem("theme");
        window.location.href = window.location.href;

       }

       if(e === "light") {
        window.localStorage.setItem("theme", "light");
        window.location.href = window.location.href;
       }

       if(e === "dark") {
        window.localStorage.setItem("theme", "dark");
        window.location.href = window.location.href;
       }
     }

    const element = <><Typography.Title level={3}>Theme ☀️🌑</Typography.Title>
    <Select   style={{
        width: 120,
      }} defaultValue={theme} options={[{value: 'system', label: 'System 🖥️'}, {value: 'light', label: 'Light ☀️'}, {value: 'dark', label: 'Dark 🌑'}]} onChange={(e) => {changeTheme(e)}}></Select>
    </>
    return <><Sidebar element={element}></Sidebar></>
}