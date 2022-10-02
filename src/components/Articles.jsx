import { useState } from "react";
import DisplayArticles from "./DisplayArticles";
import Sort from "./Sort";

const Articles = () => {
	const [sortState, setSortState] = useState(null);
  const [orderState, setOrderState] =useState(null);

	return (
		<main>
			<Sort setSortState={setSortState} setOrderState={setOrderState}/>
			<DisplayArticles sortState={sortState} orderState={orderState}/>
		</main>
	)
}

export default Articles;