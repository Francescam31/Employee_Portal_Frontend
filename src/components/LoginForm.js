

const LoginForm = ({login}) => {
    
    

    const handleFormSubmit = (event) => {
        event.preventDefault()
        
    }


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