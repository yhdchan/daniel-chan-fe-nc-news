import { Link, useNavigate } from "react-router-dom";

const Nav = ({ loggedInUser, setLoggedInUser, isLoggedIn }) => {
	let nevigate = useNavigate()
	const handleLogin = () => {
		nevigate(`/users`);
	};

	const handleLogout = () => {
		setLoggedInUser({});
		nevigate('/');
	}

	return (
		<div className="nav">
			<nav className="nav-bar">
				<Link to='/'>Home</Link> |{" "}
				<Link to='/articles'>Articles</Link> |{" "}
				<Link to='/articles/topics'>Topics</Link> |{" "}
				<Link to='/users'>Users</Link> |{" "}
				{isLoggedIn && <Link to={`/${loggedInUser.username}/articles`}>Your Articles</Link>}
			</nav>
				{isLoggedIn ? 
				<section>
					<img 
						id="profile_img" 
						src={loggedInUser.avatar_url}
						alt={`${loggedInUser.username}'s profile`}></img>
					<button className="logout-button" onClick={handleLogout}>Logout</button> 
				</section>
				: <section>
						<button className="login-button" onClick={handleLogin}>Login</button>
					</section>}
		</div>
	)
}

export default Nav;