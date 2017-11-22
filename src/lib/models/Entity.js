import { action, observable } from "mobx";

class Entity {
  id;
  @observable source;

  constructor(id, source) {
    this.id = id;
    this.source = source;
  }

  @action.bound
  update(source) {
    this.source = source;
  }
}

export default Entity;
