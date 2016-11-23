export interface IRoutes {
    route: string;
    module: any;
    view?: string;
}

export default class Routes {
    static INDEX: IRoutes = {
        route: "/", module: async() => {
            return System.import("./account/index");
        }
    };

    static LOGIN: IRoutes = {
        route: "/login/", module: async() => {
            return await Routes.INDEX.module();
        }, view: "login"
    };
    static FORGOT_PASS: IRoutes = {
        route: "/forgotpass/", module: async() => {
            return await Routes.INDEX.module();
        }, view: "forgotpass"
    };
    static SIGN_UP: IRoutes = {
        route: "/signup/", module: async() => {
            return await Routes.INDEX.module();
        }, view: "signup"
    };
    static DASBOARD: IRoutes = {
        route: "/dashboard/", module: async() => {
            return System.import("./dashboard/index");
        }
    };

    // Store
    static STORE: IRoutes = {
        route: "/shop/", module: async() => {
            return System.import("./shop/index");
        }
    };
    static STORE_ITEM: IRoutes = {
        route: "/shop/:id", module: async() => {
            return await Routes.STORE.module();
        }, view: "shopitem"
    };
    static STORE_ITEM_TAB: IRoutes = {
        route: "/shop/:id/:tab", module: async() => {
            return await Routes.STORE.module();
        }, view: "shopitem"
    };
    static STORE_FILTER: IRoutes = {
        route: "/shop/filter/", module: async() => {
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