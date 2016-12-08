export interface ILayoutSore {
    showPopUp: boolean;
    landscape:boolean;
    mobile: boolean;
    showPopUpTimeStamp:number;
    bottomBarSelectedIndex: number;
    bottomBarVisible: boolean;
}

export const LayoutStore: ILayoutSore = {
    showPopUp: false,
    landscape: false,
    mobile: true,
    showPopUpTimeStamp: 0,
    bottomBarSelectedIndex: 0,
    bottomBarVisible: false
};