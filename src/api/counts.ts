import {getUri}                 from '../utils/fetch';
import Env                      from '../utils/env';
import { ICountOptions }        from '../models/count';

export function articlesLinked(caseId: string): Promise<number> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cases/${caseId}/count/articles/linked`);
    return getUri<Promise<number>>(uri);
}

export function bomgarSessions(caseId: string): Promise<number> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cases/${caseId}/count/bomgarsessions`);
    return getUri<Promise<number>>(uri);
}

export function bugzillas(caseId: string): Promise<number> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cases/${caseId}/count/bugzillas`);
    return getUri<Promise<number>>(uri);
}

export function caseHistory(caseId: string): Promise<number> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cases/${caseId}/count/casehistory`);
    return getUri<Promise<number>>(uri);
}

export function chatTranscripts(caseId: string): Promise<number> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cases/${caseId}/count/chattranscripts`);
    return getUri<Promise<number>>(uri);
}

export function comments(caseId: string): Promise<number> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cases/${caseId}/count/comments`);
    return getUri<Promise<number>>(uri);
}

export function escalationsClosed(caseId: string): Promise<number> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cases/${caseId}/count/escalations/closed`);
    return getUri<Promise<number>>(uri);
}

export function escalationsOpen(caseId: string): Promise<number> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cases/${caseId}/count/escalations/open`);
    return getUri<Promise<number>>(uri);
}

export function fileAttachments(caseId: string): Promise<number> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cases/${caseId}/count/fileattachments`);
    return getUri<Promise<number>>(uri);
}

export function jiras(caseId: string): Promise<number> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cases/${caseId}/count/jiras`);
    return getUri<Promise<number>>(uri);
}

export function solutionsLinked(caseId: string): Promise<number> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cases/${caseId}/count/solutions/linked`);
    return getUri<Promise<number>>(uri);
}

export function teamMembers(caseId: string): Promise<number> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cases/${caseId}/count/teammembers`);
    return getUri<Promise<number>>(uri);
}

export function reviews(options: ICountOptions): Promise<number> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/${options.qualityIndexType}/count`);
    if (options.userId) {
        uri.addQueryParam('userId', options.userId);
    }
    if (options.createdFrom) {
        uri.addQueryParam('createdFrom', options.createdFrom);
    }
    if (options.createdTo) {
        uri.addQueryParam('createdTo', options.createdTo);
    }
    if (options.contentId) {
        uri.addQueryParam('contentId', options.contentId);
    }
    return getUri<Promise<number>>(uri);
}