import './App.css';
import LoginForm from './components/LoginForm';
import { useState } from "react";

function App() {

  const [login ,setLogin] = useState(
    {
        email:"",
        password:""
    }
)

  return (
    <div>
      <LoginForm login={login}/>
    </div>
  );
}

export default App;
