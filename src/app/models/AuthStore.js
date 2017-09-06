import { auth as Firebase, User } from "firebase/app";
import mobx, { action, computed, observable, runInAction } from "mobx";

export default class AuthStore {
  user;
  idToken;
  auth;
  provider;

  constructor(auth, provider) {
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
    return this.idToken;
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
