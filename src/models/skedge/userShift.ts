export interface IUserShift {
    id?: number;
    userId: string;
    shiftId: number;
    roleId?: number;
    startDate: number;
    endDate: number;
    createdBy?: string;
    createdAt?: number;
    updatedBy?: string;
    updatedAt?: number;
}
