const Header = ({loggedInUser, isLoggedIn}) => {
	let greetingName = 'Guest'
	if (isLoggedIn) {
		greetingName = loggedInUser.name.split(' ')[0];
	}

	return (
		<header className="header">
			<h1>Northcoders Newsboard</h1>
			<h2>Welcome {greetingName}!</h2>
		</header>
	)
}

export default Header;