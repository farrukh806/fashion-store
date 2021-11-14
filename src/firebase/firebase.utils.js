import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCK7HjnyBhoDwepsgzuGCGrqzdqIvImuJU',
	authDomain: 'fashion-store-2c642.firebaseapp.com',
	projectId: 'fashion-store-2c642',
	storageBucket: 'fashion-store-2c642.appspot.com',
	messagingSenderId: '809182059373',
	appId: '1:809182059373:web:68036b1081ae65f0b31864'
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
