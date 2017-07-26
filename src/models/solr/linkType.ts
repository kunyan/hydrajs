export const LinkTypes = {
    SOLUTION: 'KnowledgeBaseSolution' as LinkType,
    ARTICLE: 'KnowledgeBaseArticle' as LinkType,
    VIDEO: 'KnowledgeBaseVideo' as LinkType,
    CVE: 'KnowledgeBaseCVE' as LinkType,
    ERRATA: 'KnowledgeBaseErrata' as LinkType,
    LABINFO: 'KnowledgeBaseLabInfo' as LinkType
};

export type LinkType = 'KnowledgeBaseSolution' | 'KnowledgeBaseArticle' | 'KnowledgeBaseVideo' | 'KnowledgeBaseCVE' | 'KnowledgeBaseErrata' | 'KnowledgeBaseLabInfo';
