import {getComments, upsertComment}             from './api/comment';
import {runInsights, getInsightsRules}          from './api/insights';
import {getAllRoleMetadatas}                    from './api/roleMetadata';
import {getTestClasses}                         from './api/testClass';
import { health, hostname }                     from './api/general';
import { getUser }                              from './api/user';
import { runKyce }                              from './api/kyce';
import { kycLinkResources }                     from './api/kcs';


import {
    getCase,
    getLinkedJiras,
    linkJiraToCase,
    deleteJiraLinkFromCase,
    getEscalations
} from './api/case';

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
    teamMembers,
    reviews
} from './api/counts';

import {
    getQuestions,
    getKtQuestions,
    getReviews,
    createReview
} from './api/review';

export default {
    general: {
        health,
        hostname
    },
    kase: {
        getComments,
        upsertComment,
        getCase,
        getLinkedJiras,
        linkJiraToCase,
        deleteJiraLinkFromCase,
        getEscalations,
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
            reviews
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
    },
    review: {
        getQuestions,
        getKtQuestions,
        getReviews,
        createReview
    },
    users: {
        getUser
    },
    kyce: {
        runKyce
    },
    kcs: {
        kycLinkResources
    }
};
