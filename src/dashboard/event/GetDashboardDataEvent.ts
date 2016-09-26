import FabaEvent from "@fabalous/core/FabaEvent";
import DashboardVo from "../vo/DashboardVo";

export default class GetDashboardDataEvent extends FabaEvent {
  data:DashboardVo;
  test:string;

  constructor() {
    super("GetDashboardDataEvent");
  }
}