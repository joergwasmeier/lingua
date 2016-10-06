import * as React from "react";
import {ListItem, Divider} from "material-ui";
import FabaEvent from "@fabalous/core/FabaEvent";

require("./ItemList.less");

interface IItemListProps{
    items:Array<any>;
    clickEvent:any;
    className?:string;
}

var ReactPullToRefresh = require("react-pull-to-refresh");

export default class ItemList extends React.Component<IItemListProps, null> {
    className: string = "ItemList";

    constructor() {
        super();
    }

    private renderItems(): Array<any> {
        var rows: Array<any> = [];

        if (this.props.items){
            for (var item of this.props.items) {
                rows.push(<Divider key={"div"+item.id}/>);

                rows.push(<ItemListItem key={item.id} clickEvent={this.props.clickEvent} item={item} />);
            }
        }
        return rows;
    }

    handleRefresh(resolve, reject){
        setTimeout(()=>{
            resolve();
        },5000);
    }

    render() {
        return (
            <ReactPullToRefresh onRefresh={this.handleRefresh} className={this.props.className}>
                {this.renderItems()}
            </ReactPullToRefresh>
        );
    }
}

interface IItemListItemProps{
    item:any;
    clickEvent:any;
}

class ItemListItem extends React.Component<IItemListItemProps,{}>{
    private itemClick(item){
        this.props.clickEvent.item = item;
        this.props.clickEvent.dispatch();
    }

    render(){
        return(
            <ListItem
                primaryText={this.props.item.name}
                secondaryText={this.props.item.publishedData}
                onClick={()=>{this.itemClick(this.props.item);}}
            />
        )
    }
}