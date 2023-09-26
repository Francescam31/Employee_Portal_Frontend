import { useState } from "react";
import { Link , useNavigate} from "react-router-dom";

const LoginForm = ({setEmployeeLogin}) => {

    const navigate = useNavigate();
    
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
    try{
        const foundEmployee = await postLogin()
        setEmployeeLogin(foundEmployee);
        navigate("/portal");
    } catch {
        alert("User not found");
    }
}

    return (
        <div>
            <div className="login-container">
            <img className="background-image" src="/Rainforest background.jpg"></img>
                <div className="login-form">
            <img className="login-logo" src="/rainforest retail.png"></img>
            <h1 className="login-title">Account Login</h1>
            <p className="welcome-text">Welcome Back</p>
            <form onSubmit={handleFormSubmit}>
                <p className="email-prompt">Enter your email</p>
                <input className="input" name="email" placeholder="Email" onChange={handleChangeEmail} value={loginEmail}/>
                <p className="password-prompt">Enter your password</p>
                <input className="input" type="password" name="password" placeholder="Password" onChange={handleChangePassword} value={loginPassword}/>
                <hr className="hr"></hr>
                <Link className="forgotten-password-button">Forgotten password</Link>
                <hr className="hr"></hr>
                <button className="login-button" type="submit">Log In</button>
            </form>
            </div>
            
            <div className="footer">
            <p>Rainforest Retails is using cookies to collect anonymous visitor analytics. | PDF | Terms and Conditions, Privacy Policy | Mobile view
            ©RainforestretailEmployee.com</p>
            </div>
            </div>
        </div>
       
    )
}  



export default LoginForm;