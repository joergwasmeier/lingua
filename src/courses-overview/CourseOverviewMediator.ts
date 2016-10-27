/**
 * Created by creativecode on 28.04.16.
 */

import GetCourseOverviewDataEvent from "./event/GetCourseOverviewDataEvent";
import {IFabaMediator} from "@fabalous/core/IFabaMediator";
import FabaMediator from "@fabalous/core/FabaMediator";

export default class CourseOverviewMediator extends FabaMediator implements IFabaMediator {

    constructor() {
        super();
    }

    registerCommands(): void {
        super.registerCommands();
        this.addCommand(GetCourseOverviewDataEvent, require("./command/GetCourseOverviewDataCommand.ts"));
    }

    registerServices(): void {
        super.registerServices();
        this.addSerivce(GetCourseOverviewDataEvent, require("./service/GetCourseOverviewDataService.ts"));
    }
}