import { ICaseComment }     from './comment';
import { IUser }            from './user';

export interface IExternalTracker {
    id: string;
    caseId: string;
    closedAt: string;
    collaborationCommentId: string;
    collaborationComment: ICaseComment;
    createdBy: IUser;
    createdById: string;
    createdDate: string;
    createdAt: string;
    deletedAt: string;
    deletedByName: string;
    description: string;
    eligibilityKeyValue: string;
    establishedBy: string;
    hasBeenPushedSuccessfully: boolean;
    hasBeenPushed: boolean;
    identifier: string;
    lastActivityDate: string;
    lastModifiedBy: IUser;
    lastModifiedById: string;
    lastModifiedDate: string;
    lastReferencedDate: string;
    lastViewedDate: string;
    lastPushRequest: string;
    liveID: string;
    name: string;
    overrideEntitlementCheck: boolean;
    productID: string;
    productName: string;
    rejectedAt: string;
    rejectedMessage: string;
    rejected: boolean;
    resourceKey: string;
    resourceURL: string;
    severity: string;
    solveCallingCountry: string;
    status: string;
    supportTopicID: string;
    supportTopicName: string;
    systemInstance: string;
    system: string;
    ticketReference: string;
    title: string;
    visibilityLevel: string;
}

export interface IExternalTrackerUpdate {
    id: string;
    body: string;
    caseId: string;
    createdBy: IUser;
    createdById: string;
    createdDate: string;
    externalIdentifier: string;
    externalTrackerId: string;
    externalTracker: IExternalTracker;
    identifier: string;
    lastActivityDate: string;
    lastModifiedBy: IUser;
    lastModifiedById: string;
    lastModifiedDate: string;
    name: string;
    originatingSystemInstance: string;
    originatingSystemLastUpdatedAt: string;
    originatingSystem: string;
    partnerCookie: string;
    type: string;
    updateBy: string;
    updateReference: string;
    visibility: string;
}

export type TExternalTrackerFields = Array<keyof IExternalTracker>;
export type TExternalTrackerUpdateFields = Array<keyof IExternalTrackerUpdate>;