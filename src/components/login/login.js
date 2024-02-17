import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import image123 from './image.jpg'
import './login.css'
function Login() {

  const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:4000/admin/login";
			const { data: res } = await axios.post(url, data);
      console.log(res.data,"data logvyufrvuyryukvruykv")
			localStorage.setItem("token", res.data);
			window.location = "/dashboard";
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

  return (
    
<>
  <meta charSet="UTF-8" />
  <title>Simple Login Form Example</title>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Rubik:400,700"
  />
  <link rel="stylesheet" href="./style.css" />
  {/* partial:index.partial.html */}
  <div className="login-form">
    <form>
      <h1>Login</h1>
      <div className="content">
        <div className="input-field">
          <input type="email" placeholder="Email" autoComplete="nope" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Password"
            autoComplete="new-password"
          />
        </div>
        <a href="#" className="link">
          Forgot Your Password?
        </a>
      </div>
      <div className="action">
        <button>Register</button>
        <button>Sign in</button>
      </div>
    </form>
  </div>
  {/* partial */}
</>
   

  );
}

export default Login;