import * as React from "react";
import {ListItem, Divider} from "material-ui";

require("./ItemList.less");

interface IItemListProps{
    items:Array<any>;
}

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

                rows.push(<ListItem
                    key={item.id}
                    primaryText={item.name}
                    secondaryText={item.publishedData}
                />);
            }
        }
        return rows;
    }

    render() {
        return (
            <div className="list">
                {this.renderItems()}
            </div>
        );
    }
}