import {
    ICase_Comment__c,
    ICase_Comment__c_fields,
    IApiComment
} from './models/comment';
import {
    InsightsResult,
    InsightsRule,
    RuleIds
} from './models/insights';

declare namespace hydrajs {
    namespace kase {
        export function getComments(caseNumber: string, fields?: ICase_Comment__c_fields): Promise<Array<ICase_Comment__c>>;
        export function upsertComment(apiComment: IApiComment): Promise<IApiComment>;
    },
    namespace insights {
        export function runInsights(caseNumber: string, attachmentId: string): InsightsResult;
        export function getInsightsRules(ruleIds?: RuleIds): Promise<Array<InsightsRule>>;
    }
}

export default hydrajs;
