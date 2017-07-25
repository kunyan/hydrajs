import {IContact}               from './contact';
import {IUser}                  from './user';
import {IBugzillaComment}       from './bugzilla';

// Used for making a new comment or updating a comment
export interface ICaseComment {
    id?: string;
    bugzillaCommentId?: string;
    caseCommentCreatedDayOfWeek?: string;
    caseCommentCreatedHourOfDay?: number;
    caseNumber: string;
    caseCommentCreatedByLocation?: string;
    caseCommentId?: string; // This appears to always return blank, just use id
    caseID?: string;
    commentBody: string;
    connectionReceivedId?: string;
    connectionSentId?: string;
    createdById?: string;
    createdDate?: string;
    createdByLink?: string;
    createdByContactID?: string;
    createdByText?: string;
    createdByUserID?: string;
    createdWithBug?: string;
    doNotChangeSBT: boolean;
    externalCaseCommentId?: string;
    externalHandlingSystem?: string;
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
    lastModifiedDate?: string;
    lastReferencedDate?: string;
    lastViewedDate?: string;
    lastModifiedByContactID?: string;
    lastModifiedByIdCustom?: string;
    lastModifiedByLink?: string;
    bzNumber?: number;
    lastModifiedByText?: string;
    lastModifiedByUser?: string;
    lastModifiedByUserID?: string;
    lastModifiedDateCustom?: string;
    lastVotedOnHelpsResolutionAt?: string;
    managerOfCreatedBy?: string;
    milestoneTargetDate?: string;
    name?: string;
    prsRecordID?: string;
    publishedDate?: string;
    publishedMs?: number;
    rhLocation?: string;
    representedInOtherSystemsAs?: string;
    roleOfCreatedBy?: string;
    sbt?: number;
    searchHelper?: string;
    sortDate?: string;
    systemModstamp?: string;
    targetDate?: string;

    bugzillaComment?: IBugzillaComment;
    createdByUser?: IUser;
    lastModifiedBy?: IUser;
    createdByContact?: IContact;
    lastModifiedByContact?: IContact;
}

export type TCaseCommentFields = Array<keyof ICaseComment>;