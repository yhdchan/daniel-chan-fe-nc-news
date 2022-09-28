const Header = ({loggedInUser}) => {
	const firstName = loggedInUser.name.split(' ')[0];

	return (
		<header className="header">
			<h1>Northcoders Newsboard</h1>
			<h2>Welcome {firstName}!</h2>
		</header>
	)
}

export default Header;