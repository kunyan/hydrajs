import Env                          from '../utils/env';
import { getUri, putUri, postUri }  from '../utils/fetch';
import { IVendorProduct }           from '../models/certification/vendorProduct';
import { ICertification }           from '../models/certification/certification';

export function getVendorProduct(vendorProductPortalId: string | number): Promise<IVendorProduct> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cwe/vendorproducts/${vendorProductPortalId}`);
    return getUri<IVendorProduct>(uri);
}

export function getCertifications(vendorProductPortalId: string | number): Promise<ICertification[]> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cwe/vendorproducts/${vendorProductPortalId}/certifications`);
    return getUri<Array<ICertification>>(uri);
}

export function createVendorProduct(vendorProduct: IVendorProduct): Promise<IVendorProduct> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cwe/vendorproducts/`);
    return postUri<IVendorProduct>(uri, vendorProduct);
}

export function updateVendorProduct(vendorProduct: IVendorProduct): Promise<IVendorProduct> {
    const vendorProductPortalId = vendorProduct.portalId;
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cwe/vendorproducts/${vendorProductPortalId}`);
    return putUri<IVendorProduct>(uri, vendorProduct);
}
