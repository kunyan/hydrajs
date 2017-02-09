import { ICase_Comment__c, ICase_Comment__c_fields, IAPIComment } from './models/comment';
import { ICase, ICase_fields } from './models/case';

declare namespace hydrajs {
    namespace kase {
        export function getComments(caseNumber: string, fields?: ICase_Comment__c_fields): Promise<Array<ICase_Comment__c>>;
        export function upsertComment(apiComment: IAPIComment): Promise<IAPIComment>;
        export function getCase(caseId: string, fields?: ICase_fields): Promise<ICase>;
    }

    namespace skedge {
        export function getAllShiftMetadata(): Promise<Array<IShiftMetadata>>;
    }
}

export default hydrajs;
