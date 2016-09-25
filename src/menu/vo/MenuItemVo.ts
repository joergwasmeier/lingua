
import FabaValueObject from "@fabalous/core/FabaValueObject";
export class MenuItemVo extends FabaValueObject {
  
  id:string;
  typ:MenuItemTypesVo;

  icon:string;

  headLine:string;
  subLine:string;

  constructor(){
    super();
  }

  // @ifdef TEST
  public createMockData(typ:MenuItemTypesVo):MenuItemVo{
    switch (typ){
      case MenuItemTypesVo.COURSE:

      case MenuItemTypesVo.CREATE_COURSE:
        
    }

    return this;
  }
  // @endif
}

export enum MenuItemTypesVo{
  COURSE,
  CREATE_COURSE
}