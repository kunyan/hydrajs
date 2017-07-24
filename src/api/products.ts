import {getUri}                 from '../utils/fetch';
import Env                      from '../utils/env';
import { IArrayResponse }       from '../models/general';

import {
    IProduct
} from '../models/product';

export function getProducts(sso: string): Promise<IProduct[]> {
    if (sso) {
        const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/products/contact/${sso}`);
        return getUri<Promise<IProduct[]>>(uri);
    } else {
        const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/products`);
        return getUri<Promise<IProduct[]>>(uri);
    }
}

export function getProductVersions(productName: string): Promise<IArrayResponse<string[]>> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/products/${productName}/versions`);
    return getUri<Promise<IArrayResponse<string[]>>>(uri);
}
