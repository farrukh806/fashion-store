import React, { Component } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './SignIn.scss';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = { email: '', password: '' };
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		const { email, password } = this.state;
		try {
			await signInWithEmailAndPassword(auth, email, password);
			this.setState({ email: '', password: '' });
		} catch (error) {
			alert('Email or password is incorrect');
			return;
		}
	};

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	render() {
		return (
			<div className='sign-in'>
				<h2 className='title'>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type='email'
						name='email'
						label='Email'
						value={this.state.email}
						required
						handleChange={this.handleChange}
					/>
					<FormInput
						type='password'
						name='password'
						label='Password'
						value={this.state.password}
						required
						handleChange={this.handleChange}
					/>
					<div className='buttons'>
						<CustomButton type='submit' value='Submit Form'>
							SIGN IN
						</CustomButton>
					</div>
				</form>
				<div className='buttons'>
					<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
						SIGN IN WITH GOOGLE
					</CustomButton>
				</div>
			</div>
		);
	}
}

export default SignIn;
