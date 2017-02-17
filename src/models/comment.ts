import {IContact}               from './contact';
import {IUser}                  from './user';
import {IBugzillaComment}       from './bugzilla';

// Used for making a new comment or updating a comment
export interface ICaseComment {
    id?: string;
    bugzillaCommentId?: string;
    bugzillaComment?: IBugzillaComment;
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
    createdByUser?: string;
    createdByUserID?: string;
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
    lastModifiedDate?: string;
    lastReferencedDate?: string;
    lastViewedDate?: string;
    lastModifiedByContactID?: string;
    lastModifiedByIdCustom?: string;
    lastModifiedByLink?: string;
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

    createdBy?: IUser;
    lastModifiedBy?: IUser;
    createdByContact?: IContact;
    lastModifiedByContact?: IContact;
}

// Not sure Typescript can elegantly handle nested keyof references, hard code for now.  While verbose, the primary
// benefit of defining this is to allow for typed field integrity when performing API calls against Hydra
interface ICaseCommentNested {
    'createdByUser.id': string;
    'createdByUser.fullName': string;
    'createdByUser.ssoUsername': string;
    'createdByUser.email': string;
    'createdByUser.phone': string;
    // 'createdByUser.TimezoneSidKey': string;
    'lastModifiedByUser.id': string;
    'lastModifiedByUser.fullName': string;
    'lastModifiedByUser.ssoUsername': string;
    'lastModifiedByUser.email': string;
    'lastModifiedByUser.phone': string;
    // 'lastModifiedByUser.TimezoneSidKey': string;
    'createdByContact.id': string;
    'createdByContact.fullNameCustom': string;
    'createdByContact.ssoUsername': string;
    'createdByContact.email': string;
    'createdByContact.phone': string;
    'createdByContact.timezone': string;
    'lastModifiedByContact.id': string;
    'lastModifiedByContact.fullNameCustom': string;
    'lastModifiedByContact.ssoUsername': string;
    'lastModifiedByContact.email': string;
    'lastModifiedByContact.phone': string;
    'lastModifiedByContact.timezone': string;
}

export type ICaseCommentFields = Array<keyof ICaseComment | keyof ICaseCommentNested>;
