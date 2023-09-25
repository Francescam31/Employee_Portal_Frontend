import "./App.css";
import LoginForm from "./components/LoginForm";
import { useState } from "react";
import PortalContainer from "./containers/PortalContainer";
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';


function App() {

  const [loggedInEmployee, setloggedInEmployee] = useState(null);

  //create function that sets loggedInEmployee
  // pass down function to loginForm
  
  const setEmployeeLogin = (login) => {
    setloggedInEmployee(login)
  }

  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<LoginForm setEmployeeLogin={setEmployeeLogin}/>} />
      <Route path="/portal" element={<PortalContainer loggedInEmployee={loggedInEmployee}/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
