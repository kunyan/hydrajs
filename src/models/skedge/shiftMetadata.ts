export interface IShiftMetadata {
    id: number;
    name: string;
    startAt: number;
    endAt: number;
    shiftType: string;
    createdBy: string;
    createdAt: number;
    updateBy: string;
    updateAt: number;
}

export interface ICreateShiftMetadata {
    name: string;
    startAt: string;
    endAt: string;
    shiftType: string;
}
