import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/User";
import { getUsers } from "../utils/api";

const Users = () => {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { setLoggedInUser } =useContext(UserContext);

	useEffect(() => {
		setIsLoading(true);
		getUsers()
			.then(({ users }) => {
				setUsers(users);
				setIsLoading(false);
			})
	}, [])

	if (isLoading) {
		return <p className="loading">Loading ...</p>
	}

	return (
		<main>
			<h3>Users</h3>
			<ul className="users-list">
				{users.map((user) => {
					return (
						<li className="user-card" key={user.username}>
							<img 
								src={user.avatar_url} 
								alt={`${user.username}'s icon`} />
							<p>{user.username}</p>
							<button onClick={() => setLoggedInUser(user)}>That's me</button>
						</li>
					)
				})}
			</ul>
		</main>
	)
}

export default Users;