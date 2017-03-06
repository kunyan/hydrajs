import {getUri}         from '../utils/fetch';
import Env              from '../utils/env';
import {ITemplateMetadata} from '../models/skedge/templateMetadata';

export function getAllTemplateMetadatas(): Promise<ITemplateMetadata[]> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/skedge/templatesMetadata/`);
    return getUri<ITemplateMetadata[]>(uri);
}
