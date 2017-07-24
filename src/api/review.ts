import { getUri, postUri }  from '../utils/fetch';
import Env                  from '../utils/env';

import {
    IReview,
    IReviewResponse,
    TQualityIndexType,
    IReviewOptions,
    IReviewQuestionDependencyResponse
} from '../models/review';

export function getQuestions(qualityIndexType: TQualityIndexType): Promise<IReviewResponse> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/${qualityIndexType}/reviews/questions`);
    return getUri<Promise<IReviewResponse>>(uri);
}

export function getKtQuestions(qualityIndexType: TQualityIndexType): Promise<IReviewQuestionDependencyResponse> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/${qualityIndexType}/reviews/ktquestions`);
    return getUri<Promise<IReviewQuestionDependencyResponse>>(uri);
}

export function getReviews(options: IReviewOptions): Promise<IReviewResponse> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/${options.qualityIndexType}/reviews`);
    if (options.userId) {
        uri.addQueryParam('userId', options.userId);
    }
    if (options.createdFrom) {
        uri.addQueryParam('createdFrom', options.createdFrom);
    }
    if (options.createdTo) {
        uri.addQueryParam('createdTo', options.createdTo);
    }
    if (options.contentId) {
        uri.addQueryParam('contentId', options.contentId);
    }
    return getUri<Promise<IReviewResponse>>(uri);
}

export function createReview(qualityIndexType: TQualityIndexType, review: IReview): Promise<IReview> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/${qualityIndexType}/reviews`);
    return postUri<Promise<IReview>>(uri, review);
}