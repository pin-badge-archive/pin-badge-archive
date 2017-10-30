import { auth as Firebase, User } from "firebase/app";
import { action, computed, extendObservable, runInAction } from "mobx";

export default class AuthStore {
  constructor(auth, provider) {
    extendObservable(this, {
      user: User,
      idToken: '',
      auth: Firebase.Auth,
      provider: Firebase.AuthProvier,
      isLoggedIn: computed(this.isLoggedIn),
      displayName: computed(this.displayName),
      email: computed(this.email),
      token: computed(this.token),
      login: action.bound(this.login),
      logout: action.bound(this.logout),
      updateUser: action.bound(this.updateUser),
    });
    this.auth = auth;
    this.provider = provider;
    this.auth.onIdTokenChanged(this.updateUser);
  }

  get isLoggedIn() {
    return !!this.user;
  }

  get displayName() {
    return this.isLoggedIn ? this.user.displayName : undefined;
  }

  get email() {
    return this.isLoggedIn ? this.user.email : undefined;
  }

  get token() {
    return `Bearer ${this.idToken}`;
  }

  login() {
    this.auth.signInWithPopup(this.provider);
  }

  logout() {
    this.auth.signOut().then(() => this.updateUser(undefined));
  }

  updateUser(user) {
    this.user = user;
    if (!!user) {
      user.getIdToken().then(idToken => {
        runInAction(() => {
          this.idToken = idToken;
        });
      });
    } else {
      this.idToken = undefined;
    }
  }
}
