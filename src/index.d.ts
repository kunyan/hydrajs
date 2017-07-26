import { ICaseComment }                            from './models/comment';
import { ICase, ICase_fields }                     from './models/case';
import { IShiftMetadata, ICreateShiftMetadata }    from './models/skedge/shiftMetadata';
import { IRoleMetadata }                           from './models/skedge/roleMetadata';
import { IUserShift }                              from './models/skedge/userShift';
import { IUserShiftFilter }                        from './models/skedge/userShiftFilter';
import { ICertification, IOpenStackCertification } from './models/certification/certification';
import { IVendorProduct }                          from './models/certification/vendorProduct';
import { ITestClass }                              from './models/certification/certificationTest';
import { IComponent }                              from './models/certification/component';
import { ITestPlan, ITestData }                    from './models/certification/certificationTest';
import { InsightsResult, InsightsRule }            from './models/insights';
import { IGroupMetadata }                          from './models/skedge/groupMetadata';
import { ITemplateMetadata }                       from './models/skedge/templateMetadata';
import { Fields, IArrayResponse }                  from './models/general';
import { ICaseJiraLink, IApiNewJiraLink }          from './models/resource';
import { ICaseEscalation }                         from './models/escalation';
import { IUser }                                   from './models/user';
import { KyceResult }                              from './models/kyce';
import { ICountOptions }                           from './models/count';
import { IKcsLinkedResources, IKcsResourceResult } from './models/kcs';
import { IProduct }                                from './models/product';
import { ISbr }                                    from './models/sbr';

import {
    TQualityIndexType,
    IReviewOptions,
    IReview,
    IReviewQuestionSet,
    IReviewResponse,
    IReviewQuestionDependencyResponse
} from './models/review';

import {
    IExternalTracker,
    IExternalTrackerUpdate,
} from './models/externalTracker';

import {
    ISolrQuery
} from './models/solr/solr';

declare namespace hydrajs {
    namespace general {
        export function health(): Promise<string>;
        export function hostname(): string;
    }
    namespace kase {
        export function getComments(caseNumber: string, fields?: Array<string>, limit?: number): Promise<Array<ICaseComment>>;
        export function upsertComment(apiComment: ICaseComment): Promise<ICaseComment>;
        export function getCase(caseId: string, fields?: ICase_fields): Promise<ICase>;
        export function getLinkedJiras(caseId: string, fields?: Fields<ICaseJiraLink>): Promise<Array<ICaseJiraLink>>;
        export function linkJiraToCase(caseId: string, newLink: IApiNewJiraLink): void;
        export function deleteJiraLinkFromCase(caseId: string, issueKey: string): void;
        export function getEscalations(caseId: string): Promise<Array<ICaseEscalation>>;
        namespace counts {
            export function articlesLinked(caseId: string): Promise<number>;
            export function bomgarSessions(caseId: string): Promise<number>;
            export function bugzillas(caseId: string): Promise<number>;
            export function caseHistory(caseId: string): Promise<number>;
            export function chatTranscripts(caseId: string): Promise<number>;
            export function comments(caseId: string): Promise<number>;
            export function escalationsClosed(caseId: string): Promise<number>;
            export function escalationsOpen(caseId: string): Promise<number>;
            export function fileAttachments(caseId: string): Promise<number>;
            export function jiras(caseId: string): Promise<number>;
            export function solutionsLinked(caseId: string): Promise<number>;
            export function teamMembers(caseId: string): Promise<number>;
            export function reviews(options: ICountOptions): Promise<number>;
        }
        export function getLanguages(): Promise<IArrayResponse<string[]>>;
        export function getSeverities(): Promise<IArrayResponse<string[]>>;
        export function getStatuses(): Promise<IArrayResponse<string[]>>;
        export function getTypes(): Promise<IArrayResponse<string[]>>;
        export function getCaseExternalTrackers(caseId: string): Promise<IExternalTracker[]>;
        export function getCaseExternalTrackerUpdates(caseId: string): Promise<IExternalTrackerUpdate[]>;
    }
    namespace insights {
        export function runInsights(caseNumber: string, attachmentId: string): Promise<InsightsResult>;
        export function getInsightsRules(ruleIds?: string[]): Promise<Array<InsightsRule>>;
    }
    namespace kyce {
        export function runKyce(attachmentId: string): Promise<KyceResult>;
    }
    namespace kcs {
        export function linkKcsResources(kcsLinkedResources: IKcsLinkedResources): Promise<IKcsResourceResult>;
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
        export function getCertification(caseNumber: string): Promise<ICertification>;
        export function createCertification(certification: ICertification): Promise<ICertification>;
        export function updateCertification(certification: ICertification): Promise<ICertification>;
        export function getOpenStackCertification<T>(caseNumber: string): Promise<IOpenStackCertification<T>>;
        export function createOpenStackCertification<T>(certification: IOpenStackCertification<T>): Promise<IOpenStackCertification<T>>;
        export function updateOpenStackCertification<T>(certification: IOpenStackCertification<T>): Promise<IOpenStackCertification<T>>;
        export function getCertifications(vendorProductPortalId: string | number): Promise<ICertification[]>;
        export function getVendorProduct(vendorProductPortalId: string | number): Promise<IVendorProduct>;
        export function updateVendorProduct(vendorProduct: IVendorProduct): Promise<IVendorProduct>;
        export function createVendorProduct(vendorProduct: IVendorProduct): Promise<IVendorProduct>;
        export function getTestClasses(productType: string): Promise<Array<ITestClass>>;
        export function getComponents(vendorProductPortalId: string | number): Promise<Array<IComponent>>;
        export function upsertComponents(vendorProductPortalId: string | number, components: Array<IComponent>): Promise<Array<IComponent>>;
        export function getCertificationTestPlans(caseNumber: string): Promise<Array<ITestPlan>>;
        export function upsertCertificationTestPlans(caseNumber: string, testplans: Array<ITestPlan>): Promise<Array<ITestPlan>>;
        export function getCertificationTestData(caseNumber: string): Promise<Array<ITestData>>;
    }
    namespace review {
        export function getQuestions(qualityIndexType: TQualityIndexType): Promise<IReviewResponse>;
        export function getKtQuestions(qualityIndexType: TQualityIndexType): Promise<IReviewQuestionDependencyResponse>;
        export function getReviews(options: IReviewOptions): Promise<IReviewResponse>;
        export function createReview(qualityIndexType: TQualityIndexType, review: IReview): Promise<IReview>;
    }
    namespace users {
        export function getUser(id: string): Promise<IUser>;
    }
    namespace products {
        export function getProducts(sso: string): Promise<IProduct[]>;
        export function getProductVersions(productName: string): Promise<IArrayResponse<string[]>>;
    }
    namespace sbrs {
        export function getSbrs(): Promise<IArrayResponse<ISbr[]>>;
        export function getSbr(sbrId: string): Promise<ISbr[]>;
    }
    namespace externalTrackers {
        export function getExternalTrackers(externalTrackerId: string, fields?: string[]): Promise<IExternalTracker[]>;
        export function getExternalTrackersUpdates(externalTrackerId: string, fields?: string[]): Promise<IExternalTrackerUpdate[]>;
    }
    namespace solr {
        export function getSolrAccess<T>(solrQuery: ISolrQuery): Promise<T>;
        export function getSolrCases<T>(solrQuery: ISolrQuery): Promise<T>;
    }
}

export default hydrajs;
