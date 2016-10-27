import BaseComponent from "./BaseComponent";
import * as React from "react";

/**
 * Created by creativecode on 26.10.16.
 */

interface ITestCompProps{
    name:string;
}

export default class TestComp extends BaseComponent<ITestCompProps>{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>test</div>
        )
    }
}