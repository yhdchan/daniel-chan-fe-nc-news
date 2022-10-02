import { useState } from "react";
import { useParams } from "react-router-dom";
import DisplayTopicArticles from "./DisplayTopicArticles";
import Sort from "./Sort";

const SingleTopic = () => {
	const { topic } = useParams();
	const [sortState, setSortState] = useState(null);
  const [orderState, setOrderState] =useState(null);

	return (
		<main>
			<Sort setSortState={setSortState} setOrderState={setOrderState}/>
			<DisplayTopicArticles topic={topic} sortState={sortState} orderState={orderState}/>
		</main>
	)
}

export default SingleTopic;