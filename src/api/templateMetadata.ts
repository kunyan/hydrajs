import {getUri, postUri}         from '../utils/fetch';
import Env              from '../utils/env';
import {ITemplateMetadata} from '../models/skedge/templateMetadata';

export function getAllTemplateMetadatas(): Promise<ITemplateMetadata[]> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/skedge/templatesMetadata/`);
    return getUri<ITemplateMetadata[]>(uri);
}

export function getTemplateMetadatasForUser(userId: string): Promise<ITemplateMetadata[]> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/skedge/templatesMetadata/user/${userId}`);
    return getUri<ITemplateMetadata[]>(uri);
}

export function postCustomTemplateForUser(template: ITemplateMetadata): Promise<ITemplateMetadata> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/skedge/templatesMetadata`);
    return postUri<ITemplateMetadata>(uri, template);
}
