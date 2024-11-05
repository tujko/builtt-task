import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logInCustomer } from "../redux/customerSlice";
import { useEffect } from "react";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    let loggedIn = useSelector((state) => state.customer.loggedIn);
    if (loggedIn) {
        useEffect(() => {
            navigate("/list");
        });
    }

    function onSubmitLoginCustomer(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        // One Test Customer's Credentials
        let userEmail = "example@test.com";
        let userPasw = "test";

        // Customer loggin verification
        if (userEmail === formJson.email && userPasw === formJson.password) {
            // Customer logged in
            dispatch(logInCustomer());
            navigate("/list");
        }
    };
    return <>
        <div className="login">
            <div className="login-wrapper">
                <h3 className="font-bold">Prijavi se na svoj nalog</h3>
                <form onSubmit={onSubmitLoginCustomer} className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="email"><span className="input-label">E-mail adresa</span></label>
                        <input type="email" name="email" placeholder="Upišite e-mail"/>
                    </div>
                    <div className="flex flex-col mb-16">
                        <label htmlFor="password"><span className="input-label">Šifra</span></label>
                        <input type="password" name="password" placeholder="Upišite šifru" />
                    </div>
                    <button className="btn" type="submit">Prijavi se na nalog</button>
                </form>
            </div>
        </div>
    </>
}

export default Login;