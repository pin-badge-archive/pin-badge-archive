import { auth as Firebase, User } from "firebase/app";
import firebase from "firebase";
import mobx, { action, computed, observable, runInAction } from "mobx";
import { error } from "util";

export default class AuthStore {
  @observable user;
  @observable idToken;
  @observable provider;

  constructor(auth, provider) {
    this.auth = auth;
    this.auth.onIdTokenChanged(this.updateUser);
  }

  @computed
  get isLoggedIn() {
    return !!this.user;
  }

  @computed
  get displayName() {
    return this.isLoggedIn ? (this.user.displayName || this.user.email) : undefined;
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
  emailSignUp({ email, password }) {
    this.auth.createUserWithEmailAndPassword(email, password)
      .catch(error => {
        const { code, message } = error;
        console.error(error);
        alert(`[${code}] ${message}`);
      });
  }

  @action.bound
  emailLogin({ email, password }) {
    this.auth.signInWithEmailAndPassword(email, password)
      .catch(error => {
        const { code, message } = error;
        console.error(error);
        alert(`[${code}] ${message}`);
      });
  }

  @action.bound
  googleLogin() {
    this.provider = new firebase.auth.GoogleAuthProvider();
    this.login();
  }

  @action.bound
  twitterLogin() {
    this.provider = new firebase.auth.TwitterAuthProvider();
    this.login();
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
