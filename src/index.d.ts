import { ICaseCommentFields, ICaseComment } from './models/comment';
import { ICase, ICase_fields } from './models/case';
import { InsightsResult, InsightsRule, RuleIds } from './models/insights';
import { IShiftMetadata } from './models/skedge/shiftMetadata';

declare namespace hydrajs {
    namespace kase {
        export function getComments(caseNumber: string, fields?: ICaseCommentFields, limit?: number): Promise<Array<ICaseComment>>;
        export function upsertComment(apiComment: ICaseComment): Promise<ICaseComment>;
        export function getCase(caseId: string, fields?: ICase_fields): Promise<ICase>;
    }
    namespace insights {
        export function runInsights(caseNumber: string, attachmentId: string): Promise<InsightsResult>;
        export function getInsightsRules(ruleIds?: RuleIds): Promise<Array<InsightsRule>>;
    }
    namespace skedge {
        export function getAllShiftMetadatas(): Promise<Array<IShiftMetadata>>;
    }
}

export default hydrajs;
