import { getComments, upsertComment, }          from './api/comment';
import { getCase }                              from './api/case';
import { runInsights, getInsightsRules }        from './api/insights';
import { getAllShiftMetadatas }                 from './api/shiftMetadata';
import { getAllRoleMetadatas }                  from './api/roleMetadata';
import { getAllTemplateMetadatas }              from './api/templateMetadata';
import { getVendorProduct, getCertifications }  from './api/vendorProduct';
import {
    getCertification,
    updateCertification
} from './api/certification';
import {
    getShiftsForUserFilters,
    getAllShiftsForUsers,
    postShiftsForUsers,
    deleteShiftByShiftId,
    deleteShiftForUsers
} from './api/userShifts';
import {
    getAllGroupMetadatas,
    getGroupsForOwner,
    postGroupDetails,
    updateGroupDetails,
    deleteGroupByGroupId
} from './api/groupMetadata';

export default {
    kase: {
        getComments,
        upsertComment,
        getCase,
    },
    insights: {
        runInsights,
        getInsightsRules,
    },
    skedge: {
        getAllShiftMetadatas,
        getAllRoleMetadatas,
        getAllTemplateMetadatas,
        getAllShiftsForUsers,
        getShiftsForUserFilters,
        postShiftsForUsers,
        deleteShiftByShiftId,
        deleteShiftForUsers,
        getAllGroupMetadatas,
        getGroupsForOwner,
        postGroupDetails,
        updateGroupDetails,
        deleteGroupByGroupId,
    },
    certification: {
        getCertification,
        updateCertification,
        getCertifications,
        getVendorProduct,
    }
};
