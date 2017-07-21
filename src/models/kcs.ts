// easy-sfdc
export interface IAPIKcsLink {
    caseNumber: string;
    firstSuggestedDate: string;
    id: string;
    kbaseUrl: string;
    keywords: string;
    lastSuggestedDate: string;
    linkedBy: string;
    linkedDate: string;
    linkingMechanism: string;
    message: string;
    note: string;
    origin: string;
    relationshipType: string;
    returnCode: number;
    scoringAlgorithmVersion: number;
    solutionId: string;
    suggestedCount: number;
    suggestionRelevanceScore: number;
    title: string;
    tracebackUrl: string;
    warnings: string;
}

export interface IKcsLinkedResources {
    caseNumber: string;
    resourceId: string;
    resourceType: string;
    linked: boolean;
    resourceURI: string;
    resourceViewURI: string;
    title: string;
}

export interface IKcsResourceResult {
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
    externalCaseURI: string;
    linked: boolean;
    linkedAt: Date;
    linkedBy: string;
    message: string;
    note: string;
    origin: string;
    resourceId: string;
    resourceType: string;
    resourceURI: string;
    resourceViewURI: string;
    title: string;
    warnings: string[];
}