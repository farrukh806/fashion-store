import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyB1X7tItqbfeIsPR7mLsLfIKPiBWggxORk',
	authDomain: 'fashion-store-42fd6.firebaseapp.com',
	projectId: 'fashion-store-42fd6',
	storageBucket: 'fashion-store-42fd6.appspot.com',
	messagingSenderId: '474558687289',
	appId: '1:474558687289:web:9241ca158baee91f7705e8',
	measurementId: 'G-QJT6ZKPR8Y'
};
initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
export const db = getFirestore();

export const saveUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	// Get all data from the db
	// const querySnapshot = await getDocs(collection(db, 'users'));

	// doc(dbRef, collectionName, docId)
	const docRef = doc(db, 'users', userAuth.uid); // Get a particular piece of information
	const querySnapshot = await getDoc(docRef);

	if (!querySnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await setDoc(docRef, {
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.error('error creating user', error.message);
		}
	}
	return querySnapshot;
};

export const auth = getAuth();

export const signInWithGoogle = () => {
	signInWithPopup(auth, provider)
		.then((result) => {
			// const credential = GoogleAuthProvider.credentialFromResult(result);
			// const token = credential.accessToken;
			// The signed-in user info.
			// const user = result.user;
		})
		.catch((error) => {
			console.log(error);
			GoogleAuthProvider.credentialFromError(error);
		});
};
