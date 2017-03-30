import { IAPICase }         from '../case';
import { IVendorProduct }   from './vendorProduct';

export interface ICertification {
    kase?: IAPICase;
    portalId?: string | number;
    summaryStatus?: string;
    detailStatus?: string;
    public?: boolean;
    type?: string;
    classification?: string;
    vendorProduct?: IVendorProduct;
    rhProduct?: IRedHatProduct;
    policyGuide?: IPolicyGuide;
}

export interface IRedHatProduct {
    name?: string;
    minorVersion?: string;
    platform?: string;
}

export interface IPolicyGuide {
    name?: string;
    version?: string;
    url?: string;
}
