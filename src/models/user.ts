// easy-sfdc
export interface IAPITeamMember {
    name: string;
    role: string;
    ssoName: string;
}

// SFDC SObject
export interface IUser {
    AccountId: string;
    AccountNumber__c: string;
    Alias: string;
    bomgar__Bomgar_Username__c: string;
    Bugzilla_ID__c: string;
    CallCenterId: string;
    CommunityNickname: string;
    Duty_Manager__c: string;
    Email: string;
    FirstName: string;
    First_Name__c: string;
    Full_Name__c: string;
    Full_Title__c: string;
    GenesysUsername__c: string;
    GSS_Costcenter_Name__c: string;
    Id: string;
    In_GSS__c: boolean;
    IRC_Nick__c: string;
    IsActive: boolean;
    ITARUser__c: boolean;
    KCS_Group__c: string;
    KerberosName__c: string;
    LanguageLocaleKey: string;
    LastName: string;
    Last_Name__c: string;
    LocaleSidKey: string;
    ManagerId: string;
    Name: string;
    Office_Location__c: string;
    Out_Of_Office_Changed_By__c: string;
    Out_Of_Office_changed_on__c: string;
    Out_Of_Office__c: string;
    Redhat_com_Email_Address__c: string;
    Region__c: string;
    Signature: string;
    Signature__c: string;
    SSO_Username__c: string;
    Super_Region__c: string;
    TimeZoneSidKey: string;
    Title: string;
    Username: string;
}

// SFDC SObject
export interface IRHAssociate__c {
    Case__c: string;
    Country__c: string;
    CreatedById: string;
    CreatedDate: string;
    Id: string;
    IsDeleted: boolean;
    LastModifiedById: string;
    LastModifiedDate: string;
    Managed_From__c: string;
    Name: string;
    Office_Status__c: string;
    OwnerId: string;
    RHAT_Location__c: string;
    Role__c: string;
    User__c: string;
}
