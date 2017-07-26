export const KcsDocumentStates = {
    ACTIVE: 'active' as KcsDocumentState,
    PRIVATE: 'private' as KcsDocumentState,
    RETIRED: 'retired' as KcsDocumentState
};

export type KcsDocumentState = 'active' | 'private' | 'retired';