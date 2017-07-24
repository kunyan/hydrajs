import {getUri}         from '../utils/fetch';
import Env              from '../utils/env';
import {IRoleMetadata}  from '../models/skedge/roleMetadata';

export function getAllRoleMetadatas(): Promise<IRoleMetadata[]> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/skedge/roleMetadata/`);
    return getUri<Promise<IRoleMetadata[]>>(uri);
}
