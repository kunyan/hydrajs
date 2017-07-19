import {IContact} from './contact';

// easy-sfdc
export interface IAPITeamMember {
    name: string;
    role: string;
    ssoName: string;
}

// https://gitlab.cee.redhat.com/Workflow_Integration/cee-integration/blob/master/hydra-model/src/main/resources/user.xsd
export interface IUser {
    id: string;
    aboutMe: string;
    // account: IAccount;
    accountId: string;
    accountNumber: string;
    alias: string;
    callCenterId: string;
    city: string;
    contact: IContact;
    contactId: string;
    contactNumberRef: string;
    contactNumber: string;
    country: string;
    countryCustom: string;
    email: string;
    explicitKerberosName: string;
    firthLevelManagerUsername: string;
    firstName: string;
    firstNameCustom: string;
    fourthLevelManagerUsername: string;
    fullName: string;
    fullTitle: string;
    gssCostcenterName: string;
    genesysUsername: string;
    ircNick: string;
    itarUser: boolean;
    inGSS: string;
    isActive: boolean;
    kcsGroup: string;
    kerberosName: string;
    lastName: string;
    lastNameCustom: string;
    manager: IUser;
    managerId: string;
    managerSID: string;
    mobilePhone: string;
    name: string;
    officeLocation: string;
    outOfOfficeChangedBy: string;
    outOfOffice: boolean;
    outOfOfficeChangedOn: string;
    phone: string;
    rhatLocation: string;
    redhatComEmailAddress: string;
    region: string;
    ssoUsername: string;
    secondLevelManagerUsername: string;
    sixthLevelManagerUsername: string;
    superRegion: string;
    thirdLevelManagerUsername: string;
    title: string;
    userName: string;
    bomgarUsername: string;
    canWorkNightShift: boolean;
}

// SFDC SObject
export interface IRHAssociate__c {
    Case__c: string;
    Country__c: string;
    CreatedById: string;
    CreatedDate: string;
    Id: string;
    IsDeleted: boolean;
    LastModifiedById: string;
    LastModifiedDate: string;
    Managed_From__c: string;
    Name: string;
    Office_Status__c: string;
    OwnerId: string;
    RHAT_Location__c: string;
    Role__c: string;
    User__c: string;
}
