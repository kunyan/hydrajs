export interface IBugzillaBug {
    assignedTo: string;
    blocks2: string;
    blocks: string;
    bugzillaURL: string;
    bugzillaKeywords: string;
    bugzillaLink: string;
    bugzillaNumber: string;
    component: string;
    createdBy: any;
    createdById: string;
    createdDate: any;
    dependsOn: string;
    depends: string;
    description: string;
    dupeOf: string;
    groups: string;
    isOpen: boolean;
    isPrivate: boolean;
    lastModifiedBy: any;
    lastModifiedById: string;
    lastModifiedDate: any;
    name: string;
    platform: string;
    priority: string;
    product: string;
    resolution: string;
    severity: string;
    status: string;
    summary: string;
    version: string;
}

export interface IBugzillaComment {
    id: string;
    bugzillaBugId: string;
    bugzillaBug: IBugzillaBug;
    bugzillaId: string;
    caseCommentId: string;
    createdBy: any;
    createdById: string;
    createdDate: any;
    isPrivate: boolean;
    lastModifiedBy: any;
    lastModifiedById: string;
    lastModifiedDate: any;
}
