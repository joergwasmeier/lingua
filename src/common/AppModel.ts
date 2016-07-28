import FabaModel from "fabalous-core/core/FabaModel";
import AccountStore from "../account/AccountStore";
import MenuStore from "../menu/MenuStore";

/**
 * Created by creativecode on 20.04.16.
 */

class AppModel extends FabaModel {
  private static _instance:AppModel = new AppModel();

  accountStore:AccountStore;
  menuStore:MenuStore;

  userLoggedIn:Boolean;

  constructor( ) {
    super();

    if (AppModel._instance) {
      throw new Error("Error: Instantiation failed: Use AppModel.getInstance() instead of new.");
    }
    AppModel._instance = this;
  }

  public static getInstance():AppModel {
    return AppModel._instance;
  }
}

export var model = AppModel.getInstance();