import Env                          from '../utils/env';
import { getUri, putUri, postUri }  from '../utils/fetch';
import { IComponent }           from '../models/certification/component';

export function getComponents(vendorProductPortalId: string | number): Promise<Array<IComponent>> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cwe/vendorproducts/${vendorProductPortalId}/components`);
    return getUri<Array<IComponent>>(uri);
}

export function createComponents(vendorProductPortalId: string | number, components: Array<IComponent>): Promise<Array<IComponent>> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cwe/vendorproducts/${vendorProductPortalId}/components`);
    return postUri<Array<IComponent>>(uri, components);
}

export function updateComponents(vendorProductPortalId: string | number, components: Array<IComponent>): Promise<Array<IComponent>> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cwe/vendorproducts/${vendorProductPortalId}/components`);
    return putUri<Array<IComponent>>(uri, components);
}
