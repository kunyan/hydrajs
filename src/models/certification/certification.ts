import { ICase } from '../case';
import { IVendorProduct } from './vendorProduct';

export interface ICertification {
    case: ICase;
    portalId: number;
    summaryStatus: string;
    detailStatus: string;
    public: boolean;
    type: ICertificationType;
    vendorProduct: IVendorProduct;
    rhProduct: IRedHatProduct;
}

export interface IRedHatProduct {
    name: string;
    minorVersion: string;
}

export interface ICertificationType {
    status: boolean;
    url?: string;
}

export interface IPolicyGuide {
    name: string;
    version: string;
    url?: string;
}
