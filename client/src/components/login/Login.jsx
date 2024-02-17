import "./Login.css";
import axios from "axios";
import {useState} from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = async () =>{
        try{
        //send a request to the node server where the body contains the username and password
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/login`, {username:username, password:password});
        if(response.status=== 200){
                //if the response is 200, the user is logged in
                console.log("User logged in");
        }
        else {
                //if the response is not 200, the user is not logged in
                console.log("User not logged in");
        }
        } catch (err){
        console.error("to err is human:", err);
     }
    }
    const handleNameChange = (e) => {
        setUsername(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
       
        <div className="Login">
            <h1>Login</h1>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={username} onChange={handleNameChange}/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} />
            <button onClick={handleLogin}>Login</button>
         
        </div>
       
    )
}




export default Login;