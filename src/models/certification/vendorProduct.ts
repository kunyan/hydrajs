import { IVendor } from './vendor';
import { ICertification } from './certification';

export interface IVendorProduct {
    // common
    id?: string | number;
    portalId?: string | number;
    program?: string;
    name?: string;
    vendor?: IVendor;
    productUrl?: string;
    status?: boolean;
    certifications?: ICertification[];

    // Hardware Product
    make?: IMake;
    category?: string;
    supportUrl?: string;
    specification?: ISpecification;
    isPortalVisiable?: boolean;

    // OpenStack Product
    component?: string;

}

export interface ISpecification {
    isDraft?: boolean;
    url?: string;
}

export interface IMake {
    id?: string | number;
    name?: string;
}
