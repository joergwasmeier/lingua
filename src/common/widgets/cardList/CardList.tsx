import * as React from "react";
import ItemList from "../itemList/ItemList";
import {Divider} from "material-ui";

export default class CardList extends ItemList{
    constructor(props){
        super(props)
    }


    renderItems(): Array<any> {
        var rows: Array<any> = [];

        if (this.props.items){
            for (var item of this.props.items) {
                rows.push(<Divider key={"div"+item.id}/>);
            }
        }
        return rows;
    }
}