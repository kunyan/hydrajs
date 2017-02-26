import { getUri, postUri, deleteUri } from '../utils/fetch';
import Env from '../utils/env';
import {IGroupMetadata} from '../models/skedge/groupMetadata';

export function getAllGroupMetadatas(): Promise<IGroupMetadata[]> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/skedge/groups/`);
    return getUri<IGroupMetadata[]>(uri);
}

export function getGroupsForOwner(filters: IGroupMetadata): Promise<IGroupMetadata[]> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/skedge/groups/filter`);
    return postUri<IGroupMetadata[]>(uri, filters);
}

export function postGroupDetails(groups: IGroupMetadata[]): Promise<IGroupMetadata[]> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/skedge/groups/`);
    return postUri<IGroupMetadata[]>(uri, groups);
}

export function deleteGroupByGroupId(groupId: number): Promise<any> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/skedge/groups/${groupId}/`);
    return deleteUri<any>(uri);
}