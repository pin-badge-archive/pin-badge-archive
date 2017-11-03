import { auth as Firebase, User } from "firebase/app";
import mobx, { action, computed, observable, runInAction } from "mobx";

export default class AuthStore {
  @observable user;
  @observable idToken;

  constructor(auth, provider) {
    this.auth = auth;
    this.provider = provider;
    this.auth.onIdTokenChanged(this.updateUser);
  }

  @computed
  get isLoggedIn() {
    return !!this.user;
  }

  @computed
  get displayName() {
    return this.isLoggedIn ? this.user.displayName : undefined;
  }

  @computed
  get email() {
    return this.isLoggedIn ? this.user.email : undefined;
  }

  @computed
  get token() {
    return `Bearer ${this.idToken}`;
  }

  @action.bound
  login() {
    this.auth.signInWithPopup(this.provider);
  }

  @action.bound
  logout() {
    this.auth.signOut().then(() => this.updateUser(undefined));
  }

  @action.bound
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
