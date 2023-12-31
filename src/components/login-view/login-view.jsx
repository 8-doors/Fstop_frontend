import React from "react";
import { useState } from "react";


export const LoginView = ({ onLoggedIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
   
    const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
        Username: username,
        Password: password
    };

    fetch("http://fstop-744b7969db99.herokuapp.com/login?Username=" + username + "&Password=" + password ,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Login Response: " + data);
            if (data.user) {
                localStorage.setItem("user", JSON.stringify(data.user));
                localStorage.setItem("token", data.token);
                onLoggedIn(data.user, data.token);
            } else {
                alert("Login Failed, No Such User.")
            }
        })
        .catch((e) => {
            alert("Something Went Wrong");
            console.log(e);
        })
    };
   
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input 
                    type="text" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    minLength={5}
                />
            </label>
            <label>
                Password:
                <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </label>
            <button type="submit">Log In</button>
        </form>
    );
};