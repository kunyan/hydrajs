import { IVendor } from './vendor';
import { ICertification } from './certification';


export interface IVendorProductBase {
    id?: string | number;
    portalId?: string | number;
    program?: string;
    name?: string;
    vendor?: IVendor;
    productUrl?: string;
    status?: boolean;
    certifications?: ICertification[];
}

export interface IHardwareVendorProduct extends IVendorProductBase {
    make?: IMake;
    category?: string;
    supportUrl?: string;
    specification?: ISpecification;
    isPortalVisiable?: boolean;
}

export interface IOpenStackVendorProduct extends IVendorProductBase {
    category?: string[];
}

export interface ISpecification {
    isDraft?: boolean;
    url?: string;
}

export interface IMake {
    id?: string | number;
    name?: string;
}

export type IVendorProduct = IHardwareVendorProduct | IOpenStackVendorProduct;
