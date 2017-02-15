import {IContact}               from './contact';
import {IUser}                  from './user';
import {IBugzillaComment__c}    from './bugzilla';

export interface IAPIComment {
    caseNumber: string;
    id?: string; // Set when updating a comment
    text: string;
    doNotChangeSBT: boolean;
    isPublic: boolean;
    hoursWorked?: number;

    createdBy?: string;
    createdDate?: any;
    isDraft?: boolean;
    lastModifiedBy?: string;
    lastModifiedDate?: any;
    message?: string;
    publishedDate?: any;
    returnCode?: number;
    warnings?: string;
}

// Used for making a new comment or updating a comment
export interface IHydraCaseComment {
    commentId?: string;
    bugzillaCommentId?: string;
    caseCommentCreatedDayOfWeek?: string;
    caseCommentCreatedHourOfDay?: number;
    caseNumber: string;
    caseCommentCreatedByLocation?: string;
    caseCommentId?: string;
    caseID?: string;
    commentBody: string;
    connectionReceivedId?: string;
    connectionSentId?: string;
    createdById?: string;
    createdDate?: any;
    createdByLink?: string;
    createdByContactID?: string;
    createdByText?: string;
    createdByUserID?: string;
    createdBy?: string;
    createdWithBug?: string;
    doNotChangeSBT: boolean;
    externalCaseCommentId?: string;
    externalCommentHandlingSystem?: string;
    externalId?: string;
    externalTrackerToPartnerPrivateMap?: string;
    fromBug?: string;
    helpsResolutionScore?: number;
    hoursWorked?: number;
    inBreach?: boolean;
    isDeleted?: boolean;
    isDraft?: boolean;
    isPublic: boolean;
    lastModifiedById?: string;
    lastModifiedDate?: any;
    lastReferencedDate?: any;
    lastViewedDate?: any;
    lastModifiedByContactID?: string;
    lastModifiedByIdCustom?: string;
    lastModifiedByLink?: string;
    lastModifiedByText?: string;
    lastModifiedByUserID?: string;
    lastModifiedBy?: string;
    lastModifiedDateCustom?: any;
    lastVotedOnHelpsResolutionAt?: string;
    managerOfCreatedBy?: string;
    milestoneTargetDate?: any;
    name?: string;
    prsRecordID?: string;
    publishedDate?: any;
    publishedMs?: number;
    rhLocation?: string;
    representedInOtherSystemsAs?: string;
    roleOfCreatedBy?: string;
    sbt?: number;
    searchHelper?: string;
    sortDate?: any;
    systemModstamp?: string;
    targetDate?: any;
}

export type IHydraCaseCommentFields = Array<keyof IHydraCaseComment>;
