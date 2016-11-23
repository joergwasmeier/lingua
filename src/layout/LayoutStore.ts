export interface ILayoutSore {
    showPopUp: boolean;
    landscape:boolean;
    mobile: boolean;
    showPopUpTimeStamp:number;
}

export const LayoutStore: ILayoutSore = {
    showPopUp: false,
    landscape: false,
    mobile: true,
    showPopUpTimeStamp: 0
};