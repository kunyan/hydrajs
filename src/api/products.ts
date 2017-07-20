import {getUri}                 from '../utils/fetch';
import Env                      from '../utils/env';
import { TQualityIndexType }    from '../models/review';
import { ICountOptions }        from '../models/count';
import { IArrayResponse }       from '../models/general';

import {
    IProduct
} from '../models/product';

export function getProducts(sso: string): Promise<IProduct[]> {
    if (sso) {
        const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/products/contact/${sso}`);
        return getUri<IProduct[]>(uri);
    } else {
        const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/products`);
        return getUri<IProduct[]>(uri);
    }
}

export function getProductVersions(productName: string): Promise<IArrayResponse<string[]>> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/products/${productName}/versions`);
    return getUri<IArrayResponse<string[]>>(uri);
}
