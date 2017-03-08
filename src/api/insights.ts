import {getUri, postUri} from '../utils/fetch';
import Env from '../utils/env';
import {InsightsRule, InsightsResult} from '../models/insights';

export function runInsights(caseNumber: string, attachmentId: string): Promise<InsightsResult> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cases/${caseNumber}/attachments/${attachmentId}/insights`);
    return getUri<InsightsResult>(uri);
}

export function getInsightsRules(ruleIds?: string []): Promise<Array<InsightsRule>> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/insights/rules`);
    return !!ruleIds ? postUri<Array<InsightsRule>>(uri, {ruleIds:ruleIds}):getUri<Array<InsightsRule>>(uri);
}
