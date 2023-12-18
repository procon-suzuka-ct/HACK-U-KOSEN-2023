import {GoogleAuthProvider, signInWithPopup, User} from 'firebase/auth'
import {CollectionReference, DocumentData} from 'firebase/firestore'
import {auth} from '../firebase'

export class AppUser {
  static uid = '';
  static dbRef = CollectionReference<DocumentData>;
  user?: User;
  name = '';
  email = '';

  constructor(user?: User) {
    this.user = user;
    if (user) {
      AppUser.uid = user.uid;
      this.name = user.displayName || '';
      this.email = user.email || '';
    }
  }

  static async login() {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(userCredential);
    if (!credential) {
      throw new Error('Failed to login');
    }
    const user = userCredential.user;
    if (!user) {
      throw new Error('Failed to login');
    }
    return new AppUser(user);
  }
}
