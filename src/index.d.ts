import {ICase_Comment__c, ICase_Comment__c_fields} from './models/case';

declare namespace hydrajs {
    namespace kase {
        export function getComments(caseNumber: string, fields?: ICase_Comment__c_fields): Promise<Array<ICase_Comment__c>>;
    }
}

export default hydrajs;
