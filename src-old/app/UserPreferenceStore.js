import { extendObservable } from "mobx";

import AuthStore from "./AuthStore";

class UserPreferenceStore {
  constructor(authStore) {
    extendObservable(this, {
      authStore: AuthStore,
    });
    this.authStore = authStore;
  }

  set(key, value) {
    if (this.authStore.isLoggedIn) {
      localStorage.setItem(
        `${this.authStore.email}.${key}`,
        JSON.stringify(value)
      );
    } else {
      throw new Error("User preferences cannot be stored");
    }
  }

  get(key) {
    if (this.authStore.isLoggedIn) {
      return JSON.parse(localStorage.getItem(`${this.authStore.email}.${key}`));
    } else {
      throw new Error("User preferences are not available");
    }
  }
}

export default UserPreferenceStore;
