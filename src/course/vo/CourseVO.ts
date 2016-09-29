/**
 * Created by creativecode on 28.04.16.
 */

export default class CourseVO{
  id:string;

  title:string;
  createDate:number;
  createBy:string;



  createMocKData(){
    this.id = Math.random().toString();
    this.title = "Course" + Math.random();
    this.createDate = Date.now();
    this.createBy = "Test" + Math.random();

    return this;
  }

}