import { Link } from "react-router-dom";

const Nav = ({loggedInUser}) => {
	return (
		<div>
			<nav className="nav-bar">
				<Link to='/'>Home</Link> |{" "}
				<Link to='/articles/topics'>Topics</Link> |{" "}
				<Link to='/users'>Users</Link> |{" "}
				<Link to={`/${loggedInUser.username}/articles`}>Your Articles</Link> |{" "}
				<Link to={`/${loggedInUser.username}/comments`}>Your Comments</Link>
			</nav>
		</div>
	)
}

export default Nav;