import { IVendor } from './vendor';
import { ICertification } from './certification';

export interface IVendorProduct {
    // common
    id: string | number;
    portalId: string | number;
    program: string;
    name: string;
    vendor: IVendor;
    productUrl?: string;
    status: boolean;
    certifications?: ICertification[];

    // Hardware Product
    make?: IMake;
    category?: ICategory;
    supportUrl?: string;
    specification?: ISpecification;

    // OpenStack Product
    component?: string;

}

export interface ISpecification {
    status: boolean;
    url?: string;
}

export interface IMake {
    id: string | number;
    name: string;
}

export interface ICategory {
    id: string | number;
    name: string;
}
