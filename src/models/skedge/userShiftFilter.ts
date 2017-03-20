export interface IUserShiftFilter {
    userIds?: string[];
    shiftIds?: number[];
    roleIds?: number[];
    startDate?: number | string;
    endDate?: number | string;
    removedUsers?: string[];
    exemptedShifts?: number[];
}
