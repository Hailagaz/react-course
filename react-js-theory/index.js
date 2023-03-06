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
		this.setState({ value: event.target.value });
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
		this.setState({ value: event.target.value });
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
				<input type='submit' value='Send' />
			</form>
		);
	}
}

const root9 = ReactDOM.createRoot(document.getElementById('root9'));
root9.render(<EssayForm />);








class FlavorForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: 'coconut' };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		alert('Your favourite flavour is: ' + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Choose your favourite flavour:
					<select value={this.state.value} onChange={this.handleChange}>
						<option value="grapefruit">Grapefruit</option>
						<option value="apple">Apple</option>
						<option value="coconut">Coconut</option>
						<option value="orange">Orange</option>
						<option value="mango">Mango</option>
						<option value="lime">Lime</option>
					</select>
				</label>
				<input type="submit" value="Send" />
			</form>
		);
	}
}

const root10 = ReactDOM.createRoot(document.getElementById('root10'));
root10.render(<FlavorForm />);







// Forms - file load - non controlled React-component

// Forms - input

class Reservation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isGoing: true,
			numberOfGuests: 2,
		};

		this.handleInputChange = this.handleInputChange.bind(this);
	}
	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}
	render() {
		return (
			<form>
				<label>
					Will go:
					<input
						name='isGoing'
						type='checkbox'
						checked={this.state.isGoing}
						onChange={this.handleInputChange}
					/>
				</label>
				<br />
				<label>
					Amount of guests:
					<input
						name='numberOfGuests'
						type='number'
						value={this.state.numberOfGuests}
						onChange={this.handleInputChange}
					/>
				</label>

			</form>
		);
	}
}

const root11 = ReactDOM.createRoot(document.getElementById('root11'));
root11.render(<Reservation />);









const scaleNames = {
	c: 'Celsius',
	f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
	return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
	const input = parseFloat(temperature);
	if (Number.isNaN(input)) {
		return '';
	}
	const output = convert(input);
	const rounded = Math.round(output * 1000) / 1000;
	return rounded.toString();
}

function BoilingVerdict(props) {
	if (props.celsius >= 100) {
		return <p>The water will boil.</p>;
	}
	return <p>The water will not boil.</p>;
}

class TemperatureInput extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.onTemperatureChange(e.target.value);
	}

	render() {
		const temperature = this.props.temperature;
		const scale = this.props.scale;
		return (
			<fieldset>
				<legend>Enter temperature in {scaleNames[scale]}:</legend>
				<input value={temperature}
					onChange={this.handleChange} />
			</fieldset>
		);
	}
}

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
		this.state = { temperature: '', scale: 'c' };
	}

	handleCelsiusChange(temperature) {
		this.setState({ scale: 'c', temperature });
	}

	handleFahrenheitChange(temperature) {
		this.setState({ scale: 'f', temperature });
	}

	render() {
		const scale = this.state.scale;
		const temperature = this.state.temperature;
		const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
		const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

		return (
			<div>
				<TemperatureInput
					scale="c"
					temperature={celsius}
					onTemperatureChange={this.handleCelsiusChange} />
				<TemperatureInput
					scale="f"
					temperature={fahrenheit}
					onTemperatureChange={this.handleFahrenheitChange} />
				<BoilingVerdict
					celsius={parseFloat(celsius)} />
			</div>
		);
	}
}

const root12 = ReactDOM.createRoot(document.getElementById('root12'));
root12.render(<Calculator />);












// function FancyBorder(props) {
// 	return (
// 		<div className={'FancyBorder FancyBorder-' + props.color}>
// 			{props.children}
// 		</div>
// 	);
// }

// function WelcomeDialog() {
// 	return (
// 		<FancyBorder color="blue">
// 			<h1 className="Dialog-title">
// 				Welcome
// 			</h1>
// 			<p className="Dialog-message">
// 				Thank you for visiting our spacecraft!
// 			</p>
// 		</FancyBorder>
// 	);
// }

// const root13 = ReactDOM.createRoot(document.getElementById('root13'));
// root13.render(<WelcomeDialog />);











// function Contacts() {
// 	return <div className="Contacts" />;
// }

// function Chat() {
// 	return <div className="Chat" />;
// }

// function SplitPane(props) {
// 	return (
// 		<div className="SplitPane">
// 			<div className="SplitPane-left">
// 				{props.left}
// 			</div>
// 			<div className="SplitPane-right">
// 				{props.right}
// 			</div>
// 		</div>
// 	);
// }

// function App() {
// 	return (
// 		<SplitPane 
// 			left={<Contacts />}
// 			right={<Chat/>}
// 		/>

