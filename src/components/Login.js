

import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Grid, Cell} from 'react-mdl';
class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};

		this.update = this.update.bind(this);

		this.displayLogin = this.displayLogin.bind(this);
	}

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	displayLogin(e) {
		e.preventDefault();
		console.log('You are logged in');
		console.log(this.state);
		this.setState({
			email: '',
			password: ''
		});
	}

	render() {
		return (
           
            <Grid className="login">
			<Cell col={12}>
				<form onSubmit={this.displayLogin}>
					<i class="fa fa-lock" style={{fontSize:'80px'}} aria-hidden="true"></i>
					<div className="username">
						<input
							type="text"
							placeholder="Username..."
							value={this.state.email}
							onChange={this.update}
							name="email"
						/>
					</div>

					<div className="password">
						<input
						    
							type="password"
							placeholder="Password..."
							value={this.state.password}
							onChange={this.update}
							name="password"
						/>
					</div>
                    <Link to="/privateArea">
					<input style={{backgroundColor: "#944e03", color: 'white'}} type="submit" value="Login" />
					</Link>
				</form>

                </Cell>
            </Grid>
           
		);
	}
}

export default Login;

