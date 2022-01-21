import React, { useState } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './SignIn.scss';

const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await signInWithEmailAndPassword(auth, email, password);
			setEmail('');
			setPassword('');
		} catch (error) {
			alert('Email or password is incorrect');
			return;
		}
	};

	return (
		<div className='sign-in'>
			<h2 className='title'>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					type='email'
					name='email'
					label='Email'
					value={email}
					required
					handleChange={(event) => setEmail(event.target.value)}
				/>
				<FormInput
					type='password'
					name='password'
					label='Password'
					value={password}
					required
					handleChange={(event) => setPassword(event.target.value)}
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
};

export default SignIn;
