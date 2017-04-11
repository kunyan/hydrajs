import { ICaseComment }                             from './models/comment';
import { ICase, ICase_fields }                      from './models/case';
import {IShiftMetadata, ICreateShiftMetadata}                           from './models/skedge/shiftMetadata';
import { IRoleMetadata }                            from './models/skedge/roleMetadata';
import { IUserShift }                               from './models/skedge/userShift';
import { IUserShiftFilter }                         from './models/skedge/userShiftFilter';
import { ICertification }                           from './models/certification/certification';
import { IVendorProduct }                           from './models/certification/vendorProduct';
import { ITestClass }                               from './models/certification/testClass';
import { InsightsResult, InsightsRule }             from './models/insights';
import { IGroupMetadata }                           from './models/skedge/groupMetadata';
import { ITemplateMetadata }                        from './models/skedge/templateMetadata';

declare namespace hydrajs {
    namespace kase {
        export function getComments(caseNumber: string, fields?: Array<string>, limit?: number): Promise<Array<ICaseComment>>;
        export function upsertComment(apiComment: ICaseComment): Promise<ICaseComment>;
        export function getCase(caseId: string, fields?: ICase_fields): Promise<ICase>;
    }
    namespace insights {
        export function runInsights(caseNumber: string, attachmentId: string): Promise<InsightsResult>;
        export function getInsightsRules(ruleIds?: string[]): Promise<Array<InsightsRule>>;
    }
    namespace skedge {
        export function getAllShiftMetadatas(): Promise<IShiftMetadata[]>;
        export function createShiftMetadata(shiftMetadata: ICreateShiftMetadata): Promise<IShiftMetadata>;
        export function updateShiftMetadata(shiftId: string, shiftMetadata: ICreateShiftMetadata): Promise<IShiftMetadata>;
        export function deleteShiftMetadata(shiftId: string): Promise<any>;
        export function getAllRoleMetadatas(): Promise<IRoleMetadata[]>;
        export function getAllTemplateMetadatas(): Promise<ITemplateMetadata[]>;
        export function getTemplateMetadatasForUser(userId: string): Promise<ITemplateMetadata[]>;
        export function postCustomTemplateForUser(template: ITemplateMetadata): Promise<ITemplateMetadata>;
        export function getAllShiftsForUsers(): Promise<IUserShift[]>;
        export function getShiftsForUserFilters(filters: IUserShiftFilter): Promise<IUserShift[]>;
        export function postShiftsForUsers(userShifts: IUserShift[]): Promise<IUserShift[]>;
        export function editShiftForUser(shiftRecordId: number, updatedShiftDetails: IUserShift): Promise<IUserShift>;
        export function deleteShiftByShiftId(shiftId: number): Promise<any>;
        export function deleteShiftForUsers(userShifts: IUserShiftFilter): Promise<any>;
        export function getAllGroupMetadatas(): Promise<IGroupMetadata[]>;
        export function getGroupsForOwner(filters: IGroupMetadata): Promise<IGroupMetadata[]>;
        export function postGroupDetails(groups: IGroupMetadata): Promise<IGroupMetadata>;
        export function updateGroupDetails(groups: IGroupMetadata, groupId: number): Promise<IGroupMetadata>;
        export function deleteGroupByGroupId(groupId: number): Promise<IGroupMetadata>;
    }
    namespace certification {
        export function getCertification(caseNumber: string | number): Promise<ICertification>;
        export function createCertification(certification: ICertification): Promise<ICertification>;
        export function updateCertification(certification: ICertification): Promise<ICertification>;
        export function getCertifications(vendorProductPortalId: string | number): Promise<ICertification[]>;
        export function getVendorProduct(vendorProductPortalId: string | number): Promise<IVendorProduct>;
        export function updateVendorProduct(vendorProduct: IVendorProduct): Promise<IVendorProduct>;
        export function createVendorProduct(vendorProduct: IVendorProduct): Promise<IVendorProduct>;
        export function getTestClasses(productType: string): Promise<ITestClass[]>;
    }
}

export default hydrajs;
