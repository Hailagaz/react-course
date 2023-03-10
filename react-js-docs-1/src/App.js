import './App.css';
// import React from 'react';

// const user2 = {
// 	firstName: 'Olex',
// 	lastName: 'Chirko',
// }

// // const elem0 = <img src={user.avatarUrl}></img>;
// const elem1 = <a href="https://www.reactjs.org">link here</a>
// const elem2 = (
// 	<div>
// 		<h2>Some text to explain</h2>
// 		<p>Lorem ipsum dolorem</p>
// 	</div>);


// function formatName(props) {
// 	return props.firstName + " " + props.lastName;
// }

// function Welcome(props) {
// 	return <h3>Welcome, {props.name}</h3>
// }


// function Avatar(props) {
// 	return (
// 		<img
// 			src="props.user.avatarUrl"
// 			alt="props.user.name"
// 		></img>
// 	);
// }

// function UserInfo(props) {
// 	return (
// 		<div className="UserInfo">
// 			<Avatar user={props.user} />
// 			<div className="UserInfo-name">
// 				{props.user.name}
// 			</div>
// 		</div>
// 	);
// }

// function Comment(props) {
// 	return (
// 		<div className="Comment">
// 			<UserInfo user={props.author} />
// 			<div className="Comment-text">
// 				{props.text}
// 			</div>
// 			<div className="Comment-date">
// 				{formatDate(props.date)}
// 			</div>
// 		</div>
// 	);
// }

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date() };
	}
	componentDidMount() {
		this.timerID = setInterval(() => { this.tick(), 1000 });
	}
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	tick() {
		this.setState({ date: new Date() });
	}
	render() {
		return (
			<div>
				<h1>Hello, world!</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		);
	}
}


function App() {
	return (
		<div className="App">
			{
				<div>
					<Clock />
				</div>


				/* <h1>hello, {formatName(user2)}</h1>
				{elem1}
				{elem2}
				<Welcome name="Alice" />
				<Welcome name="Bruce" />
				<Welcome name="Jack" />
				<Comment /> */
			}
		</div>
	);
}

export default App;
