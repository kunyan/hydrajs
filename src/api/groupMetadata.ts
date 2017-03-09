import { getUri, postUri, putUri, deleteUri } from '../utils/fetch';
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

export function postGroupDetails(groups: IGroupMetadata): Promise<IGroupMetadata> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/skedge/groups/`);
    return postUri<IGroupMetadata>(uri, groups);
}

export function updateGroupDetails(groups: IGroupMetadata, groupId: number): Promise<IGroupMetadata> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/skedge/groups/${groupId}/`);
    return putUri<IGroupMetadata>(uri, groups);
}

export function deleteGroupByGroupId(groupId: number): Promise<IGroupMetadata> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/skedge/groups/${groupId}/`);
    return deleteUri<IGroupMetadata>(uri);
}