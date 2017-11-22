import { action, autorun, extendObservable, observe } from "mobx";

export default class Form {

  fields = {};
  rules = {};
  errors = {};
  touched = {};

  constructor(defaultValues) {
    this.errors = {};
    this.touched = {};

    for (const key of Object.keys(this.fields)) {
      extendObservable(this, { [key]: undefined });
      extendObservable(this.errors, { [key]: undefined });
      extendObservable(this.touched, { [key]: false });
      autorun(() => {
        this.validateField(key).then(x => this.updateError(key, x));
      });
    }

    if (!!defaultValues) {
      this.update(defaultValues);
    }

    for (const key of Object.keys(this.fields)) {
      observe(this, key, () => this.touch(key));
    }
  }

  validate() {
    const promises = [];
    for (const key of Object.keys(this.fields)) {
      this.touch(key);
      promises.push(
        this.validateField(key).then(x => this.updateError(key, x))
      );
    }
    return Promise.all(promises).then(() => {
      for (const key of Object.keys(this.fields)) {
        if (this.errors[key] !== undefined) {
          return false;
        }
      }
      return true;
    });
  }

  @action
  update(changes) {
    for (const key of Object.keys(changes)) {
      if (this.fields[key] === undefined) {
        throw new Error(`Cannot find the key in the form: ${key}`);
      }
      this[key] = changes[key];
    }
  }

  validateField() {
    const promises = [];
    if (this.rules && this.rules[key]) {
      const rules = this.rules[key];
      for (const rule of rules) {
        promises.push(rule(this[key]));
      }
    }
    return Promise.all(promises).then(values => {
      for (const v of values) {
        if (v !== undefined) {
          return v;
        }
      }
      return undefined;
    });
  }

  @action.bound
  updateError() {
    this.errors[key] = error;
  }

  @action.bound
  touch() {
    this.touched[key] = true;
  }
}
