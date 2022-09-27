import { useContext } from "react";
import { UserContext } from "../contexts/User";

const Header = () => {
	const { loggedInUser } = useContext(UserContext);
	const firstName = loggedInUser.name.split(' ')[0];

	return (
		<header className="header">
			<h1>Northcoders Newsboard</h1>
			<h2>Welcome {firstName}!</h2>
		</header>
	)
}

export default Header;