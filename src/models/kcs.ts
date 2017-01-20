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