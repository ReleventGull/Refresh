
import {React} from "react"

const App = () => {
    return(
        <div className="loginPage">
            <div className="loginContainer">
                <div className="topLogin">
                    <h1>Login</h1>
                    <p>Enter your login details!</p>
                </div>
                <div className="middleLogin">
                    <div className="inputContainer 1">
                        <img src="/images/Person.png"/>
                        <input></input>
                    </div>
                    <div className="inputContainer 2">
                        <img src="/images/Lock.png"/>
                        <input></input>
                    </div>
                    <div className="loginButtonContainer">
                    <p>Login</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App