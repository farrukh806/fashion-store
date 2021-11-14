import { Component } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { saveUserProfileDocument, auth } from '../../firebase/firebase.utils';

import './SignUp.scss';

class SignUp extends Component {
	constructor() {
		super();

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;
		if (password.length < 6) {
			alert('Password should have atleast 6 characters');
			return;
		}
		if (password !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}

		try {
			const { user } = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			await saveUserProfileDocument(user, { displayName });

			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			});
		} catch (error) {
			console.error(error);
		}
	};

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		return (
			<div className='sign-up'>
				<h2 className='title'>I do not have an account</h2>
				<span>Sign Up with your email and password</span>
				<form className='sign-up-form' onSubmit={this.handleSubmit}>
					<FormInput
						type='text'
						name='displayName'
						value={this.state.displayName}
						onChange={this.handleChange}
						label='Display Name'
						required
					/>
					<FormInput
						type='email'
						name='email'
						value={this.state.email}
						onChange={this.handleChange}
						label='Email'
						required
					/>
					<FormInput
						type='password'
						name='password'
						value={this.state.password}
						onChange={this.handleChange}
						label='Password'
						required
					/>
					<FormInput
						type='password'
						name='confirmPassword'
						value={this.state.confirmPassword}
						onChange={this.handleChange}
						label='Confirm Password'
						required
					/>
					<CustomButton type='submit'>SIGN UP</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignUp;