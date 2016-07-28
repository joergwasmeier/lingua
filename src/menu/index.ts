import MenuMediator from "./MenuMediator";
import Menu from "./view/Menu";
import MenuStore from "./MenuStore";
import InitMenuEvent from "./event/InitMenuEvent";
/**
 * Created by creativecode on 28.04.16.
 */

module.exports = {
  mediator: MenuMediator,
  store:MenuStore,
  initEvent: InitMenuEvent,
  view: Menu
};