import ProfileVo from "./vo/ProfileVo";
import {MenuItemVo, MenuItemTypesVo} from "./vo/MenuItemVo";
import FabaModel from "@fabalous/core/FabaModel";

/**
 * Created by creativecode on 20.04.16.
 */

export default class MenuStore {
  public profil:ProfileVo = new ProfileVo();

  public courses:Array<MenuItemVo>;
  public createdCourses:Array<MenuItemVo>;
  public menuOpen:Boolean = false;

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

export var menuStore:MenuStore = FabaModel.getStore('menuStore', MenuStore);