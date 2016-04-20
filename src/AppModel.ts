import FabaModel from "fabalous-core/core/FabaModel";
import FabaBindable from "fabalous-core/decorators/FabaBindable";
/**
 * Created by creativecode on 20.04.16.
 */


export class AppModel_in extends FabaModel {

  private static _instance:AppModel_in = new AppModel_in();

  @FabaBindable
  name:string;

  @FabaBindable

  busy:boolean;

  @FabaBindable
  userName:String;

  constructor( ) {
    super();

    if (AppModel_in._instance) {
      throw new Error("Error: Instantiation failed: Use LoginModel.getInstance() instead of new.");
    }
    AppModel_in._instance = this;
  }

  public static getInstance():AppModel_in {
    return AppModel_in._instance;
  }


  addChangeListener(cb) {
    return super.addChangeListener(cb);
  }

  removeChangeListener(cb) {
    return super.removeChangeListener(cb);
  }
}

const AppModel = AppModel_in.getInstance();
export default AppModel;
