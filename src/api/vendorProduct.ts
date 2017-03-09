import Env                  from '../utils/env';
import { getUri }           from '../utils/fetch';
import { IVendorProduct }   from '../models/certification/vendorProduct';
import { ICertification }   from '../models/certification/certification';

export function getVendorProduct(vendorProductPortalId: string): Promise<IVendorProduct> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cwe/vendorproducts/${vendorProductPortalId}`);
    return getUri<IVendorProduct>(uri);
}

export function getCertifications(vendorProductPortalId: string): Promise<ICertification[]> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cwe/vendorproducts/${vendorProductPortalId}/certifications`);
    return getUri<Array<ICertification>>(uri);
}
