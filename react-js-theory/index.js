// "use strict"

// class Clock extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { date: new Date() };
// 	}
// 	componentDidMount() {
// 		this.timerID = setInterval(() => { this.tick(), 1000 });
// 	}
// 	componentWillUnmount() {
// 		clearInterval(this.timerID);
// 	}
// 	tick() {
// 		this.setState({date: new Date()});
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<h1>Hello, world!</h1>
// 				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
// 			</div>
// 		);
// 	}
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Clock />);





// function FormattedDate(props) {
// 	return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
// }

// class Clock extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { date: new Date() };
// 	}

// 	componentDidMount() {
// 		this.timerID = setInterval(
// 			() => this.tick(),
// 			1000
// 		);
// 	}

// 	componentWillUnmount() {
// 		clearInterval(this.timerID);
// 	}

// 	tick() {
// 		this.setState({
// 			date: new Date()
// 		});
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<h1>Hello, world!</h1>
// 				<FormattedDate date={this.state.date} />
// 			</div>
// 		);
// 	}
// }

// function App() {
// 	return (
// 		<div>
// 			<Clock />
// 			<Clock />
// 			<Clock />
// 		</div>
// 	);
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);








// class Toggle extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { isToggleOn: true };
// 		// Эта привязка обязательна для работы `this` в колбэке.
// 		this.handleClick = this.handleClick.bind(this);
// 	}

// 	handleClick() {
// 		this.setState(prevState => ({
// 			isToggleOn: !prevState.isToggleOn
// 		}));
// 	}

// 	render() {
// 		return (
// 			<button onClick={this.handleClick}>
// 				{this.state.isToggleOn ? 'Button turned on' : 'Button turned off'}
// 			</button>
// 		);
// 	}
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Toggle />);






// function UserGreeting(props) {
// 	return (<h1>Welcome back, user!</h1>);
// }

// function GuestGreeting(props) {
// 	return (<h1>Hello there, guest</h1>);
// }

// function Greeting(props) {
// 	const isLoggedIn = props.isLoggedIn;
// 	if (isLoggedIn) {
// 		return <UserGreeting />
// 	}
// 	return <GuestGreeting />
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Greeting isLoggedIn={true} />);


function LoginButton(props) {
	return (
		<button onClick={props.onClick}>Log in</button>
	);
}

function LogoutButton(props) {
	return (
		<button onClick={props.onClick}>Log out</button>
	);
}