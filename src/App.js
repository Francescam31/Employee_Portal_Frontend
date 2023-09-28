import "./App.css";
import LoginForm from "./components/LoginForm";
import { useState } from "react";
import PortalContainer from "./containers/PortalContainer";
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';


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

  return (
    <div className={`App-${theme}`}>
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<LoginForm setEmployeeLogin={setEmployeeLogin}/>} />
      <Route path="/portal" element={<PortalContainer theme={theme} toggleTheme={toggleTheme} loggedInEmployee={loggedInEmployee} updateShifts={updateShifts}/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
