import FabaEvent from "@fabalous/core/FabaEvent";
import DashboardVo from "../vo/DashboardVo";

export default class InsertDashboardDataEvent extends FabaEvent{
  data:DashboardVo;

  constructor(data:DashboardVo) {
    super("InsertDashboardDataEvent");

    this.data = data;
  }


}