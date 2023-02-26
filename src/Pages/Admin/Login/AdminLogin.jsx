import React, {useState} from 'react'
import './AdminLogin.css'
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    console.log("email", email)
    const login = () =>{
        console.log("email", email)
        if(email == "admin" && password == "1234")
            navigate("/admin-home")
        else
            alert("Wrong Credential")
    }
  return (
    <div className='body'> 
     <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true" />

			<div className="signup">
				<form>
                <label for="chk" aria-hidden="true">Admin Login</label>
					<input type="email" name="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required="" />
					<input type="password" name="pswd" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required="" />
                    <button onClick={login}>Login</button>
                    <Link to="/student-login" ><h4 style={{textAlign: "center"}}>Student Login</h4></Link>
					
				</form>
			</div>

			{/* <div className="login">
				<form>
                <label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="User name" onChange={(e)=>setEmail(e.target.value)} required="" />
					<input type="email" name="email" placeholder="Email" required="" />
					<input type="password" name="pswd" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required="" />
					<button>Sign up</button>
					
				</form>
			</div> */}
	</div>
    </div>
  )
}

export default AdminLogin

