import FabaModel from "@fabalous/core/FabaModel";
import CourseVO from "./vo/CourseVO";
/**
 * Created by creativecode on 21.07.16.
 */

export default class CourseStore {
    loading:boolean;

    data = new CourseVO();
}

export var courseStore:CourseStore = FabaModel.getStore('courseStore', CourseStore);