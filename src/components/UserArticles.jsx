import { useState } from "react";
import DisplayUserArticles from "./DisplayUserArticles";
import Sort from "./Sort";

const UserArticles = ({ loggedInUser }) => {
	const [sortState, setSortState] = useState(null);
  const [orderState, setOrderState] =useState(null);

	return (
		<main>
			<Sort setSortState={setSortState} setOrderState={setOrderState}/>
			<DisplayUserArticles loggedInUser={loggedInUser} sortState={sortState} orderState={orderState}/>
		</main>
	)
}

export default UserArticles;