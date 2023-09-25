import "./App.css";
import LoginForm from "./components/LoginForm";
import { useState } from "react";
import PortalContainer from "./containers/PortalContainer";


function App() {

  const [loggedInEmployee, setloggedInEmployee] = useState(null);

  //create function that sets loggedInEmployee
  // pass down function to loginForm
  
  const setEmployeeLogin = (login) => {
    setloggedInEmployee(login)
  }

  return (
    <div>
      <LoginForm setEmployeeLogin={setEmployeeLogin}/>
      {loggedInEmployee ? <PortalContainer loggedInEmployee={loggedInEmployee}/> : <p>Please Log in </p>}
    </div>
  );
}

export default App;
