import * as React from "react";


export default class BaseComponent<T> extends React.Component<T,any> {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div></div>
        )
    }
}