import { useState } from "react";

const LoginForm = ({}) => {
    
    const [login, setLogin] = useState({
        email: "",
        password: "",
      });
    

    const handleFormSubmit = (event) => {
        event.preventDefault()
        
    }

// create function that handles change on the input field
// onSubmit send fetch request to api
// set response from fetch via the function passed through here {}

    return (
        <div>
            <h1>Login Page</h1>
            <form>
                <input name="username" placeholder="Username"/>
                <input name="password" placeholder="Password"/>
                <button>Log In</button>
            </form>
        </div>
    )
}  

export default LoginForm;