import {IUser} from '../user';

export interface IGroupMembers {
    groupId?: number;
    userId?: string;
    createdBy?: string;
    createdAt?: number;
    updateBy?: string;
    updateAt?: number;
}

export interface IGroupMetadata {
    id?: number;
    name?: string;
    createdBy?: string;
    createdAt?: number;
    updateBy?: string;
    updateAt?: number;
    groupMembers?: Array<IGroupMembers>;
}