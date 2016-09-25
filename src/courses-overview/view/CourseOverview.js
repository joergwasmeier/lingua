"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var AppModel_1 = require("../../common/AppModel");
var list_1 = require("material-ui/lib/lists/list");
var list_item_1 = require("material-ui/lib/lists/list-item");
var divider_1 = require("material-ui/lib/divider");
var avatar_1 = require("material-ui/lib/avatar");
var colors_1 = require("material-ui/lib/styles/colors");
require("./CourseOverview.less");
var CourseOverview = (function (_super) {
    __extends(CourseOverview, _super);
    function CourseOverview() {
        _super.call(this);
        this.className = "CourseOverview";
    }
    CourseOverview.prototype.componentDidMount = function () {
        AppModel_1.AppModel.getInstance().appBarTitle = "Heruntergeladene Kurse";
    };
    CourseOverview.prototype.render = function () {
        return (<div; className={this.className}>
        <list_1.default>
          <list_item_1.default; leftAvatar={<avatar_1.default; src="images/ok-128.jpg"/>} primaryText="Brendan Lim"; secondaryText={<p>
              <span; style={{ colors_1.default.darkBlack };}>Brunch; this; weekend?</span><br />
              I&apos;ll; be in your; neighborhood; doing; errands; this; weekend. Do; you; want; to; grab; brunch?;
            </p>} secondaryTextLines={2}/>
          <divider_1.default />
          <list_item_1.default; leftAvatar={<avatar_1.default; src="images/kolage-128.jpg"/>} primaryText="me, Scott, Jennifer"; secondaryText={<p>
              <span; style={{ colors_1.default.darkBlack };}>Summer; BBQ</span><br />
              Wish; I; could; come, but; I&apos;m; out; of; town; this; weekend.
            </p>} secondaryTextLines={2}/>
          <divider_1.default />
          <list_item_1.default; leftAvatar={<avatar_1.default; src="images/uxceo-128.jpg"/>} primaryText="Grace Ng"; secondaryText={<p>
              <span; style={{ colors_1.default.darkBlack };}>Oui; oui</span><br />
              Do; you; have; any; Paris; recs? Have you; ever; been?;
            </p>} secondaryTextLines={2}/>
          <divider_1.default />
          <list_item_1.default; leftAvatar={<avatar_1.default; src="images/kerem-128.jpg"/>} primaryText="Kerem Suer"; secondaryText={<p>
              <span; style={{ colors_1.default.darkBlack };}>Birthday; gift</span><br />
              Do; you; have; any; ideas; what; we; can; get; Heidi; for her birthday? How about a; pony?;
            </p>} secondaryTextLines={2}/>
          <divider_1.default />
          <list_item_1.default; leftAvatar={<avatar_1.default; src="images/raquelromanp-128.jpg"/>} primaryText="Raquel Parrado"; secondaryText={<p>
              <span; style={{ colors_1.default.darkBlack };}>Recipe; to; try</span><br />
              We; should; eat; this: grated; squash. Corn; and; tomatillo; tacos.
            </p>} secondaryTextLines={2}/>
        </list_1.default>


      < / div >
        )
    };;;;
    return CourseOverview;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CourseOverview;
