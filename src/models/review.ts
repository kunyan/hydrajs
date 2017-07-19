export type TQualityIndexType  = 'cqi' | 'sqi';

export interface IReviewOptions {
    qualityIndexType: TQualityIndexType;
    userId?: string;
    createdFrom?: string;
    createdTo?: string;
    contentId?: string;
}

// Returned when getting existing reviews from a case or solution
export interface IReview {
    id?: number;
    createdBy?: string; // sfdc id
    createdAt?: number; // ex. unix timestamp: 1500462978000
    contentId: string; // ex. caseNumber
    questionSets: IReviewQuestionSet[];
}

// The below pertains to questions
export interface IReviewResponse {
    items: IReviewQuestionSet[];
}

export interface IReviewQuestionDependencyResponse {
    items: IReviewQuestionDependency[];
}

export interface IReviewQuestionDependency {
    answerId: number;
    questionId: number;
}

export interface IReviewQuestionSet {
    id: number;
    name: string; // FY15
    active: boolean;
    comment?: string; // available when fetching questions, but missing when fetching reviews.
    questions: IReviewQuestion[];
}

export interface IReviewQuestion {
    id: number;
    text: string;
    description: string;
    maxPointValue: number;
    active: boolean;
    answers: IReviewAnswer[];
}

export interface IReviewAnswer {
    id: number;
    text?: string;
    pointValue?: number;
    comment?: string;
}