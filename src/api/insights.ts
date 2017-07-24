import Env                               from '../utils/env';
import { getUri, postUri }               from '../utils/fetch';
import { InsightsRule, InsightsResult }  from '../models/insights';

export function runInsights(caseNumber: string, attachmentId: string): Promise<InsightsResult> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cases/${caseNumber}/attachments/${attachmentId}/insights`);
    return getUri<Promise<InsightsResult>>(uri);
}

export function getInsightsRules(ruleIds?: string[]): Promise<Array<InsightsRule>> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/insights/rules`);
    return !!ruleIds ? postUri<Promise<InsightsRule[]>>(uri, { ruleIds: ruleIds }) : getUri<Promise<InsightsRule[]>>(uri);
}
