import {
    getComments,
    upsertComment,
} from './api/case';
import {
    runInsights,
    getInsightsRules,
} from './api/insights';

export default {
    kase: {
        getComments: getComments,
        upsertComment: upsertComment,
    },
    insights: {
        runInsights: runInsights,
        getInsightsRules: getInsightsRules,
    }
};
