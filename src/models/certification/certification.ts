import { IAPICase } from '../case';
import { IVendorProduct } from './vendorProduct';

export interface ICertification {
    case?: IAPICase;
    portalId?: string | number;
    summaryStatus: string;
    detailStatus: string;
    public: boolean;
    type: ICertificationType;
    vendorProduct: IVendorProduct;
    rhProduct: IRedHatProduct;
    policyGuide: IPolicyGuide;
}

export interface IRedHatProduct {
    name: string;
    minorVersion: string;
    platform: string;
}

export interface ICertificationType {
    id: string | number;
    name: string;
}

export interface IPolicyGuide {
    name: string;
    version: string;
    url?: string;
}
