// SFDC SObject
import {IUser} from './user';
export interface IAccount_Note__c {

    Body__c: string;
    CreatedDate: string;
    LastModifiedDate: string;
    CreatedById: string;
    Retired__c: boolean;
    Subject__c: string;


    Account__c: string;
    Editable_Note__c: boolean;
    ExpirySetBy__c: string;
    Expiry_Date__c: string;
    Id: string;
    LastModifiedById: string;

    SortedType__c: string;

    SystemModstamp: string;
    Type__c: string;

    CreatedBy: IUser;
    LastModifiedBy: IUser;
}
// SFDC SObject
export interface IAccount {
    Id: string;
    AccountNumber: string;
    Name: string;
    Super_Region__c: boolean;
    Is_Active__c: boolean;
    Strategic__c: boolean;
    hasSRM__c: boolean;
    hasTAM__c: boolean;
    SpecialHandlingRequired__c: boolean;
    Escalate_to_home_geo_without_first_touch__c: boolean;
    Escalate_to_home_geo_with_1st_touch__c: boolean;
    Account_Status__c: string;
    Business_Hours__c: string;
    CannotAddAttachments__c: boolean;
    CaseCount__c: number;
    CSM__c: string;
    Hold_Support__c: boolean;
    Secured_Environment__c: boolean;
    SecureSupport__c: boolean;
    Subscription_Abuse__c: boolean;
    Tactical__c: boolean;
    Type: string;
    VHT_Score__c: number;
    Watchlist__c: string;

    AccountNoteList__r: Array<IAccount_Note__c>;
}