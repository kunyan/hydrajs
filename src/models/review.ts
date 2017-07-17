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
    id: number;
    createdBy: string;
    createdAt: string;
    contentId: string; // ex. caseNumber
    questionSets: IReviewQuestionsContainer[];
}

// The below pertains to questions
export interface IReviewResponse {
    items: IReviewQuestionsContainer[];
}

export interface IReviewQuestionsContainer {
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
    text: string;
    pointValue?: number;
    comment?: string;
}

// The below pertains to making a new review
export interface IReviewPayloadAnswer {
    id: number;
    comment: string;
}

export interface IReviewPayload {
    contentId: string; // caseNumber
    questionSets: IReviewQuestionsContainer[];
}
