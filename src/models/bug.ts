// easy-sfdc
export interface IAPIBug {
    bugzillaNumber: string;
    caseNumber: string;
    caseURI: string;
    linkedAt: string;
    message: string;
    resourceType: string;
    resourceViewURI: string;
    returnCode: number;
    summary: string;
    warnings: string;
}

// SFDC SObject that is the record that reflects the link between the case and the bug
// (e.g.: Who linked, when did they link?)
export interface IBug {
    Account__c: string;
    BugzillaBug__c: string;
    Bugzilla_Link__c: string;
    Bugzilla_Number__c: string;
    Bug_Type__c: string;
    Case__c: string;
    CreatedById: string;
    CreatedDate: string;
    External_Id_Ref__c: string;
    External_Id__c: string;
    Id: string;
    IsDeleted: boolean;
    LastActivityDate: boolean;
    LastModifiedById: boolean;
    LastModifiedDate: boolean;
    Name: boolean;
    PrimaryBugId__c: boolean;
    RecordTypeId: boolean;
    RFE_Approval_Status__c: boolean;
    RFE__c: boolean;
    SystemModstamp: boolean;
}

export interface IBugzillaBug__c {
    Assigned_To__c: string;
    Blocks2__c: string;
    Blocks__c: string;
    BugzillaURL__c: string;
    Bugzilla_Keywords__c: string;
    Bugzilla_Link__c: string;
    Bugzilla_Number__c: string;
    Component__c: string;
    CreatedById: string;
    CreatedDate: string;
    Depends_On__c: string;
    Depends__c: string;
    Description__c: string;
    Dupe_of__c: string;
    Groups__c: string;
    Id: string;
    Is_Open__c: boolean;
    Is_Private__c: boolean;
    Keywords2__c: string;
    Keywords__c: string;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastReferencedDate: string;
    LastViewedDate: string;
    Last_Change_Time__c: number;
    Name: string;
    op_sys__c: string;
    OwnerId: string;
    Platform__c: string;
    Priority__c: string;
    Product__c: string;
    Resolution__c: string;
    Severity__c: string;
    Status__c: string;
    Summary__c: string;
    SystemModstamp: string;
    Target_Milestone__c: string;
    Version__c: string;
}