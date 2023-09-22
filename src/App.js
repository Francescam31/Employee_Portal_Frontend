import "./App.css";
import LoginForm from "./components/LoginForm";
import { useState } from "react";
import PortalContainer from "./containers/PortalContainer";
import EmployeeList from "./components/EmployeeList";

function App() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  return (
    <div>
      <LoginForm login={login} />
      <PortalContainer />
      <EmployeeList />
    </div>
  );
}

export default App;
