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
		this.setState({ isLoggedIn: true });
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






function ListItem(props) {
	return <li>{props.value}</li>;
}

function NumberList(props) {
	const numbers = props.numbers;
	return (
		<ul>
			{numbers.map((number) =>
				<ListItem
					key={number.toString()}
					value={number} />
			)}
		</ul>
	);
}

const numbers = [1, 2, 3, 4, 5];
const root6 = ReactDOM.createRoot(document.getElementById('root6'));
root6.render(<NumberList numbers={numbers} />);








function Blog(props) {
	const sidebar = (
		<ul>
			{props.posts.map((post) =>
				<li key={post.id}>
					{post.title}
				</li>
			)}
		</ul>
	);
	const content = props.posts.map((post) =>
		<div key={post.id}>
			<h3>{post.title}</h3>
			<p>{post.content}</p>
		</div>
	);
	return (
		<div>
			{sidebar}
			<hr />
			{content}
		</div>
	);
}

const posts = [
	{
		id: 1,
		title: 'Привет, мир',
		content: 'Добро пожаловать в документацию React!'
	},
	{
		id: 2,
		title: 'Установка',
		content: 'React можно установить из npm.'
	}
];

const root7 = ReactDOM.createRoot(document.getElementById('root7'));
root7.render(<Blog posts={posts} />);





// Forms

class NameForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: '' };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		this.setState({value: event.target.value});
	}
	handleSubmit(event) {
		alert('Sent name: ' + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Name:
					<input type="text" value={this.state.value} onChange={this.handleChange}></input>
				</label>
				<input type="submit" value="Send"></input>
			</form>
		);
	}
}

const root8 = ReactDOM.createRoot(document.getElementById('root8'));
root8.render(<NameForm />);








class EssayForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'Please write essay about your favourite DOM element'
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		alert('Essay was sent:' + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Essay:
					<textarea value={this.state.value} onChange={this.handleChange} />
				</label>
				<input type='submit' value='Send'/>
			</form>
		);
	}
}

const root9 = ReactDOM.createRoot(document.getElementById('root9'));
root9.render(<EssayForm/>);