export interface IRoutes {
    route: string;
    module: any;
    view?: string;
}

export default class Routes {
    static INDEX: IRoutes = {
        route: "/", module: async() : Promise<void> => {
            return System.import("./account/index");
        }
    };

    static LOGIN: IRoutes = {
        route: "/login/", module: async() : Promise<void> => {
            return await Routes.INDEX.module();
        }, view: "login"
    };
    static FORGOT_PASS: IRoutes = {
        route: "/forgotpass/", module: async() : Promise<void> => {
            return await Routes.INDEX.module();
        }, view: "forgotpass"
    };
    static SIGN_UP: IRoutes = {
        route: "/signup/", module: async() : Promise<void> => {
            return await Routes.INDEX.module();
        }, view: "signup"
    };
    static DASBOARD: IRoutes = {
        route: "/dashboard/", module: async() : Promise<void> => {
            return System.import("./dashboard/index");
        }
    };

    // Store
    static STORE: IRoutes = {
        route: "/shop/", module: async() : Promise<void> => {
            return System.import("./shop/index");
        }
    };
    static STORE_ITEM: IRoutes = {
        route: "/shop/:id", module: async() : Promise<void> => {
            return await Routes.STORE.module();
        }, view: "shopitem"
    };
    static STORE_ITEM_TAB: IRoutes = {
        route: "/shop/:id/:tab", module: async() : Promise<void> => {
            return await Routes.STORE.module();
        }, view: "shopitem"
    };
    static STORE_FILTER: IRoutes = {
        route: "/shop/filter/", module: async() : Promise<void> => {
            return await Routes.STORE.module();
        }, view: "shopfilter"
    };

    static getRoutes() {
        let routes = [
            Routes.INDEX,
            Routes.LOGIN,
            Routes.FORGOT_PASS,
            Routes.SIGN_UP,
            Routes.DASBOARD,
            Routes.STORE,
            Routes.STORE_ITEM,
            Routes.STORE_FILTER,
            Routes.STORE_ITEM_TAB
        ];

        return routes;
    }
}