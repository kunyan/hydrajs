import { IVendor } from './vendor';
import { ICertification } from './certification';

export interface IVendorProduct {
    // common
    id: string;
    portalId: string;
    program: string;
    name: string;
    vendor: IVendor;
    productURL?: string;
    status: boolean;
    certifications?: Array<ICertification>;

    // Hardware Product
    make?: IMake;
    category?: ICategory;
    supportURL?: string;
    specificationURL?: string;

    // OpenStack Product
    component?: string;

}

export interface IMake {
    id: string;
    name: string;
}

export interface ICategory {
    id: string;
    name: string;
}
