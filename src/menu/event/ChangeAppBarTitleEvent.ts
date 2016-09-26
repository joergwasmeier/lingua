import FabaEvent from "@fabalous/core/FabaEvent";
/**
 * Created by creativecode on 29.06.16.
 */


export default class ChangeAppBarTitleEvent extends FabaEvent{
  
  constructor(titleConst:ChangeAppBarTitles){
    super("GetMenuDataEvent");
  }
}

export enum ChangeAppBarTitles {
  DASHBOARD,
  LOGIN
};