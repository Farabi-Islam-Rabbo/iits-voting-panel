import React, {useState} from 'react'
import './StudentLogin.css'
import { Link, useNavigate } from "react-router-dom";
const StudentLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    console.log("email", email)
    const login = () =>{
        console.log("email", email)
        if(email == "admin" && password == "1234")
            navigate("/student-home")
        else
            alert("Wrong Credential")
    }
  return (
    <div className='body'> 
     <div className="main">  	
        
		<input type="checkbox" id="chk" aria-hidden="true" />

			<div className="signup">
				<form>
                <label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required="" />
					<input type="password" name="pswd" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required="" />
                    <button onClick={login}>Login</button>
                    <Link to="/admin-login" ><h4 style={{textAlign: "center"}}>Admin Login</h4></Link>
					
				</form>
			</div>

			<div className="login">
				<form>
                <label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="User name" onChange={(e)=>setEmail(e.target.value)} required="" />
					<input type="email" name="email" placeholder="Email" required="" />
					<input type="password" name="pswd" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required="" />
					<button>Sign up</button>
					
				</form>
			</div>
	</div>
    </div>
  )
}

export default StudentLogin

