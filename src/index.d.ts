import { ICaseCommentFields, ICaseComment }         from './models/comment';
import {  ICase, ICase_fields }                     from './models/case';
import { IShiftMetadata }                           from './models/skedge/shiftMetadata';
import { IRoleMetadata }                            from './models/skedge/roleMetadata';
import { IUserShift }                               from './models/skedge/userShift';
import { IUserShiftFilter }                         from './models/skedge/userShiftFilter';
import { ICertification }                           from './models/certification/certification';
import { IVendorProduct }                           from './models/certification/vendorProduct';
import { InsightsResult, InsightsRule }    from './models/insights';
import { IGroupMetadata }                           from './models/skedge/groupMetadata';
import { ITemplateMetadata }                        from './models/skedge/templateMetadata';

declare namespace hydrajs {
    namespace kase {
        export function getComments(caseNumber: string, fields?: ICaseCommentFields, limit?: number): Promise<Array<ICaseComment>>;
        export function upsertComment(apiComment: ICaseComment): Promise<ICaseComment>;
        export function getCase(caseId: string, fields?: ICase_fields): Promise<ICase>;
    }
    namespace insights {
        export function runInsights(caseNumber: string, attachmentId: string): Promise<InsightsResult>;
        export function getInsightsRules(ruleIds?: string[]): Promise<Array<InsightsRule>>;
    }
    namespace skedge {
        export function getAllShiftMetadatas(): Promise<IShiftMetadata[]>;
        export function getAllRoleMetadatas(): Promise<IRoleMetadata[]>;
        export function getAllTemplateMetadatas(): Promise<ITemplateMetadata[]>;
        export function getAllShiftsForUsers(): Promise<IUserShift[]>;
        export function getShiftsForUserFilters(filters: IUserShiftFilter): Promise<IUserShift[]>;
        export function postShiftsForUsers(userShifts: IUserShift[]): Promise<IUserShift[]>;
        export function deleteShiftByShiftId(shiftId: number): Promise<any>;
        export function deleteShiftForUsers(userShifts: IUserShift[]): Promise<any>;
        export function getAllGroupMetadatas(): Promise<IGroupMetadata[]>;
        export function getGroupsForOwner(filters: IGroupMetadata): Promise<IGroupMetadata[]>;
        export function postGroupDetails(groups: IGroupMetadata): Promise<IGroupMetadata>;
        export function updateGroupDetails(groups: IGroupMetadata, groupId: number): Promise<IGroupMetadata>;
        export function deleteGroupByGroupId(groupId: number): Promise<IGroupMetadata>;
    }
    namespace certification {
        export function getCertification(caseId: string): Promise<ICertification>;
        export function getCertifications(vendorProductPortalId: string): Promise<ICertification[]>;
        export function getVendorProduct(vendorProductPortalId: string): Promise<IVendorProduct>;
    }
}

export default hydrajs;
