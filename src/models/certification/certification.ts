import { ICase }            from '../case';
import { IVendorProduct }   from './vendorProduct';

export interface ICertification {
    kase?: ICase;
    portalId?: string | number;
    summaryStatus?: string;
    detailStatus?: string;
    public?: boolean;
    certType?: string;
    classification?: string;
    vendorProduct?: IVendorProduct;
    redhatProduct?: IRedHatProduct;
    policyGuide?: IPolicyGuide;
}

export interface IRedHatProduct {
    name?: string;
    version?: string;
    platform?: string;
}

export interface IPolicyGuide {
    name?: string;
    version?: string;
    url?: string;
}
