import 'mocha';
import chai = require('chai');
const expect = chai.expect;
import * as caseApi from './case';
import {ICase_fields} from '../models/case';

describe('Case Tests', () => {
    describe('/case/{caseNumber}', () => {
        it('should return specified fields for case 00023622', () => {
            const fields: ICase_fields = [
                'Id',
                'CaseNumber',
                'LastModifiedBy.Id',
                'LastModifiedBy.Full_Name__c',
                'LastModifiedBy.SSO_Username__c',
                'LastModifiedBy.Email',
                'LastModifiedBy.Phone',
                'LastModifiedBy.TimeZoneSidKey',

                'Entitlement.Id',
                'Entitlement.Name',

                'Created_By_User__r.Id',
                'Created_By_User__r.Full_Name__c',
                'Created_By_User__r.SSO_Username__c',
                'Created_By_User__r.Email',
                'Created_By_User__r.Phone',
                'Created_By_User__r.TimeZoneSidKey',

                'Created_By_Contact__r.Id',
                'Created_By_Contact__r.Full_Name__c',
                'Created_By_Contact__r.SSO_Username__c',
                'Created_By_Contact__r.Email',
                'Created_By_Contact__r.Phone',
                'Created_By_Contact__r.Timezone__c',

                'Case_Owner__r.Id',
                'Case_Owner__r.Full_Name__c',
                'Case_Owner__r.Full_Name__c',
                'Case_Owner__r.SSO_Username__c',
                'Case_Owner__r.Email',
                'Case_Owner__r.Phone',
                'Case_Owner__r.TimeZoneSidKey',

                'Bug__r.Id',
                'Bug__r.Name',

                'ExternalLockBy__r.Id',
                'ExternalLockBy__r.Full_Name__c',
                'ExternalLockBy__r.SSO_Username__c',
                'ExternalLockBy__r.Email',
                'ExternalLockBy__r.Phone',
                'ExternalLockBy__r.TimeZoneSidKey',

                'Account.Id',
                'Account.AccountNumber',
                'Account.Name',
                'Account.Super_Region__c',
                'Account.Is_Active__c',
            ];
            return caseApi.getCase('00023622', fields).then((kase) => {
                expect(kase).to.exist;
                expect(kase.Id).to.exist;
                expect(kase.CaseNumber).to.eql('00023622');
                expect(kase.Account.Id).to.eql('001A000000K8A0dIAF');
            });
        });
    });
});
