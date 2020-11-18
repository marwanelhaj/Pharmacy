import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

//Conponents
import TermsAndConditions from '../TermsAndConditions/TermsAndCondifitons';
import PrivacyPolicy from '../Privay/Privacy';
import EULA from '../EULA/eula';

//Context
import { VirtualPharmaContext } from "../../Context/VirtualPharme.Context";


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        "& > * + *": {
            marginTop: theme.spacing(2),
        },
    },
}));

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginCompleted, setLoginCompleted] = useState(true);

    const [isOpenPopup, setIsOpenPopup] = React.useState(false);
    const [popupName, setPopupName] = React.useState(null);




    //Context API
    const {
        setIsLogin,
        setUserRole,
        setUserID,
        setUserEmail,
        setUserInfo,
    } = useContext(VirtualPharmaContext);

    //Api Base URL
    let usersUrl = process.env.REACT_APP_URL + "/users";
    let apiKey = process.env.REACT_APP_API_KEY;

    //Handle Login Function
    const handleLogin = async (event) => {
        event.preventDefault();
        if (!email || !password) {
            Swal.fire("Please enter email and password", "", "warning");
            return;
        }

        setLoginCompleted(false);

        await axios
            .post(
                usersUrl + "/login",
                { email, password },
                {
                    headers: {
                        api_key: apiKey,
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((loginResponse) => {
                setLoginCompleted(true);
                setIsLogin(true);
                setUserRole(loginResponse.data.role);
                setUserID(loginResponse.data.id);
                setUserEmail(email);
                setUserInfo(loginResponse.data);
                props.history.push("/");
            })
            .catch((error) => {
                console.log("Error :", error)
                setLoginCompleted(true);
                setIsLogin(false);
                setUserRole(null);
                setUserID(null);
                let errorMessage = null;
                try {
                    errorMessage = error.response.data.message;
                } catch (error) {
                    console.log("CAtch :", error)
                    errorMessage = null;
                }
                Swal.fire({
                    title: "",
                    text: "" + errorMessage,
                    icon: "error",
                    confirmButtonText: "OK",
                });
            });
    };

    //Handle Reset Click
    const handleResetClick = (event) => {
        event.preventDefault();
        props.setIsOpenResetTab(true);
    };

    //Handle terms and conditions
    const handleTermsAndConditions = (event) => {
        event.preventDefault();
        openPopup("ternsAndConditions");
    }

    //Handle Privacy 
    const handlePrivacy = (event) => {
        event.preventDefault();
        openPopup("privacy");
    }

    const handleEULA = (event) => {
        event.preventDefault();
        openPopup("EULA");
    }

    const openPopup = (popupName) => {
        setPopupName(popupName);
        setIsOpenPopup(true);
    };

    const closePopup = () => {
        setPopupName(null);
        setIsOpenPopup(false);
    };

    // ==================== open Popup =============================  
    let popup = "";
    if (isOpenPopup === true) {
        if (popupName === "ternsAndConditions") popup = <TermsAndConditions onClose={closePopup} />;
        if (popupName === "privacy") popup = <PrivacyPolicy onClose={closePopup} />;
        if (popupName === "EULA") popup = <EULA onClose={closePopup} />;
    }

    //material ui styles
    const classes = useStyles();
    useStyles();
    return (
        <main>
            <div className="register-page">
                <div className="input-container">
                    <h4 className="title-h4 text-center">Login</h4>
                    <form onSubmit={handleLogin}>
                        <input type="hidden" name="_token" defaultValue="yGFCLPyG1HNLws1kDYO1wwB7TIpynSY1cGcXypYn" />
                        <div className="form-group">
                            <label htmlFor="email">E-Mail Address</label>
                            <input id="email" type="email" className="first-input form-control input " name="email" defaultValue required autoComplete="email" autoFocus value={email}
                                onChange={(event) => setEmail(event.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" className="input form-control " name="password" required autoComplete="current-password" value={password}
                                onChange={(event) => setPassword(event.target.value)} />
                        </div>
                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                            <div className="form-group checkbox mb-2 ml-0">
                                <input className="form-check-input" type="checkbox" name="remember" id="remember" />
                                <label htmlFor="remember" className="position-relative d-flex align-items-center justify-content-end mb-0"> Remember Me</label>
                            </div>
                            <a className="forget mb-2" href="https://virtupharma.com.au/password/reset">
                                Forgot Your Password?
          </a>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="blue-btn" onClick={handleLogin}>
                                Login
          </button>
                        </div>
                        <Link className="forget mb-2" to="/registration">
                            Don't Have an Account?
        </Link>
                    </form>
                </div>
            </div>
        </main>

    )
}

export default withRouter(Login);

