import { getComments, upsertComment, } from './api/comment';
import { getCase } from './api/case';
import { runInsights, getInsightsRules } from './api/insights';
import { getAllShiftMetadatas } from './api/shiftMetadata';
import {getAllRoleMetadatas} from './api/roleMetadata';
import {
    getShiftsForUserFilters, getAllShiftsForUsers, postShiftsForUsers,
    deleteShiftByShiftId
} from './api/userShifts';

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
        getAllRoleMetadatas: getAllRoleMetadatas,
        getAllShiftsForUsers: getAllShiftsForUsers,
        getShiftsForUserFilters: getShiftsForUserFilters,
        postShiftsForUsers: postShiftsForUsers,
        deleteShiftByShiftId: deleteShiftByShiftId
    }
};
