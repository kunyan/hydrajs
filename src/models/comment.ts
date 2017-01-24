import {IContact}               from './contact';
import {IUser}                  from './user';
import {IBugzillaComment__c}    from './bugzilla';

// Used for making a new comment or updating a comment
// easy-sfdc
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

// SFDC SObject
export interface ICase_Comment__c {
    External_Id__c: string; // Bugzilla Comment External Id
    CaseNumber__c: string;
    Case_Comment_Id__c: string;
    Case__c: string;
    Comment_Body__c: string;
    CreatedById: string;
    CreatedDate: string;
    createdWithBug__c: string;
    Created_By_Contact__c: string;
    Created_By_Link__c: string;
    Created_By_Text__c: string;
    Created_By_User__c: string;
    Created_By__c: string;
    Do_Not_Change_SBT__c: boolean;
    From_Bug__c: string;
    Hours_Worked__c: number;
    Id: string;
    InBreach__c: boolean;
    Is_Public__c: boolean;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastReferencedDate: string;
    Last_Modified_By_Contact__c: string;
    Last_Modified_By_Id__c: string;
    Last_Modified_By_Link__c: string;
    Last_Modified_By_Text__c: string;
    Last_Modified_By_User__c: string;
    Last_Modified_By__c: string;
    Last_Modified_Date__c: string;
    Manager_of_Created_By__c: string;
    MilestoneTargetDate__c: string;
    Name: string;
    Role_of_Created_By__c: string;
    SBT__c: number;
    Sort_Date__c: string;
    TargetDate__c: string;

    Bugzilla_Comment__r?: IBugzillaComment__c;
    Created_By_User__r?: IUser;
    Last_Modified_By_User__r?: IUser;
    Created_By_Contact__r?: IContact;
    Last_Modified_By_Contact__r: IContact;
}

// Not sure Typescript can elegantly handle nested keyof references, hard code for now.  While verbose, the primary
// benefit of defining this is to allow for typed field integrity when performing API calls against Hydra
interface ICase_Comment__c_nested {
    'Created_By_User__r.Id': string;
    'Created_By_User__r.Full_Name__c': string;
    'Created_By_User__r.SSO_Username__c': string;
    'Created_By_User__r.Email': string;
    'Created_By_User__r.Phone': string;
    'Created_By_User__r.TimezoneSidKey': string;
    'Last_Modified_By_User__r.Id': string;
    'Last_Modified_By_User__r.Full_Name__c': string;
    'Last_Modified_By_User__r.SSO_Username__c': string;
    'Last_Modified_By_User__r.Email': string;
    'Last_Modified_By_User__r.Phone': string;
    'Last_Modified_By_User__r.TimezoneSidKey': string;
    'Created_By_Contact__r.Id': string;
    'Created_By_Contact__r.Full_Name__c': string;
    'Created_By_Contact__r.SSO_Username__c': string;
    'Created_By_Contact__r.Email': string;
    'Created_By_Contact__r.Phone': string;
    'Created_By_Contact__r.Timezone__c': string;
    'Last_Modified_By_Contact__r.Id': string;
    'Last_Modified_By_Contact__r.Full_Name__c': string;
    'Last_Modified_By_Contact__r.SSO_Username__c': string;
    'Last_Modified_By_Contact__r.Email': string;
    'Last_Modified_By_Contact__r.Phone': string;
    'Last_Modified_By_Contact__r.Timezone__c': string;
}

export type ICase_Comment__c_fields = Array<keyof ICase_Comment__c | keyof ICase_Comment__c_nested>;
