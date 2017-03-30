import { IAccount } from '../account';

export interface IVendor extends IAccount {
    id?: string | number;
    name?: string;
    portalId?: number;
}
