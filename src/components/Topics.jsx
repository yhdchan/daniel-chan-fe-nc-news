import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../utils/api";

const Topics = () => {
	const [topics, setTopics] =useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		getTopics()
			.then(({ topics }) => {
				setTopics(topics);
				setIsLoading(false);
			})
	},[]);

	if (isLoading) {
		return <p className="loading">Loading ...</p>
	}

	return (
		<main>
			<h3>Topics</h3>
			<ul className="topics-list">
				{topics.map((topic) => {
					return (
						<li key={topic.slug} className='topic-item'>
							<Link to={`/articles/topics/${topic.slug}`}>
								<h4 className="subheader">{topic.slug}</h4>
							</Link>
							<p>{topic.description}</p>
						</li>
					)
				})}

			</ul>
		</main>
	)
}

export default Topics;