import { IAccount } from '../account';

export interface IVendor extends IAccount {
    id: any;
    name: string;
    portalId: number;
}
