import './userRegister.css'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";



function Register() {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://127.0.0.1:4000/admin/register";
            const { data: res } = await axios.post(url, data);
            navigate("/login");
            console.log(res.message);
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };

    return(

<form onSubmit={handleSubmit}>
  <div className="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr />
    <label htmlFor="email">
      <b>Email</b>
    </label>
    <input
      type="text"
      placeholder="Enter Email"
      name="email"
      id="email"
      required=""
    />
    <label htmlFor="psw">
      <b>Password</b>
    </label>
    <input
      type="password"
      placeholder="Enter Password"
      name="psw"
      id="psw"
      required=""
    />
    <label htmlFor="psw-repeat">
      <b>Repeat Password</b>
    </label>
    <input
      type="password"
      placeholder="Repeat Password"
      name="psw-repeat"
      id="psw-repeat"
      required=""
    />
    <hr />
    <p>
      By creating an account you agree to our{" "}
      <a href="#">Terms &amp; Privacy</a>.
    </p>
    <button type="submit" className="registerbtn">
      Register
    </button>
  </div>
  
  <div className="container signin">
    <p>
      Already have an account? <a href="#">Sign in</a>.
    </p>
  </div>
</form>


    );
}
export default Register;