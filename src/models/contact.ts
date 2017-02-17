// easy-sfdc
export interface IAPIContact {
    accountList: string;
    canAccessAllAccounts: boolean;
    canAddAttachments: boolean;
    canSeeDashboard: boolean;
    defaultGroupName: string;
    defaultGroupNumber: string;
    firstName: string;
    hasChat: boolean;
    id: string;
    isInternal: boolean;
    isOrgAdmin: boolean;
    isSecured: boolean;
    isSecureSupportTech: boolean;
    lastName: string;
    message: string;
    name: string;
    returnCode: number;
    sessionId: string;
    ssoName: string;
    warnings: string;
}

// https://gitlab.cee.redhat.com/Workflow_Integration/cee-integration/blob/master/hydra-model/src/main/resources/contact.xsd
export interface IContact {
    // isInterval?: boolean
    id: string;
    // account: IAccount;
    accountId: string;
    canAddAttachments: boolean;
    contact24x7: boolean;
    contactNumber: string;
    defaultCaseGroup: string;
    // defaultCaseGroupDetails: ICaseFolder;
    doNotCall: boolean;
    email: string;
    firstName: string;
    firstNameCustom: string;
    fullNameCustom: string;
    hasOptedOutOfEmail: boolean;
    homePhone: string;
    itarContact: boolean;
    isEntitled: boolean;
    isActive: boolean;
    isOrgAdmin: boolean;
    lastName: string;
    lastNameCustom: string;
    manageSupportCases: boolean;
    mobilePhone: string;
    npsEligibility: boolean;
    name: string;
    noLongerAtCompany: boolean;
    normalizedTZ: string;
    otherPhone: string;
    phone: string;
    preferredLanguage: string;
    preferredMethodOfContact: string;
    primaryComment: string;
    primaryScore: number;
    rhnLoginName: string;
    regionGeo: string;
    reportsTo: IContact;
    reportsToId: string;
    srmContact: boolean;
    ssoUsername: string;
    salutation: string;
    secureSupportTech: boolean;
    surveyOptOut: boolean;
    tamContact: boolean;
    tamNewsletterSubscription: boolean;
    timezone: string;
    title: string;
    typeOfContact: string;
    isInternal: boolean;
}
