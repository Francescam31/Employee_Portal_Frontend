import { useState } from "react";

const LoginForm = ({setEmployeeLogin}) => {
    
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("")

// create function that handles change on the input field

const handleChangeEmail = (event) => {
    const email = event.target.value;
    setLoginEmail(email);
}
const handleChangePassword = (event) => {
    const password = event.target.value;
    setLoginPassword(password);
}

// onSubmit send fetch request to api
const postLogin = async () => {
    const response = await fetch("http://localhost:8080/employees/login", {
    method: "POST",
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify({
            email:loginEmail,
            password:loginPassword
        })
    })
    const employee = await response.json(); 
    return employee;
}

// set response from fetch via the function passed through here {}
const handleFormSubmit = async (event) => {
    event.preventDefault();
    const foundEmployee = await postLogin()
    setEmployeeLogin(foundEmployee);
}

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleFormSubmit}>
                <input name="email" placeholder="Email" onChange={handleChangeEmail} value={loginEmail}/>
                <input name="password" placeholder="Password" onChange={handleChangePassword} value={loginPassword}/>
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}  

export default LoginForm;