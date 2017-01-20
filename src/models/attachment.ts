// easy-sfdc
export interface IAPIAttachment {
    caseNumber: string;
    checksum: string;
    createDate: string;
    createdBy: string;
    description: string;
    fileName: string;
    fileType: string;
    id: string;
    isArchived: boolean;
    isDeprecated: boolean;
    isPrivate: boolean;
    lastModifiedDate: string;
    link: string;
    message: string;
    modifiedBy: string;
    returnCode: number;
    size: number;
    sizeKB: number;
    warnings: string;
}