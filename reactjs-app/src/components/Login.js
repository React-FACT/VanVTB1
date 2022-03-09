import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './../assets/css/App.css';
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const Login = () => {
    const user = {
        email: "admin@gmail.com",
        password: "admin"
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate ();
    const dispatch = useDispatch();

    function submitLogin() {

        dispatch(login({
            email: email,
            password: password,
            isLogged: true
        }));

        if (email.toLowerCase() === user.email && password.toLowerCase() === user.password) {
            alert("Login successful!");
            navigate("/adminpage");
        } 
        else if (email.toLowerCase() !== user.email && password.toLowerCase() !== user.password) {
            alert("Try again!");
        }
        else {
            alert("Please login with your account!");
            window.location.reload(true);
        }
    };
    return (
        <div>
            <div className="App">
                <div className="wrapper">
                    <div className="title">
                        <p className="text-title">login</p>
                    </div>
                    <div className="main-content">
                        <form action="./adminpage.html">
                            <div className="form-control" id="frmcontrol">
                                <span><i className="far fa-envelope"></i></span>
                                <input type="email" name="email" id="email" placeholder="Your email" onChange={(e) => {setEmail(e.target.value)}} />
                            </div>
                            <div className="form-control" id="frmcontrol">
                                <span><i className="fas fa-lock"></i></span>
                                <input type="password" name="password" id="password" placeholder="Your password" onChange={(e) => {setPassword(e.target.value)}}/>
                            </div>
                            <div className="form-control" id="frmcontrol">
                                <button type="submit" className="btnLogin" onClick={submitLogin}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;