import { SolrDocumentKind }     from './solrDocumentType';
import { KcsDocumentState }     from './kcsDocumentState';

export interface ISolrQuery {
    q: string;
    fq?: string;
    start?: number;
    rows?: number;
    sort?: string;
    fl?: string;
}

export interface ISolrResponse<T> {
    response: {
        numFound: number;
        start: number;
        maxScore: number;
        // IKcsSolrDocument
        docs: T[];
    }
}

export interface ISolrDocument {
    documentKind: SolrDocumentKind;
    id: string;
}

export interface ISolrSolution extends ISolrDocument {
    documentKind: 'Solution';
    view_uri: string;
    uri: string;
    language: string;
    allTitle: string;
    lastModifiedDate: string;
    authorSSOName: string;
    lastModifiedBySSOName: string;
    hasPublishedRevision: string;
    createdDate: string;
    kcsState: string;
    ModerationState: string;
    accessState: KcsDocumentState;
    publishedTitle: string;
    caseCount: number;
    publication_state: string;
}

export interface ISolrArticle extends ISolrDocument {
    documentKind: 'Article';
    view_uri: string;
    uri: string;
    language: string;
    allTitle: string;
    lastModifiedDate: string;
    authorSSOName: string;
    lastModifiedBySSOName: string;
    hasPublishedRevision: string;
    ModerationState: string;
    accessState: KcsDocumentState;
    publishedTitle: string;
    caseCount: number;
}

export interface ISolrDocumentation extends ISolrDocument {
    documentKind: 'Documentation';
    view_uri: string;
    allTitle: string;
    language: string;
    lastModifiedDate: string;
    documentation_subtitle: string;
    documentation_product: string;
    documentation_version: string;
    documentation_book_version: string;
    documentation_formats: Array<string>;
    documentation_content_type: string;
}

export interface ISolrCve extends ISolrDocument {
    documentKind: 'Cve';
    view_uri: string;
    language: string;
    allTitle: string;
    lastModifiedDate: string;
    accessState: KcsDocumentState;
    cve_threatSeverity: string;
    cve_publicDate: string;
    cve_synopsis: string;
    cve_details: string;
    uri: string;
}

export interface ISolrErrata extends ISolrDocument {
    documentKind: 'Errata';
    view_uri: string;
    language: string;
    lastModifiedDate: string;
    portal_advisory_type: string;
    portal_severity: string;
    portal_BZ: Array<string>;
    allTitle: string;
    portal_package: Array<string>;
    portal_description: string;
    portal_publication_date: string;
    portal_synopsis: string;
    portal_type: string;
    portal_product_names: string;
    uri: string;
}

export interface ISolrLabInfo extends ISolrDocument {
    documentKind: 'LabInfo';
    view_uri: string;
    language: string;
    allTitle: string;
    lastModifiedDate: string;
    lab_type: string;
    lab_id: string;
    hasPublishedRevision: string;
    publishedTitle: string;
    uri: string;
}

export interface ISolrVideo extends ISolrDocument {
    documentKind: 'Video',
    uri: string;
    view_uri: string;
    language: string;
    allTitle: string;
    lastModifiedDate: string;
    ModerationState: string;
    accessState: KcsDocumentState;
    hasPublishedRevision: string;
    publishedTitle: string;
    portal_thumbnail: string;
    kcsRating: number;
    requires_subscription: boolean;
    video_duration: string;
    product: Array<string>;
    tag: Array<string>;
    category: Array<string>;
    video_created_date: string;
    issueTag: Array<string>;
}

//--------------------------------------------------------------------------------
//Basic Solr Case type, you need to implement a sub-interface with all `fl` fields
//--------------------------------------------------------------------------------
export interface ISolrCase {}

// This represents the specific fields we return for top cases (as UDS's views), places where we query solr cases
// with different set of fields (i.e. Search) would get different interfaces, however all should extends ISolrCase
export interface ISolrTopCase extends ISolrCase {
    id: string;
    case_number: string;
    case_status: string;
    case_summary: string;
    case_accountNumber: string;
    case_internal_status: string;
    case_createdDate: string;
    case_lastModifiedDate: string;
    case_priority_score: number;
    case_account_name: string;
    case_tags?: Array<string>;
}

export interface ISolrCaseResponse<T extends ISolrCase> {
    response: {
        numFound: number
        start: number
        docs: Array<T>
    }
}

export type ISolrTopCaseResponse = ISolrCaseResponse<ISolrTopCase>

export interface ISolrSearchedCase extends ISolrCase {
    case_number: string;
    case_account_name: string;
    case_summary: string;
    case_internal_status: string;
    case_createdDate: string;
    case_lastModifiedDate: string;
    case_status: string;
    case_priority_score: number;
}