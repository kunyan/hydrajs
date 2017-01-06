import { fetchUri } from '../utils/fetch'
import Env from '../utils/env'
import {ICase_Comment__c, ICase_Comment__c_fields} from '../models/case'

export function getCaseComments(caseNumber: string, fields?: ICase_Comment__c_fields): Promise<Array<ICase_Comment__c>> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/case/${caseNumber}/comments`);
    if (fields && fields.length > 0) {
        uri.addQueryParam('fields', fields.join(','))
    }
    return fetchUri<Array<ICase_Comment__c>>(uri);
}
