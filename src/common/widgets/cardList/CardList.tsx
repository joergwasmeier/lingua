import * as React from "react";
import ItemList from "../itemList/ItemList";
import {Divider} from "material-ui";
import {Card, CardHeader, CardMedia, CardTitle, CardText} from "material-ui";

export default class CardList extends ItemList{
    constructor(props){
        super(props)
    }


    renderItems(): Array<any> {
        var rows: Array<any> = [];

        if (this.props.items){
            for (var item of this.props.items) {
                rows.push(<Divider key={"div"+item.id}/>);
                rows.push(
                    <Card>
                        <CardHeader
                            title="URL Avatar"
                            subtitle="Subtitle"
                            avatar="images/jsa-128.jpg"
                        />
                        <CardTitle title="Card title" subtitle="Card subtitle" />
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                        </CardText>
                    </Card>
                );
            }
        }
        return rows;
    }
}