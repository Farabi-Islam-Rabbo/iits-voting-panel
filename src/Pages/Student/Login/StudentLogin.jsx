import React from 'react'
import './StudentLogin.css'
import { Link } from "react-router-dom";
const StudentLogin = () => {
  return (
    <div className='body'> 
     <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true" />

			<div className="signup">
				<form>
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="User name" required="" />
					<input type="email" name="email" placeholder="Email" required="" />
					<input type="password" name="pswd" placeholder="Password" required="" />
					<button>Sign up</button>
				</form>
			</div>

			<div className="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required="" />
					<input type="password" name="pswd" placeholder="Password" required="" />
                    <Link to="/student-home"><button>Login</button></Link>
					
				</form>
			</div>
	</div>
    </div>
  )
}

export default StudentLogin

