'use strict';

import "mocha"
import chai = require("chai");
const expect = chai.expect;
import { getCaseComments } from './case'
import {ICase_Comment__c_fields} from "../models/case"

describe('Array', () => {
    describe('/case/{caseNumber}/comments', () => {
        it('should return specified fields for case 00023622', () => {
            const fields: ICase_Comment__c_fields = [
                "Id",
                "CaseNumber__c",
                "Is_Public__c",
                "Created_By_User__r.Id",
                "Created_By_User__r.Full_Name__c"
            ];
            return getCaseComments("00023622", fields).then((comments) => {
                expect(comments.length).to.be.above(10);
                expect(comments[0].Id).to.exist;
                expect(comments[0].Is_Public__c).to.exist;
                // expect(comments[0].Created_By_User__r.Id).to.exist;
                // expect(comments[0].Created_By_User__r.Full_Name__c).to.exist;
            });
        });
    });
});