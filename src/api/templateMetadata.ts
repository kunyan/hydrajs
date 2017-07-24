import {getUri, postUri}         from '../utils/fetch';
import Env              from '../utils/env';
import {ITemplateMetadata} from '../models/skedge/templateMetadata';

export function getAllTemplateMetadatas(): Promise<ITemplateMetadata[]> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/skedge/templatesMetadata/`);
    return getUri<Promise<ITemplateMetadata[]>>(uri);
}

export function getTemplateMetadatasForUser(userId: string): Promise<ITemplateMetadata[]> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/skedge/templatesMetadata/user/${userId}`);
    return getUri<Promise<ITemplateMetadata[]>>(uri);
}

export function postCustomTemplateForUser(template: ITemplateMetadata): Promise<ITemplateMetadata> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/skedge/templatesMetadata`);
    return postUri<Promise<ITemplateMetadata>>(uri, template);
}
