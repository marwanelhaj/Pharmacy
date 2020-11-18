import React, { useState } from 'react';
import axios from "axios";
import Swal from 'sweetalert2'
import { Link, withRouter } from "react-router-dom";


const Register = (props) => {
    // const [userName , setUserName] = useState("");
    const [password, setPassword] = useState(null);
    const [cnfrmPass, setCnfrmPass] = useState(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("learner");
    // const [isAdmin , setIsAdmin] = useState(0);
    // const [licenseKey , setLicenseKey] = useState("12345");


    //Api Base URL
    let usersUrl = process.env.REACT_APP_URL + "/users";
    let apiKey = process.env.REACT_APP_API_KEY;


    const isNull = (value) => {
        if (
            value === "" ||
            value === null ||
            value === undefined
        )
            return true;
        else return false;
    }
    //Register User
    const handleRegisterUser = (event) => {
        event.preventDefault();
        setRole(event.target.name);

        if (password !== cnfrmPass) {
            Swal.fire({
                title: 'Error!',
                text: 'Password Did not match',
                icon: 'error',
                confirmButtonText: 'OK'
            })
            return
        }
        if (isNull(email) || isNull(password) || isNull(firstName) || isNull(lastName)) {
            Swal.fire({
                title: 'Error!',
                text: 'Please enter all fields',
                icon: 'error',
                confirmButtonText: 'OK'
            })
            return;
        } else {
            let model = {
                first_name: firstName,
                last_name: lastName,
                email: email,
                _role: event.target.name,
                is_admin: "0",
                license_key: 'yMrMzYIwQg',
                password: password,
            }


            axios
                .post(usersUrl, model,
                    {
                        headers: {
                            api_key: apiKey,
                            'Accept': 'application/json, text/plain, */*',
                            'Content-Type': 'application/json'
                        }
                    })
                .then((registerResponse) => {
                    Swal.fire("Register Successfully", "", "success").then(swalres => props.setActiveTab(0))
                })
                .catch((error) => {
                    let errorMessage = null;
                    try {
                        errorMessage = error.response.data.message.errors[0].message;
                    } catch (error) {
                        errorMessage = null
                    };

                    Swal.fire({
                        title: "",
                        text: '' + errorMessage,
                        icon: 'error',
                        confirmButtonText: 'OK'
                    })

                });
        }
    };

    return (
        <main>
            <div className="register-page">
                <div className="input-container">
                    <h4 className="title-h4 text-center">Registration</h4>
                    <form onSubmit={handleRegisterUser}>

                        <div className="form-group">
                            <label htmlFor="first_name">First Name</label>
                            <input type="text" className="input form-control input " name="first_name" defaultValue required autoComplete="first_name" autofocus placeholder="First Name"
                                value={firstName}
                                onChange={(event) => setFirstName(event.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="last_name">Last Name</label>
                            <input type="text" className="input form-control " name="last_name" defaultValue required autoComplete="last_name" autofocus placeholder="Last Name"
                                value={lastName}
                                onChange={(event) => setLastName(event.target.value)} />
                        </div>
                        <div id="working_div" style={{ display: 'none' }} className="form-group">
                            <label htmlFor="first_name">Current Working Status</label>
                            <select className="input form-control input " name="working_status" id>
                                <option value="working">Working</option>
                                <option value="not_working">Not Working</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="input form-control " placeholder="Email Address"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" className="input form-control " name="password" required autoComplete="new-password" placeholder="Password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password-confirm">Confirm Password</label>
                            <input type="password" className="input form-control" required autoComplete="new-password" placeholder="Confirm Password"
                                value={cnfrmPass}
                                onChange={(event) => setCnfrmPass(event.target.value)} />
                        </div>
                        <Link className="forget mb-2" to="/login">
                            Already have an account?
        </Link>
                        <button type="button" className="blue-btn" name="expert" style={{ backgroundColor: role === "expert" ? "#2BACFC" : "#DBE6EC", color: role === "expert" ? "#fff" : "#929292" }}
                            onClick={handleRegisterUser}>
                            Register
        </button>
                    </form>
                </div>
            </div>
        </main>

    )
}

export default Register
