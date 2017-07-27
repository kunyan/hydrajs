import { LinkType, LinkTypes }  from './linkType';
import { IKcsSolution }         from '../kcs';

import { 
    ISolrDocument, 
    ISolrSolution, 
    ISolrDocumentation, 
    ISolrCve, 
    ISolrErrata, 
    ISolrArticle, 
    ISolrLabInfo, 
    ISolrVideo 
} from '../solr/solr';

 // not a complete list, add whatever is needed
export const SolrDocumentKinds = {
    SOLUTION: 'Solution' as SolrDocumentKind,
    DOCUMENTATION: 'Documentation' as SolrDocumentKind,
    CVE: 'Cve' as SolrDocumentKind,
    ERRATA: 'Errata' as SolrDocumentKind,
    ARTICLE: 'Article' as SolrDocumentKind,
    VIDEO: 'Video' as SolrDocumentKind,
    LABINFO: 'LabInfo' as SolrDocumentKind
}

export type SolrDocumentKind = 'Solution' | 'Documentation' | 'Cve' | 'Errata' | 'Article' | 'Video' | 'LabInfo';

// Type guards
export function isSolrSolution(doc: ISolrDocument): doc is ISolrSolution {
    return doc.documentKind == SolrDocumentKinds.SOLUTION
};

export function isSolrDocumentation(doc: ISolrDocument): doc is ISolrDocumentation {
    return doc.documentKind == SolrDocumentKinds.DOCUMENTATION
};

export function isSolrCve(doc: ISolrDocument): doc is ISolrCve {
    return doc.documentKind == SolrDocumentKinds.CVE
};

export function isSolrErrata(doc: ISolrDocument): doc is ISolrErrata {
    return doc.documentKind == SolrDocumentKinds.ERRATA
};

export function isSolrArticle(doc: ISolrDocument): doc is ISolrArticle {
    return doc.documentKind == SolrDocumentKinds.ARTICLE
};

export function isSolrLabInfo(doc: ISolrDocument): doc is ISolrLabInfo {
    return doc.documentKind == SolrDocumentKinds.LABINFO
};

export function isSolrVideo(doc: ISolrDocument): doc is ISolrVideo {
    return doc.documentKind == SolrDocumentKinds.VIDEO;
}

export function isSolr(resource: any | ISolrDocument): resource is ISolrDocument {
    return (resource as ISolrDocument).documentKind != null;
}

export function isSolution(resource: any): resource is IKcsSolution {
    return (resource as IKcsSolution).type === 'Solution';
}

export function getSolrDocumentKinds(resourceType: LinkType) {
    if (resourceType == LinkTypes.ARTICLE) {
        return SolrDocumentKinds.ARTICLE;
    } else if (resourceType == LinkTypes.CVE) {
        return SolrDocumentKinds.CVE;
    } else if (resourceType == LinkTypes.ERRATA) {
        return SolrDocumentKinds.ERRATA;
    } else if (resourceType == LinkTypes.LABINFO) {
        return SolrDocumentKinds.LABINFO;
    } else if (resourceType == LinkTypes.VIDEO) {
        return SolrDocumentKinds.VIDEO;
    } else {
        return SolrDocumentKinds.SOLUTION;
    }
};

export function getSolrType(document: any | ISolrDocument) {
    if (isSolr(document)) {
        if (isSolrArticle(document)) {
           return LinkTypes.ARTICLE;
        } else if (isSolrCve(document)) {
           return LinkTypes.CVE;
        } else if (isSolrErrata(document)) {
           return LinkTypes.ERRATA;
        } else if (isSolrLabInfo(document)) {
           return LinkTypes.LABINFO;
        } else if (isSolrVideo(document)) {
           return LinkTypes.VIDEO;
        } else {
           return LinkTypes.SOLUTION;
        }
    }
};