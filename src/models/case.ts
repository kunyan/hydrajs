import {IContact}      from './contact';
import {IUser}         from './user';
import {IBug}          from './bug';
import {IAccount}      from './account';

// Used for making a new comment or updating a comment
// https://gitlab.cee.redhat.com/Workflow_Integration/cee-integration/blob/master/hydra-model/src/main/resources/case.xsd
export interface ICase {
    account: IAccount;
    accountBugzillaConfidentialGroup: string;
    accountId: string;
    accountNumber: string;
    accountNumberRef: string;
    actionPlan: string;
    actionPlanLastUpdated: string;
    actionPlanLastUpdatedByUser: IUser;
    actionPlanLastUpdatedByUserId: string;
    alternateId: string;
    amcFinalRemedyProvided: boolean;
    amcTemporaryRemedyProvided: boolean;
    apiMessage: string;
    apiReturnCode: number;
    apiTags: string[];
    apiWarnings: string[];
    assetId: string;
    automationEnabledForCaseComputed: boolean;
    bug: IBug;
    bugId: string;
    bugzillaLink: string;
    bugzillaNumber: string;
    bugzillaSummary: string;
    businessHoursId: string;
    caseAutomationEnabled: boolean;
    caseContact: string;
    caseCreatedDayOfWeek: string;
    caseCreatedHourOfDay: string;
    caseGroup: string;
    caseGroupId: string;
    caseLanguage: string;
    caseLink: string;
    caseNumber: string;
    caseOwner: IUser;
    caseOwnerId: string;
    caseOwnerIsTam: boolean;
    caseOwnerManagersEmail: string;
    caseOwnerSuperRegion: string;
    caseSummary: string;
    caseType: string;
    certArchitecture: string;
    certCategory: string;
    certPortalId: string;
    certProduct: string;
    certVendorName: string;
    certVendorPortalId: string;
    certVendorProductName: string;
    certVendorProductPortalId: string;
    certVersion: string;
    closeDate: string;
    closedDateGainsight: string;
    commentCount: number;
    company: string;
    connectionReceivedId: string;
    connectionSentId: string;
    contact: IContact;
    contactId: string;
    contactInfo24x7: string;
    contactLink: string;
    contactName: string;
    contactPreferredLanguage: string;
    contactSSOName: string;
    contributors: string;
    createdBy: IUser;
    createdByContact: IContact;
    createdByContactId: string;
    createdById: string;
    createdByLink: string;
    createdByName: string;
    createdBySSOName: string;
    createdByUser: IUser;
    createdByUserId: string;
    createdDate: string;
    createdDateGainsight: string;
    critSit: boolean;
    currentCaseOwnerManagersEmail: string;
    customerCaseNotes: string;
    customerEngagementScorecard: string;
    customerEscalation: boolean;
    customerSegment: number;
    description: string;
    emailAddress: string;
    enhancedSLA: boolean;
    entitlementId: string;
    entitlementNeedsAttention: boolean;
    entitlementState: string;
    environment: string;
    externalCaseHandlingSystems: string[];
    externalHandlingSystem: string;
    externalLock: boolean;
    externalLockBy: IUser;
    externalLockId: string;
    externalLockById: string;
    externalLockByName: string;
    externalLockDate: string;
    firstCaseInactivityWarningSentAt: string;
    fts: boolean;
    ftsHandoverReady: boolean;
    ftsRole: string;
    groupNumber: string;
    handledByAscension: boolean;
    hasCommentsUnreadByOwner: boolean;
    hasNewPublicComment: boolean;
    hasSelfServiceComments: boolean;
    highestSeverity: string;
    hostname: string;
    hotfixDelivered: boolean;
    hotfixDeliveredDate: string;
    hotfixRequestDate: string;
    hotfixRequested: boolean;
    hoursInCurrentStatus: number;
    hoursSinceCaseLastUpdated: number;
    hoursSinceLastCommentOfAnyType: number;
    hoursSinceLastPrivateComment: number;
    hoursSinceLastPublicComment: number;
    hxComment: string;
    hxDirection: string;
    hxHubId: string;
    hxId: string;
    hxIsEscalation: boolean;
    hxPartnerId: string;
    hxStatus: string;
    id: string;
    identifyingAddressCountry: string;
    initialServiceLevel: string;
    internalLastModifiedDate: string;
    internalPriority: string;
    internalStatus: string;
    isABRTCaseThatShouldRemainClosed: boolean;
    isCertification: boolean;
    isClosed: boolean;
    isDeleted: boolean;
    isEscalated: boolean;
    isPOC: boolean;
    isReviewed: boolean;
    isStopped: boolean;
    issue: string;
    itar: boolean;
    kickCase: string;
    lastBreach: string;
    lastClosedAt: string;
    lastETUUpdatedAt: string;
    lastEscalationAssociatedAt: string;
    lastEscalationUpdatedAt: string;
    lastModifiedBy: IUser;
    lastModifiedByContact: IContact;
    lastModifiedByContactId: string;
    lastModifiedById: string;
    lastModifiedByLink: string;
    lastModifiedByName: string;
    lastModifiedByUser: IUser;
    lastModifiedByUserId: string;
    lastModifiedDate: string;
    lastPrivateCommentDateTime: string;
    lastPublicAttachmentMs: number;
    lastPublicCaseUpdateContact: IContact;
    lastPublicCaseUpdateContactId: string;
    lastPublicCaseUpdateMs: number;
    lastPublicCaseUpdateUser: IUser;
    lastPublicCaseUpdateUserId: string;
    lastPublicCommentDateTime: string;
    lastPublicCommentPublishedMs: number;
    lastPublicUpdateBy: string;
    lastPublicUpdateDateDisplay: string;
    lastReferencedDate: string;
    lastStatusChange: string;
    lastUpdateDate: string;
    lastViewedDate: string;
    legacyId: string;
    legacySystem: string;
    linkToCaseInPortal: string;
    linkedResourceCount: number;
    linkedToRecommendationOnClosure: boolean;
    linkedToRecommendationOnClosureSet: boolean;
    ltrocClosed: boolean;
    ltrocClosedSet: boolean;
    manuallySetNoCSATSurvey: boolean;
    milestoneStatus: string;
    name: string;
    needsNewOwner: string;
    newTimestamp: string;
    noAutomationForAccount: boolean;
    noAutomationForCase: boolean;
    noAutomationForCaseGroup: boolean;
    normalizedServiceLevel: string;
    numberOfBreaches: number;
    origin: string;
    originalDescription: string;
    originalEnvironment: string;
    originalIssue: string;
    originalPeriodicityOfIssue: string;
    originalProduct: string;
    originalServiceLevel: string;
    originalSeverity: string;
    originalSubject: string;
    originalTimeFramesAndUrgency: string;
    originalVersion: string;
    ownerIRCNickname: string;
    ownerId: string;
    ownersManagersEmail: string;
    ownerOutOfOffice: string;
    parent: ICase;
    parentId: string;
    periodicityOfIssue: string;
    phone: string;
    priorityScore: number;
    priorityScoreExplanation: string;
    priorityScoreFormula: number;
    priorityScoreLastUpdateDate: string;
    isPrivate: boolean;
    privateCommentCount: boolean;
    proactive: boolean;
    product: string;
    productFamily: string;
    prsRecordId: string;
    publicComment: boolean;
    publicCommentCount: number;
    publicTSEComments: number;
    pushToPartner: string;
    reason: string;
    recordTypeId: string;
    redHatLogin: string;
    redHatLoginRef: string;
    refTagForEmails: string;
    relatedChanges: string;
    reliefAt: string;
    remoteSessionCount: number;
    reopenCount: number;
    requestManagementEscalation: boolean;
    resetSBTCount: number;
    resolution: string;
    resolutionDescription: string;
    resolvedAt: string;
    rhProductId: string;
    rhVersionId: string;
    sbrGroup: string;
    sbrGroups: string[];
    sbt: number;
    sbtState: string;
    searchHelper: string;
    secondCaseInactivityWarningSentAt: string;
    sendCSATSurvey: boolean;
    severity: string;
    slaExitDate: string;
    slaStartDate: string;
    srmFlag: boolean;
    status: string;
    stopStartDate: string;
    strategic: string;
    subject: string;
    summaryLastModifiedByUser: IUser;
    summaryLastModifiedByUserId: string;
    summaryLastUpdated: string;
    systemModstamp: string;
    tags: string;
    tamCase: boolean;
    targetDate: string;
    timeFramesAndUrgency: string;
    timeSinceCaseWasLastUpdated: number;
    totalDaysWoCollaboration: number;
    totalEscalation: number;
    translators: string;
    ttc: number;
    userAgent: string;
    version: string;
    vhtScore: number;
    waitingOnCallback: boolean;
}

export type ICase_fields = Array<keyof ICase>;
