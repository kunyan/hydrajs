import {getUri} from '../utils/fetch';
import Env from '../utils/env';
import {ICase, ICase_fields} from '../models/case';
import {ICaseJiraLink} from '../models/resource';
import {Fields} from '../models/general';

export function getCase(caseId: string, fields?: ICase_fields): Promise<ICase> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/case/${caseId}`);
    if (fields && fields.length > 0) {
        uri.addQueryParam('fields', fields.join(','));
    }
    return getUri<ICase>(uri);
}

export function getLinkedJiras(caseId: string, fields?: Fields<ICaseJiraLink>): Promise<Array<ICaseJiraLink>> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/case/${caseId}/jiras`);
    if (fields && fields.length > 0) {
        uri.addQueryParam('fields', fields.join(','));
    }
    return getUri<Array<ICaseJiraLink>>(uri);
}

