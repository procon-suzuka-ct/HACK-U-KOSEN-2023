import {User} from 'firebase/auth'
import {CollectionReference, DocumentData} from 'firebase/firestore'

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
}
