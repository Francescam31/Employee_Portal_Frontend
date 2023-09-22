import "./App.css";
import LoginForm from "./components/LoginForm";
import { useState } from "react";
import PortalContainer from "./containers/PortalContainer";

function App() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  return (
    <div>
      <LoginForm login={login} />
      <PortalContainer />
    </div>
  );
}

export default App;
