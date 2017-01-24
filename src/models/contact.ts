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

// SFDC SObject
export interface IContact {
    // isInterval?: boolean

    AccountId: string;
    AccountNumber__c: string;
    Email: string;
    Full_Name__c: string;
    Id: string;
    isInternal__c: boolean;
    Is_Active__c: boolean;
    Is_Org_Admin__c: boolean;
    ITARContact__c: boolean;
    Normalized_TZ__c: string;
    Phone: string;
    Region_Geo__c: string;
    SSO_Username__c: string;
    Timezone__c: string;
}
