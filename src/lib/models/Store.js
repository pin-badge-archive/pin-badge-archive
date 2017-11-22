import { observable } from "mobx";
import Entity from "./Entity";

class Store extends Entity {
  @observable entities = {};
}

export default Store;
