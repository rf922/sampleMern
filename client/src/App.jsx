import React from "react";
import "./App.css";
import Login from "./components/login/Login";
import Register from "./components/register/Register";import { Routes, Route, BrowserRouter } from "react-router-dom";
// import dotenv from 'dotenv';
// dotenv.config();

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
