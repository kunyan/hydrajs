import {ICaseCommentFields, ICaseComment}   from './models/comment';
import {ICase, ICase_fields}                from './models/case';
import {IShiftMetadata}                     from './models/skedge/shiftMetadata';
import {IRoleMetadata}                      from './models/skedge/roleMetadata';
import {IUserShift}                         from './models/skedge/userShift';
import {IUserShiftFilter}                   from './models/skedge/userShiftFilter';
import { InsightsResult, InsightsRule, RuleIds } from './models/insights';

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
        export function getAllRoleMetadatas(): Promise<Array<IRoleMetadata>>;
        export function getAllShiftsForUsers(): Promise<IUserShift[]>;
        export function getShiftsForUserFilters(filters: IUserShiftFilter): Promise<IUserShift[]>;
        export function postShiftsForUsers(userShifts: IUserShift[]): Promise<IUserShift[]>;
        export function deleteShiftByShiftId(shiftId: number): Promise<any>;
    }
}

export default hydrajs;
