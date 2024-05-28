import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import { useState } from "react";
import getTheme from "./functions/getTheme";
import { ConfigProvider, theme } from "antd";
import Projects from "./pages/Projects";
import Activity from "./pages/Activity";
import Sidebar from "./components/SideBar";
import Settings from "./pages/Settings";
function App() {
  
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [dark, setDark] = useState(getTheme())

  return (
   <>
   <ConfigProvider theme={{
      algorithm: dark? darkAlgorithm : defaultAlgorithm,
     
        token: {
          colorPrimary: '#4bd26f'}
        
    }}>
     <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/activity" element={<Activity/>}/>
    <Route path="/settings" element={<Settings/>}></Route>
   </Routes>
   </BrowserRouter></ConfigProvider>
   </>
  );
}

export default App;