// 	);
// }

// const root14 = ReactDOM.createRoot(document.getElementById('root14'));
// root14.render(<App />);






function FancyBorder(props) {
	return (
		<div className={'FancyBorder FancyBorder-' + props.color}>
			{props.children}
		</div>
	);
}

function Dialog(props) {
	return (
		<FancyBorder color='blue'>
			<h1 className='Dialog-title'>
				{props.title}
			</h1>
			<p className='Dialog-message'>
				{props.message}
			</p>
		</FancyBorder>
	);
}

function WelcomeDialog() {
	return (
		<Dialog
			title='Welcome'
			message='Thank you for visiting'
		/>
	);
}

const root13 = ReactDOM.createRoot(document.getElementById('root13'));
root13.render(<WelcomeDialog />);











function Dialog(props) {
	return (
		<FancyBorder>
			<h1 className="Dialog-title">
				{props.title}
			</h1>
			<p className="Dialog-message">
				{props.message}
			</p>
			{props.children}
		</FancyBorder>
	);
}

class SignUpDialog extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSignUp = this.handleSignUp.bind(this);
		this.state = { login: '' };
	}

	render() {
		return (
			<Dialog
				title="Test program"
				message="How can we call you?">
				<input
					value={this.state.login}
					onChange={this.handleChange}
				/>
				<button
					onClick={this.handleSignUp}>
					Sign me up
				</button>
			</Dialog>
		);
	}

	handleChange(event) {
		this.setState({ login: event.target.value });
	}

	handleSignUp() {
		alert(`Welcome to the program, ${this.state.login}`);
	}
}

const root14 = ReactDOM.createRoot(document.getElementById('root14'));
root14.render(<SignUpDialog />);









//----------------- props vs state
class Welcome extends React.Component {
	render() {
		return <h1>Hello {this.props.name}</h1>;
	}
}

Welcome.defaultProps = {
	name: "world",
};

const root15 = ReactDOM.createRoot(document.getElementById('root15'));
root15.render(<Welcome />);


class Button extends React.Component {
	constructor() {
		super();
		this.state = {
			count: 0,
		};
	}

	updateCount() {
		this.setState((prevState, props) => {
			return { count: prevState.count + 1 }
		});
	}

	render() {
		return (<button
			onClick={() => this.updateCount()}
		>
			Clicked {this.state.count} times
		</button>);
	}
}

const root16 = ReactDOM.createRoot(document.getElementById('root16'));
root16.render(<Button />);

//-----------------










class ProductCategoryRow extends React.Component {
	render() {
		const category = this.props.category;
		return (
			<tr>
				<th colSpan="2">
					{category}
				</th>
			</tr>
		);
	}
}

class ProductRow extends React.Component {
	render() {
		const product = this.props.product;
		const name = product.stocked ?
			product.name :
			<span style={{ color: 'red' }}>
				{product.name}
			</span>;

		return (
			<tr>
				<td>{name}</td>
				<td>{product.price}</td>
			</tr>
		);
	}
}

class ProductTable extends React.Component {
	render() {
		const filterText = this.props.filterText;
		const inStockOnly = this.props.inStockOnly;

		const rows = [];
		let lastCategory = null;

		this.props.products.forEach((product) => {
			if (product.name.indexOf(filterText) === -1) {
				return;
			}
			if (inStockOnly && !product.stocked) {
				return;
			}
			if (product.category !== lastCategory) {
				rows.push(
					<ProductCategoryRow
						category={product.category}
						key={product.category} />
				);
			}
			rows.push(
				<ProductRow
					product={product}
					key={product.name}
				/>
			);
			lastCategory = product.category;
		});

		return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		);
	}
}

class SearchBar extends React.Component {
	render() {
		const filterText = this.props.filterText;
		const inStockOnly = this.props.inStockOnly;

		return (
			<form>
				<input
					type="text"
					placeholder="Search..."
					value={filterText} />
				<p>
					<input
						type="checkbox"
						checked={inStockOnly} />
					{' '}
					Only show products in stock
				</p>
			</form>
		);
	}
}

class FilterableProductTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filterText: '',
			inStockOnly: false
		};
	}

	render() {
		return (
			<div>
				<SearchBar
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly}
				/>
				<ProductTable
					products={this.props.products}
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly}
				/>
			</div>
		);
	}
}


const PRODUCTS = [
	{ category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
	{ category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
	{ category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
	{ category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
	{ category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
	{ category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

const root17 = ReactDOM.createRoot(document.getElementById('root17'));
root17.render(<FilterableProductTable products={PRODUCTS} />);
