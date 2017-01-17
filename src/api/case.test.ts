import 'mocha';
import chai = require('chai');
const expect = chai.expect;
import * as caseApi from './case';
import {ICase_Comment__c_fields, IApiComment} from '../models/comment';

describe('Array', () => {
    describe('/case/{caseNumber}/comments', () => {
        it('should return specified fields for case 00023622', () => {
            const fields: ICase_Comment__c_fields = [
                'Id',
                'CaseNumber__c',
                'Is_Public__c',
                'Created_By_User__r.Id',
                'Created_By_User__r.Full_Name__c'
            ];
            return caseApi.getComments('00023622', fields).then((comments) => {
                expect(comments.length).to.be.above(10);
                expect(comments[0].Id).to.exist;
                expect(comments[0].Is_Public__c).to.exist;
                // expect(comments[0].Created_By_User__r.Id).to.exist;
                // expect(comments[0].Created_By_User__r.Full_Name__c).to.exist;
            });
        });
        it('should create a new private comment on 00023622 and edit it', () => {
            const apiComment: IApiComment = {
                caseNumber: '00023622',
                text: 'Test private comment',
                isPublic: false,
                doNotChangeSBT: false
            };
            return caseApi.upsertComment(apiComment).then((response: IApiComment) => {
                expect(response.id).to.exist;
                expect(response.isPublic).to.eql(false);
                expect(response.returnCode).to.eql(200);
                expect(response.text).to.eql('Test private comment');

                response.text = 'Test private comment updated';

                return caseApi.upsertComment(response).then((response: IApiComment) => {
                    expect(response.returnCode).to.eql(200);
                    expect(response.text).to.eql('Test private comment updated');
                });
            });
        });
        it('should create a new public comment on 00023622', () => {
            const apiComment: IApiComment = {
                caseNumber: '00023622',
                text: 'Test public comment',
                isPublic: false,
                doNotChangeSBT: false
            };
            return caseApi.upsertComment(apiComment).then((response: IApiComment) => {
                expect(response.id).to.exist;
                expect(response.isPublic).to.eql(false);
                expect(response.returnCode).to.eql(200);
                expect(response.text).to.eql('Test public comment');
            });
        });
    });
});
