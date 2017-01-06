import {IContact}   from "./contact"
import {IUser}      from "./user"

export interface ICase_Comment__c {
    // issueLink?: IIssueLinkResource

    CaseNumber__c: string
    Case_Comment_Id__c: string
    Case__c: string
    Comment_Body__c: string
    CreatedById: string
    CreatedDate: string
    createdWithBug__c: string
    Created_By_Contact__c: string
    Created_By_Link__c: string
    Created_By_Text__c: string
    Created_By_User__c: string
    Created_By__c: string
    Do_Not_Change_SBT__c: boolean
    From_Bug__c: string
    Hours_Worked__c: number
    Id: string
    InBreach__c: boolean
    Is_Public__c: boolean
    LastModifiedById: string
    LastModifiedDate: string
    LastReferencedDate: string
    Last_Modified_By_Contact__c: string
    Last_Modified_By_Id__c: string
    Last_Modified_By_Link__c: string
    Last_Modified_By_Text__c: string
    Last_Modified_By_User__c: string
    Last_Modified_By__c: string
    Last_Modified_Date__c: string
    Manager_of_Created_By__c: string
    MilestoneTargetDate__c: string
    Name: string
    Role_of_Created_By__c: string
    SBT__c: number
    Sort_Date__c: string
    TargetDate__c: string

    Created_By_User__r?: IUser
    Last_Modified_By_User__r?: IUser
    Created_By_Contact__r?: IContact
    Last_Modified_By_Contact__r: IContact
}

// Not sure Typescript can elegantly handle nested keyof references, hardcode for now
interface ICase_Comment__c_nested {
    'Created_By_User__r.Id': string
    'Created_By_User__r.Full_Name__c': string
    'Last_Modified_By_User__r.Id': string
    'Last_Modified_By_User__r.Full_Name__c': string
    'Created_By_Contact__r.Id': string
    'Created_By_Contact__r.Full_Name__c': string
    'Last_Modified_By_Contact__r.Id': string
    'Last_Modified_By_Contact__r.Full_Name__c': string
}

export type ICase_Comment__c_fields = Array<keyof ICase_Comment__c | keyof ICase_Comment__c_nested>
