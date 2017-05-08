// easy-sfdc
export interface IAPICaseResourceLink {
    algorithmScore: number;
    analysisAlgorithm: string;
    analysisAlgorithmVersion: string;
    analysisCategory: string;
    analysisService: string;
    analysisServiceVersion: string;
    bucket: string;
    caseNumber: string;
    caseURI: string;
    client: string;
    clientVersion: string;
    display: string;
    externalCaseURI: string;
    firstSuggestedDate: string;
    isExact: boolean;
    keywords: string;
    lastSetIsExactAt: string;
    lastSetIsExactBySSOUsername: string;
    lastSuggestedDate: string;
    linked: boolean;
    linkedAt: string;
    linkedBy: string;
    luceneScore: number;
    maturityLevel: string;
    message: string;
    note: string;
    origin: string;
    pinnedAt: string;
    pinnedBy: string;
    resource: string;
    resourceId: string;
    resourceType: string;
    resourceURI: string;
    resourceViewURI: string;
    returnCode: number;
    scoringAlgorithmVersion: number;
    suggestedCount: number;
    suggestionRelevanceScore: string;
    title: string;
    tracebackUrl: string;
    warnings: string;
}

export type JiraInstance = 'JIRA-JBOSS';

export interface ICaseJiraLink {
    id: string;
    caseId: string;
    createdById: string;
    createdDate: string;
    createdAt: string;
    establishedBy: string;
    hasBeenPushedSuccessfully: boolean;
    hasBeenPushed: boolean;
    identifier: string;
    lastModifiedById: string;
    lastModifiedDate: string;
    name: string;
    overrideEntitlementCheck: boolean;
    rejectedAt: string;
    rejectedMessage: string;
    rejected: boolean;
    resourceKey: string;
    resourceURL?: string;
    systemInstance: JiraInstance;
    system: 'Jira';
    status?: string;
    title?: string;
    ticketReference?: string;
    visibilityLevel?: string;
}

export interface IApiNewJiraLink {
    linkParameter: {
        jiraIdentifier: string
    };
}
