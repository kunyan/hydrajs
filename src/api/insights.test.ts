import 'mocha';
import chai = require('chai');
const expect = chai.expect;
import * as insightsApi from './insights';
import {InsightsRule, InsightsResult, RuleIds} from '../models/insights';

describe('Array', () => {
    describe('/case/{caseNumber}/attachments/{attachmentId}', () => {
        it('should return insightsResult for case 00023622 and attachment c5186bb2', () => {
            return insightsApi.runInsights('00023622', 'c5186bb2').then((insightsResult) => {
                expect(insightsResult).to.exist;
            });
        });
    });
    describe('/insights/rules', () => {
        it('should return all the rules', () => {
            return insightsApi.getInsightsRules().then((insightsRules) => {
                expect(insightsRules).to.exist;
            });
        });
        it('should return specific rules', () => {
            let rules = {
                ruleIds:[
                    "Rule_ID_1",
                    "Rule_ID_2",
                    "Rule_ID_N"
                ]
            }; 
            return insightsApi.getInsightsRules(rules).then((insightsRules) => {
                expect(insightsRules).to.exist;
            });
        });
    });
});
