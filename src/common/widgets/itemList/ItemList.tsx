import * as React from "react";
import {ListItem, Divider} from "material-ui";
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";
import {style} from "typestyle";

interface IItemListProps{
    items:Array<any>;
    clickEvent:any;
    className?:string;
}

var ReactPullToRefresh = require("react-pull-to-refresh");

export default class ItemList extends FabaWebBaseComponent<IItemListProps> {
    private style = style({
        overflow: "scroll",
        "-webkit-overflow-scrolling": "touch",
        height:"92vh"
    });

    constructor(props) {
        super(props);
    }

    renderItems(): Array<any> {
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
            <div className={this.style}>
                {this.renderItems()}
            </div>
        );
    }
}

/*
 <ReactPullToRefresh onRefresh={this.handleRefresh} className={this.props.className}>
 {this.renderItems()}
 </ReactPullToRefresh>
 */

interface IItemListItemProps{
    item:any;
    clickEvent:any;
}

class ItemListItem extends FabaWebBaseComponent<IItemListItemProps> {
    private itemClick = (item) => {
        this.props.clickEvent.item = item;
        this.props.clickEvent.dispatch();
    }

    render(){
        return(
            <ListItem
                primaryText={this.props.item.name}
                secondaryText={this.props.item.publishedData}
                onClick={this.itemClick(this.props.item)}
            />
        )
    }
}