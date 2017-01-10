import {ICase_Comment__c, ICase_Comment__c_fields} from "./models/case";

export = hydrajs;
export as namespace hydrajs;

declare module hydrajs {

    module kase {
        export function getCaseComments(caseNumber: string, fields?: ICase_Comment__c_fields): Promise<Array<ICase_Comment__c>>;
    }
}
