import FabaModel from "fabalous-core/core/FabaModel";
import FabaBindable from "fabalous-core/decorators/FabaBindable";
/**
 * Created by creativecode on 20.04.16.
 */


export class AppModel extends FabaModel {
  private static _instance:AppModel = new AppModel();

  @FabaBindable
  userLoggedIn:boolean;

  @FabaBindable
  name:string;

  @FabaBindable
  busy:boolean;

  @FabaBindable
  userName:string;

  @FabaBindable
  appBarTitle:string;

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


  addChangeListener(cb) {
    return super.addChangeListener(cb);
  }

  removeChangeListener(cb) {
    return super.removeChangeListener(cb);
  }
}