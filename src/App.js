import "./App.css";
import LoginForm from "./components/LoginForm";
import { useState } from "react";
import PortalContainer from "./containers/PortalContainer";
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import NotificationContainer from "./containers/NotificationContainer";


function App() {

  const [loggedInEmployee, setloggedInEmployee] = useState(null);

  // dark mode theme state
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const toggleTheme = () => {
    const theme = localStorage.getItem("theme")
    const oppositeTheme = theme && theme == "dark" ? "light" : "dark";
  
    console.log('oppositeTheme', oppositeTheme);
    localStorage.setItem(
        "theme",oppositeTheme
      )
    setTheme(oppositeTheme);
  }

  // set logged in employee

  const setEmployeeLogin = (login) => {
    setloggedInEmployee(login)
  }

  // update shift to the employee id

  const updateShifts = (newShift) => {
    const updatedEmployee = {...loggedInEmployee};
    updatedEmployee.shifts.push(newShift);
    setloggedInEmployee(updatedEmployee)
  }

  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    if(openSidebar){setOpenSidebar(false);}
    else{setOpenSidebar(true);} 
  }
  return (
    <div className={`App-${theme}`}>
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<LoginForm setEmployeeLogin={setEmployeeLogin}/>} />
      <Route path="/portal" element={<PortalContainer theme={theme} toggleTheme={toggleTheme} loggedInEmployee={loggedInEmployee} openSidebar={openSidebar} toggleSidebar={toggleSidebar} updateShifts={updateShifts}/>} />
      <Route path="/notifications" element={<NotificationContainer theme={theme} toggleTheme={toggleTheme} toggleSidebar={toggleSidebar} openSidebar={openSidebar} loggedInEmployee={loggedInEmployee} />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
