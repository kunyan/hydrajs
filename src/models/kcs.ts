import { IArrayResponse } from './general';

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

export interface IKcsProduct {
    product: string[];
}

export interface ICategory {
    category: string[];
}

export interface ITag {
    tag: string[];
}

export interface ISbr {
    sbr: string[];
}

export interface IComponents {
    component: string[];
}

export interface ITextHtml {
    text?: string;
    html?: string;
}

export interface IKcsSolution {
    id: string;
    teaser: boolean;
    title: string;
    language: string;
    authorSSOName: string;
    lastModifiedBySSOName: string;
    tnid: number;
    viewURI: string;
    issue: ITextHtml; // actual xsd has tns:KCSComponents
    environment: ITextHtml;
    components: IArrayResponse<string>;
    tags: IArrayResponse<string>;
    products: IArrayResponse<string>;
    categories: IArrayResponse<string>;
    resolution: ITextHtml;
    rootCause: ITextHtml;
    diagnosticSteps: ITextHtml;
    privateNotes: ITextHtml;
    hasPublishedRevision: boolean;
    currentModerationState: string;
    moderationState: string;
    sbrs: IArrayResponse<string>;
    isLocked: boolean;
    lockedBy: string;
    lockedAt: string;
    lockExpiresAt: string;
    accessState: string;
    KCSState: string;
    lastModifiedDate: string;
    createdDate: string;
    // Custom fields.
    type: 'Solution'
}