import * as React from "react";
import LinguaAppBar from "../../menu/view/AppBar";
import IconButton from "material-ui/IconButton";
import ArrowDownWard from "material-ui/svg-icons/navigation/close";
import ShopFilterEvent from "../event/ShopFilterEvent";
import {ShopFilterEventType} from "../event/ShopFilterEvent";
import {TextField, FlatButton} from "material-ui";

interface IShopFilter{
    visible:boolean
}

require('./ShopFilter.less');

export default class ShopFilter extends React.Component<IShopFilter,null> {
    render(){
        return (
            <div className="filterModal ShopFilter">
                <LinguaAppBar
                    title="Filter"
                    leftIcon={<IconButton onClick={()=>{new ShopFilterEvent(ShopFilterEventType.HIDE).dispatch()}}>
                                <ArrowDownWard/>
                              </IconButton>}
                    disableEvent="true"
                />
                <div className="container">
                    <TextField
                        className="textField"
                        floatingLabelText="Suchbegriff"
                    />

                    <FlatButton secondary="true"
                                onClick={()=>{new ShopFilterEvent(ShopFilterEventType.HIDE).dispatch()}}>
                        Anzeigen
                    </FlatButton>
                </div>
            </div>
        )
    }
}