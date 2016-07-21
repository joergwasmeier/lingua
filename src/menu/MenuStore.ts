import {model} from "../common/AppModel";
/**
 * Created by creativecode on 20.04.16.
 */

export default class MenuStore {
  constructor( ) {
    if (!model.menuStore) model.menuStore = this;
  }
}