// easy-sfdc
export interface IAPIChatTranscript {
    agentName: string;
    body: string;
    caseNumber: string;
    endedBy: string;
    endTime: string;
    id: string;
    message: string;
    requestTime: string;
    returnCode: number;
    ssoName: string;
    startTime: string;
    visitorName: string;
    warnings: string;
}

// SFDC SObject
export interface ILiveChatTranscript {
    AccountId: string;
    Account_Id_Formula__c: string;
    AverageResponseTimeOperator: number;
    AverageResponseTimeVisitor: number;
    Body: string;
    CaseId: string;
    CaseNumber__c: string;
    Chat_Duration__c: number;
    ContactId: string;
    Contact_Id_Formula__c: string;
    CreatedById: string;
    CreatedDate: string;
    EndedBy: string;
    EndTime: number;
    Id: string;
    IpAddress: string;
    IsDeleted: boolean;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastReferencedDate: string;
    LastViewedDate: string;
    LeadId: string;
    LiveChatButtonId: string;
    LiveChatDeploymentId: string;
    LiveChatVisitorId: string;
    Location: string;
    Name: string;
    OperatorMessageCount: number;
    OwnerId: string;
    Platform: string;
    ReferrerUri: string;
    RequestTime: number;
    SSO_Username__c: string;
    StartTime: number;
    Status: string;
    Time_to_Answer__c: number;
    UserAgent: string;
    VisitorMessageCount: number;
}
