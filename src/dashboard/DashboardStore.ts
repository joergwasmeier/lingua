/**
 * Created by creativecode on 21.07.16.
 */

export interface IDashboardStore {
    pointsToday: number;
    data: any;
}

export const dashboardImStore: IDashboardStore = {
    pointsToday: 0,
    data: null
};