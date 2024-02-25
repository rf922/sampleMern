import "./Register.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import isValidForm from "./algorithms";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async () => {
        if (!isValidForm(username, password, confirmPassword)) {
            alert("Invalid form data");
            4;
            return;
        }
        try {
            const result = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/user/register`,
                { username, password },
            );
            if (result.status === 200) {
                navigate("/");
            } else {
                alert("User not registered. Please try again.");
            }
        } catch (err) {
            console.error("to err is human:", err);
        }
    };

    return (
        <div className="Register">
            <div className="register-card">
                <h1>Register</h1>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    placeholder="Type your username"
                    id="username"
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder="Type your password"
                    id="password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <label htmlFor="confirm-password">Password</label>
                <input
                    type="password"
                    placeholder="Type your password"
                    id="confirm-password"
                    onChange={(e) => {
                        setConfirmPassword(e.target.value);
                    }}
                />
                <br />
                <p>
                    Already have an account? Login <a href="/login">here</a>
                </p>
                <button onClick={handleRegister}>Register</button>
            </div>
        </div>
    );
};

export default Register;
