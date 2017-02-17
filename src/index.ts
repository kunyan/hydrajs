import { getComments, upsertComment, } from './api/comment';
import { getCase } from './api/case';
import { runInsights, getInsightsRules } from './api/insights';
import { getAllShiftMetadatas } from './api/shiftMetadata';

export default {
    kase: {
        getComments: getComments,
        upsertComment: upsertComment,
        getCase: getCase,
    },
    insights: {
        runInsights: runInsights,
        getInsightsRules: getInsightsRules
    },
    skedge: {
        getAllShiftMetadatas: getAllShiftMetadatas,
    }
};
