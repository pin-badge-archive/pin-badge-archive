import { observable } from "mobx";
import Entity from "./Entity";

abstract class Store extends Entity {
  @observable protected entities = {};
}

export default Store;
