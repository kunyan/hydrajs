// import {ICase_Comment__c, ICase_Comment__c_fields} from "./models/case";
// import {IContact}   from "./models/contact"
// import {IUser}      from "./models/user"



export = hydrajs;

export as namespace hydrajs;

declare module hydrajs {
    interface IContact {
        // isInterval?: boolean

        AccountId: string
        AccountNumber__c: string
        Email: string
        Full_Name__c: string
        Id: string
        isInternal__c: boolean
        Is_Active__c: boolean
        Is_Org_Admin__c: boolean
        ITARContact__c: boolean
        Normalized_TZ__c: string
        Phone: string
        Region_Geo__c: string
        SSO_Username__c: string
        Timezone__c: string
    }

    interface IUser {
        AccountId: string
        AccountNumber__c: string
        Alias: string
        bomgar__Bomgar_Username__c: string
        Bugzilla_ID__c: string
        CallCenterId: string
        CommunityNickname: string
        Duty_Manager__c: string
        Email: string
        FirstName: string
        First_Name__c: string
        Full_Name__c: string
        Full_Title__c: string
        GenesysUsername__c: string
        GSS_Costcenter_Name__c: string
        Id: string
        In_GSS__c: boolean
        IRC_Nick__c: string
        IsActive: boolean
        ITARUser__c: boolean
        KCS_Group__c: string
        KerberosName__c: string
        LanguageLocaleKey: string
        LastName: string
        Last_Name__c: string
        LocaleSidKey: string
        ManagerId: string
        Name: string
        Office_Location__c: string
        Out_Of_Office_Changed_By__c: string
        Out_Of_Office_changed_on__c: string
        Out_Of_Office__c: string
        Redhat_com_Email_Address__c: string
        Region__c: string
        Signature: string
        Signature__c: string
        SSO_Username__c: string
        Super_Region__c: string
        TimeZoneSidKey: string
        Title: string
        Username: string
    }

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

    export function getCaseComments(caseNumber: string, fields?: ICase_Comment__c_fields): Promise<Array<ICase_Comment__c>>;
}
