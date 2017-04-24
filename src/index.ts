import {getComments, upsertComment}             from './api/comment';
import {getCase, getLinkedJiras}                                from './api/case';
import {runInsights, getInsightsRules}          from './api/insights';
import {getAllRoleMetadatas}                    from './api/roleMetadata';
import {getTestClasses}                         from './api/testClass';

import {
    getAllShiftMetadatas,
    updateShiftMetadata,
    createShiftMetadata,
    deleteShiftMetadata
} from './api/shiftMetadata';

import {
    getAllTemplateMetadatas,
    getTemplateMetadatasForUser,
    postCustomTemplateForUser
} from './api/templateMetadata';

import {
    getVendorProduct,
    getCertifications,
    createVendorProduct,
    updateVendorProduct,
    getComponents,
    upsertComponents,
} from './api/vendorProduct';

import {
    getCertification,
    updateCertification,
    createCertification
} from './api/certification';

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

import {
    articlesLinked,
    bomgarSessions,
    bugzillas,
    caseHistory,
    chatTranscripts,
    comments,
    escalationsClosed,
    escalationsOpen,
    fileAttachments,
    jiras,
    solutionsLinked,
    teamMembers
} from './api/counts';

export default {
    kase: {
        getComments,
        upsertComment,
        getCase,
        getLinkedJiras,
        counts: {
            articlesLinked,
            bomgarSessions,
            bugzillas,
            caseHistory,
            chatTranscripts,
            comments,
            escalationsClosed,
            escalationsOpen,
            fileAttachments,
            jiras,
            solutionsLinked,
            teamMembers,
        }
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
