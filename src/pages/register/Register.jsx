import { Link } from 'react-router-dom';
import './register.scss';

const Register = () => {
	return (
		<div className="register">
			<div className="card">
				<div className="left">
					<h1>Lema Social.</h1>
					<p>
						It is a long established fact that a reader will of a page when looking at its layout.
					</p>
					<span>Do you have an account ? </span>
					<Link to="/login">
						<button >Login</button>
					</Link>

				</div>
				<div className="right">
					<h1>Register</h1>
					<form><input type="text" name="username" id="" placeholder='username' />
						<input type="email" name="Email" id="" placeholder='email@ex.com' />
						<input type="text" name="name" id="" placeholder='name' />
						<input type="password" name="password" id="" placeholder='Passowrd' />

						<button type="submit">Register</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Register