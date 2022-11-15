import { Link } from 'react-router-dom';
import './login.scss';

const Login = () => {
	return (
		<div className="login">
			<div className="card">
				<div className="left">
					<h1>hello world.</h1>
					<p>
						It is a long established fact that a reader will of a page when looking at its layout.
					</p>
					<span>Dont have an account ? </span>
					<Link to='/register'>
					  	<button>register</button>
					</Link>
				
				</div>
				<div className="right">
					<h1>login</h1>
					<form>
						<input type="text" name="username" id="" placeholder='username' />
						<input type="password" name="password" id="" placeholder='Passowrd' />
						<button type="submit">login</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login