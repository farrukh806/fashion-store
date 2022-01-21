import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { saveUserProfileDocument, auth } from '../../firebase/firebase.utils';

import './SignUp.scss';

const SignUp = () => {
	const [userCredentials, setUserCredentials] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	});

	const handleSubmit = async (event) => {
		event.preventDefault();
		const { displayName, email, password, confirmPassword } =
			userCredentials;
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

			setUserCredentials({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			});
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = (event) => {
		setUserCredentials({ [event.target.name]: event.target.value });
	};
	const { displayName, email, password, confirmPassword } = userCredentials;

	return (
		<div className='sign-up'>
			<h2 className='title'>I do not have an account</h2>
			<span>Sign Up with your email and password</span>
			<form className='sign-up-form' onSubmit={handleSubmit}>
				<FormInput
					type='text'
					name='displayName'
					value={displayName}
					onChange={handleChange}
					label='Display Name'
					required
				/>
				<FormInput
					type='email'
					name='email'
					value={email}
					onChange={handleChange}
					label='Email'
					required
				/>
				<FormInput
					type='password'
					name='password'
					value={password}
					onChange={handleChange}
					label='Password'
					required
				/>
				<FormInput
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					onChange={handleChange}
					label='Confirm Password'
					required
				/>
				<CustomButton type='submit'>SIGN UP</CustomButton>
			</form>
		</div>
	);
};

export default SignUp;
