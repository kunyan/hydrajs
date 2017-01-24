import {getUri, postUri} from '../utils/fetch';
import Env from '../utils/env';
import {InsightsRule, InsightsResult, RuleIds} from '../models/insights';

export function runInsights(caseNumber: string, attachmentId: string): Promise<InsightsResult> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/case/${caseNumber}/attachments/${attachmentId}`);
    return getUri(uri);
}

export function getInsightsRules(ruleIds?: RuleIds): Promise<Array<InsightsRule>> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/insights/rules`);
    return postUri<Array<InsightsRule>>(uri, ruleIds);
}
