import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./App.css";

const App = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    function handleUname(event) {
        setUser(event.target.value);
    }

    function handlePass(event) {
        setPass(event.target.value);
    }

    function check() {
        axios.post("http://localhost:5000/login", { "username": user, "password": pass })
            .then((response) => {
                if (response.data.success) {
                    navigate("/success");
                }
            })
            .catch((error) => {
                if (error.response) {
                    setErrorMsg(error.response.data.message); 
                }
            });
    }

    return (
        <div className="main-container">
            <div className="container">
                <input
                    className="input"
                    onChange={handleUname}
                    name="username"
                    placeholder="Username"
                />
                <input
                    className="input"
                    onChange={handlePass}
                    name="password"
                    placeholder="Password"
                   
                />
                <button className="btn" onClick={check}>Login</button>
                {errorMsg && <p className="error-message">{errorMsg}</p>} 
            </div>
        </div>
    );
};

export default App;
