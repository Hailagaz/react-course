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

class Welcome extends React.Component {
	render() {
		return <h1>Test hello, {this.props.name}</h1>;
	}
}

function App() {
	return (
		<div className="App">
			<h1>hello, {formatName(user2)}</h1>
			{elem1}
			{elem2}
			<Welcome/>
		</div>
	);
}

export default App;
