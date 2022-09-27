import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<div>
			<nav className="nav-bar">
				<Link to='/'>Home</Link> |{" "}
				<Link to='/articles/topics'>Topics</Link> |{" "}
				<Link to='/users'>Users</Link> |{" "}
				<Link to='/username1/articles'>Your Articles</Link> |{" "}
				<Link to='/username1/comments'>Your Comments</Link>
			</nav>
		</div>
	)
}

export default Nav;