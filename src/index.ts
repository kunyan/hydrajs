import { getComments, upsertComment, }          from './api/comment';
import { getCase }                              from './api/case';
import { runInsights, getInsightsRules }        from './api/insights';
import {
    getAllShiftMetadatas,
    updateShiftMetadata,
    createShiftMetadata,
    deleteShiftMetadata
}                                               from './api/shiftMetadata';
import { getAllRoleMetadatas }                  from './api/roleMetadata';
import {
    getAllTemplateMetadatas,
    getTemplateMetadatasForUser,
    postCustomTemplateForUser
}                                               from './api/templateMetadata';
import {
    getVendorProduct,
    getCertifications,
    createVendorProduct,
    updateVendorProduct,
    getComponents,
    upsertComponents,
}  from './api/vendorProduct';
import {
    getCertification,
    updateCertification,
    createCertification
} from './api/certification';
import {
    getTestClasses
} from './api/testClass';
import {
    getShiftsForUserFilters,
    getAllShiftsForUsers,
    postShiftsForUsers,
    deleteShiftByShiftId,
    deleteShiftForUsers,
    editShiftForUser
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
        createShiftMetadata,
        updateShiftMetadata,
        deleteShiftMetadata,
        getAllRoleMetadatas,
        getAllTemplateMetadatas,
        getTemplateMetadatasForUser,
        postCustomTemplateForUser,
        getAllShiftsForUsers,
        getShiftsForUserFilters,
        postShiftsForUsers,
        editShiftForUser,
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
        createCertification,
        updateCertification,
        getCertifications,
        getVendorProduct,
        createVendorProduct,
        updateVendorProduct,
        getTestClasses,
        getComponents,
        upsertComponents,
    }
};
