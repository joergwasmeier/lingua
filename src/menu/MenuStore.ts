import {model} from "../common/AppModel";
import ProfileVo from "./vo/ProfileVo";
import {MenuItemVo,MenuItemTypesVo} from "./vo/MenuItemVo";
/**
 * Created by creativecode on 20.04.16.
 */

export default class MenuStore {

  public profil:ProfileVo = new ProfileVo();

  public courses:Array<MenuItemVo>;
  public createdCourses:Array<MenuItemVo>;

  constructor( ) {
    if (!model.menuStore) model.menuStore = this;
  }

  public createMockData(){
    if (TEST){
      this.profil = new ProfileVo().createMockData();

      this.courses = [];
      for (var i = 0; i < 5; i++) {
        this.courses.push(new MenuItemVo().createMockData(MenuItemTypesVo.COURSE));
      }

      this.createdCourses = [];
      for (var i = 0; i < 5; i++) {
        this.createdCourses.push(new MenuItemVo().createMockData(MenuItemTypesVo.CREATE_COURSE));
      }
    }
  }
}