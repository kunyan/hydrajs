import { TQualityIndexType } from './review';

export interface ICountOptions {
    qualityIndexType: TQualityIndexType;
    userId?: string;
    createdFrom?: string;
    createdTo?: string;
    contentId?: string;
}