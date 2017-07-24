import Env                      from '../utils/env';
import {ICase, ICase_fields}    from '../models/case';
import {ICaseEscalation}        from '../models/escalation';

import {
    getUri,
    postUri,
    deleteUri
} from '../utils/fetch';

import {
    Fields,
    IArrayResponse
} from '../models/general';

import {
    ICaseJiraLink,
    IApiNewJiraLink
} from '../models/resource';

import {
    IExternalTrackerUpdate,
    IExternalTracker
} from '../models/externalTracker';

// caseId can be id or case number
export function getCase(caseId: string, fields?: ICase_fields): Promise<ICase> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cases/${caseId}`);
    if (fields && fields.length > 0) {
        uri.addQueryParam('fields', fields.join(','));
    }
    return getUri<Promise<ICase>>(uri);
}

export function getLinkedJiras(caseId: string, fields?: Fields<ICaseJiraLink>): Promise<Array<ICaseJiraLink>> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cases/${caseId}/jiras`);
    if (fields && fields.length > 0) {
        uri.addQueryParam('fields', fields.join(','));
    }
    return getUri<Promise<ICaseJiraLink[]>>(uri);
}

export function linkJiraToCase(caseId: string, newLink: IApiNewJiraLink) {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cases/${caseId}/jira`);
    return postUri(uri, newLink);
}

export function deleteJiraLinkFromCase(caseId: string, issueKey: string) {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cases/${caseId}/jira/${issueKey}`);
    return deleteUri(uri);
}

export function getEscalations(caseId: string): Promise<Array<ICaseEscalation>> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/escalations?caseNumber=${caseId}`);
    return getUri<Promise<ICaseEscalation[]>>(uri);
}

export function getLanguages(): Promise<IArrayResponse<string[]>> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cases/languages`);
    return getUri<Promise<IArrayResponse<string[]>>>(uri);
}

export function getSeverities(): Promise<IArrayResponse<string[]>> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cases/severities`);
    return getUri<Promise<IArrayResponse<string[]>>>(uri);
}

export function getStatuses(): Promise<IArrayResponse<string[]>> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cases/statuses`);
    return getUri<Promise<IArrayResponse<string[]>>>(uri);
}

export function getTypes(): Promise<IArrayResponse<string[]>> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cases/types`);
    return getUri<Promise<IArrayResponse<string[]>>>(uri);
}

export function getCaseExternalTrackers(caseId: string): Promise<IExternalTracker[]> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cases/${caseId}/externaltrackers`);
    return getUri<Promise<IExternalTracker[]>>(uri);
}

export function getCaseExternalTrackerUpdates(caseId: string): Promise<IExternalTrackerUpdate[]> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cases/${caseId}/externaltrackerupdates`);
    return getUri<Promise<IExternalTrackerUpdate[]>>(uri);
}