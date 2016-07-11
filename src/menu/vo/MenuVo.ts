import FabaValueObject from "fabalous-core/core/FabaValueObject";
import ProfileVo from "./ProfileVo";
import {MenuItemVo, MenuItemTypesVo} from "./MenuItemVo";

export default class MenuVo extends FabaValueObject {
  public profil:ProfileVo;

  public courses:Array<MenuItemVo>;
  public createdCourses:Array<MenuItemVo>;

  constructor(){
    super();

    this.profil = new ProfileVo();
  }

  // @ifdef TEST
  public createMockData(){
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
  // @endif

}