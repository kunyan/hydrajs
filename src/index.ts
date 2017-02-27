import { getComments, upsertComment, } from './api/comment';
import { getCase } from './api/case';
import { runInsights, getInsightsRules } from './api/insights';
import { getAllShiftMetadatas } from './api/shiftMetadata';
import {getAllRoleMetadatas} from './api/roleMetadata';
import {
    getShiftsForUserFilters, getAllShiftsForUsers, postShiftsForUsers,
    deleteShiftByShiftId
} from './api/userShifts';
import { getAllGroupMetadatas, getGroupsForOwner, postGroupDetails, updateGroupDetails, deleteGroupByGroupId} from './api/groupMetadata';

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
        deleteShiftByShiftId: deleteShiftByShiftId,
        getAllGroupMetadatas: getAllGroupMetadatas,
        getGroupsForOwner: getGroupsForOwner,
        postGroupDetails: postGroupDetails,
        updateGroupDetails: updateGroupDetails,
        deleteGroupByGroupId: deleteGroupByGroupId
    }
};
