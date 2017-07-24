import { getUri, postUri, putUri, deleteUri } from '../utils/fetch';
import Env from '../utils/env';
import {IGroupMetadata} from '../models/skedge/groupMetadata';

export function getAllGroupMetadatas(): Promise<IGroupMetadata[]> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/skedge/groups/`);
    return getUri<Promise<IGroupMetadata[]>>(uri);
}

export function getGroupsForOwner(filters: IGroupMetadata): Promise<IGroupMetadata[]> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/skedge/groups/filter`);
    return postUri<Promise<IGroupMetadata[]>>(uri, filters);
}

export function postGroupDetails(groups: IGroupMetadata): Promise<IGroupMetadata> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/skedge/groups/`);
    return postUri<Promise<IGroupMetadata>>(uri, groups);
}

export function updateGroupDetails(groups: IGroupMetadata, groupId: number): Promise<IGroupMetadata> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/skedge/groups/${groupId}/`);
    return putUri<Promise<IGroupMetadata>>(uri, groups);
}

export function deleteGroupByGroupId(groupId: number): Promise<IGroupMetadata> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/skedge/groups/${groupId}/`);
    return deleteUri<Promise<IGroupMetadata>>(uri);
}