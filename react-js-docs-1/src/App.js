import './App.css';


const user2 = {
	firstName: 'Olex',
	lastName: 'Chirko',
}

// const elem0 = <img src={user.avatarUrl}></img>;
const elem1 = <a href="https://www.reactjs.org">link here</a>
const elem2 = (
	<div>
		<h2>Some text to explain</h2>
		<p>Lorem ipsum dolorem</p>
	</div>);


function formatName(props) {
	return props.firstName + " " + props.lastName;
}

function Welcome(props) {
	return <h3>Welcome, {props.name}</h3>
}


function Avatar(props) {
	return (
		<img
			src="props.user.avatarUrl"
			alt="props.user.name"
		></img>
	);
}

function Comment(props) {
	return (
		<div className="Comment">
			<div className="UserInfo">
				<Avatar user="props.author"/>
				<div className="UserInfo-name">
					{props.author.name}
				</div>
			</div>
			<div className="Comment-text">
				{props.text}
			</div>
			<div className="Comment-date">
				{formatDate(props.date)}
			</div>
		</div>
	);
}


function App() {
	return (
		<div className="App">
			<h1>hello, {formatName(user2)}</h1>
			{elem1}
			{elem2}
			<Welcome name="Alice" />
			<Welcome name="Bruce" />
			<Welcome name="Jack" />



		</div>
	);
}

export default App;
