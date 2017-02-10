import {getUri} from '../utils/fetch';
import Env from '../utils/env';
import { IVendorProduct } from '../models/cwe/vendorProduct';
import { ICertification } from '../models/cwe/certification';

export function getVendorProduct(vendorProductPortalId: string): Promise<IVendorProduct> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cwe/vendorproducts/${vendorProductPortalId}`);
    return getUri<IVendorProduct>(uri);
}

export function getCertifications(vendorProductPortalId: string): Promise<Array<ICertification>> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cwe/vendorproducts/${vendorProductPortalId}/certifications`);
    return getUri<Array<ICertification>>(uri);
}
