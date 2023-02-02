import {getUserToken,setUserToken, clearUserToken, decodeToken} from "../utils/authToken"
import { useContext } from "react"
import { UserContext } from "../data"
import RegisterForm from "./RegisterForm"
import LoginForm from "./LoginForm"

function Auth(props){
    const {setAuth, setUser} = useContext(UserContext)
    const registerUser = async (data) => {
        try {
            const configs = {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            }
            const newUser = await fetch(
                "http://localhost:3000/auth/register",
                configs
            )
            const parsedUser = await newUser.json()
            setUserToken(parsedUser.token)
            setUser(parsedUser.user)
            setAuth(parsedUser.isLoggedIn)
    
            return parsedUser
        } catch (err) {
            console.log(err)
            clearUserToken();
            setAuth(false);
        }
    }

    const loginUser = async (data) => {
        try {
            const configs = {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            }
            const response = await fetch(
                "http://localhost:3000/auth/login",
                configs
            )
    
            const currentUser = await response.json()
            if (currentUser.token) {
                setUserToken(currentUser.token)
                setUser(currentUser.user)
                setAuth(currentUser.isLoggedIn)
    
                return currentUser
            } else {
                throw `Server Error: ${currentUser.statusText}`
            }
        } catch (err) {
            console.log(err)
            clearUserToken();
            setAuth(false);
        }
    }
    

    return (
        <section className="registerForm-container">
            <LoginForm signIn={loginUser}/>
            <br />
            <a href="/auth/register" id="register-id"> Create account</a>
        </section>
    )
}

export default Auth