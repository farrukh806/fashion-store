import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/Shop';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/Sign-in-sign-up';
import Header from './components/header/Header';

import { auth, saveUserProfileDocument, db } from './firebase/firebase.utils';
import { onSnapshot, doc } from 'firebase/firestore';

import { setCurrentUser } from './redux/user/user-actions';

import './App.css';

class App extends Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
			// this.setState({ currentUser: user });
			if (user) {
				const userRef = await saveUserProfileDocument(user);
				onSnapshot(doc(db, 'users', userRef.id), (snapshot) => {
					this.props.setCurrentUser({
						id: snapshot.id,
						...snapshot.data()
					});
				});
			} else {
				this.props.setCurrentUser(null);
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/shop' component={ShopPage} />
					<Route
						exact
						path='/signin'
						component={SignInAndSignUpPage}
					/>
				</Switch>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
