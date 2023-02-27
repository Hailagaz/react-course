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

// const root1 = ReactDOM.createRoot(document.getElementById('root1'));
// root1.render(<Clock />);





function FormattedDate(props) {
	return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date() };
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	render() {
		return (
			<div>
				<h1>Timer</h1>
				<FormattedDate date={this.state.date} />
			</div>
		);
	}
}

function App() {
	return (
		<div>
			<Clock />
			<Clock />
			<Clock />
		</div>
	);
}

const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(<App />);








class Toggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isToggleOn: true };
		// Эта привязка обязательна для работы `this` в колбэке.
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}

	render() {
		return (
			<button onClick={this.handleClick}>
				{this.state.isToggleOn ? 'Button turned on' : 'Button turned off'}
			</button>
		);
	}
}

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(<Toggle />);






function UserGreeting(props) {
	return (<h1>Welcome back, user!</h1>);
}

function GuestGreeting(props) {
	return (<h1>Hello there, guest</h1>);
}

function Greeting(props) {
	const isLoggedIn = props.isLoggedIn;
	if (isLoggedIn) {
		return <UserGreeting />
	}
	return <GuestGreeting />
}

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

class LoginControl extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.state = { isLoggedIn: false };
	}

	handleLoginClick() {
		this.setState({isLoggedIn: true});
	}

	handleLogoutClick() {
		this.setState({ isLoggedIn: false });
	}
	render() {
		const isLoggedIn = this.state.isLoggedIn;
		let button;
		if (isLoggedIn) {
			button = <LogoutButton onClick={this.handleLogoutClick} />
		} else {
			button = <LoginButton onClick={this.handleLoginClick} />
		}
		return (
			<div>
				<Greeting isLoggedIn={isLoggedIn} />
				{button}
			</div>
		);
	}
}

const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(<LoginControl />);






function MailBox(props) {
	const unreadMessages = props.unreadMessages;
	return (
		<div>
			<h1>Hello!</h1>
			{unreadMessages.length > 0 &&
				<h2>You have {unreadMessages.length} unread messages</h2>
			}
		</div>
	);
}

const messages = ['React', 'Learn React', 'Hard learn React'];

const root4 = ReactDOM.createRoot(document.getElementById('root4'));
root4.render(<MailBox unreadMessages={messages} />);






function WarningBanner(props) {
	if (!props.warn) return null;
	return (
		<div className="warning">
			<h1>Attention. It is warning!</h1>
		</div>
	);
}

class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = { showWarning: true };
		this.handleToggleClick = this.handleToggleClick.bind(this);
	}

	handleToggleClick() {
		this.setState(state => ({
			showWarning: !state.showWarning
		}));
	}
	render() {
		return (
			<div>
				<WarningBanner warn={this.state.showWarning} />
				<button onClick={this.handleToggleClick}>
					{this.state.showWarning ? 'Hide' : 'Open'}
				</button>
			</div>
		);
	};
}

const root5 = ReactDOM.createRoot(document.getElementById('root5'));
root5.render(<Page />);






function NumberList(props) {
	const numbers = props.numbers;
	const listItems = numbers.map((number) =>
		<li key={number.toString()}>
			{number}
		</li>
	);
	return (
		<ul>{listItems}</ul>
	);
}

const numbers = [1, 2, 3, 4, 5];
const root6 = ReactDOM.createRoot(document.getElementById('root6'));
root6.render(<NumberList numbers={numbers} />);