import * as React from "react";
import {observer} from "mobx-react";

interface IAccountProps {
    childs:React.ReactElement<any>
}

require("./Account.less");

@observer
export default class Account extends React.Component<IAccountProps,{}> {
    className: string = "Account";

    constructor(props:IAccountProps){
        super(props)
    }

    render(){
        return(
            <div className={`center ${this.className}`}>
                <div className="content">
                    <p className="header">LINGUA</p>

                    {this.props.childs}
                </div>
            </div>
        )
    }
}