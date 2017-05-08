import { getUri, postUri, deleteUri } from '../utils/fetch';
import Env from '../utils/env';
import {ICase, ICase_fields} from '../models/case';
import { ICaseJiraLink, IApiNewJiraLink } from '../models/resource';
import {Fields} from '../models/general';
import {ICaseEscalation} from '../models/escalation';

export function getCase(caseId: string, fields?: ICase_fields): Promise<ICase> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cases/${caseId}`);
    if (fields && fields.length > 0) {
        uri.addQueryParam('fields', fields.join(','));
    }
    return getUri<ICase>(uri);
}

export function getLinkedJiras(caseId: string, fields?: Fields<ICaseJiraLink>): Promise<Array<ICaseJiraLink>> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cases/${caseId}/jiras`);
    if (fields && fields.length > 0) {
        uri.addQueryParam('fields', fields.join(','));
    }
    return getUri<Array<ICaseJiraLink>>(uri);
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
    return getUri<Array<ICaseEscalation>>(uri);
}
