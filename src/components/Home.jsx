import { useNavigate } from "react-router-dom";

const Home = () => {
	let navigate = useNavigate();
	const handleClick = () => {
		navigate(`/articles`);
	}

	return (
		<main className="home_page">
			<img src="https://cdn.pixabay.com/photo/2015/10/05/18/10/newspaper-973049_1280.jpg" alt="news" className="responsive"></img>
			<button className="enter-button" onClick={handleClick}>Enter</button>
		</main>
	)
}

export default Home;