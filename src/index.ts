import { getComments, upsertComment }    from './api/comment';
import { runInsights, getInsightsRules } from './api/insights';
import { getAllRoleMetadatas }           from './api/roleMetadata';
import { getTestClasses }                from './api/testClass';
import { health, hostname }              from './api/general';
import { getUser }                       from './api/user';
import { runKyce }                       from './api/kyce';

import {
    linkKcsResources,
    getSolution
} from './api/kcs';

import {
    getCase,
    getLinkedJiras,
    linkJiraToCase,
    deleteJiraLinkFromCase,
    getEscalations,
    getLanguages,
    getSeverities,
    getStatuses,
    getTypes,
    getCaseExternalTrackers,
    getCaseExternalTrackerUpdates
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
    createCertification,
    createOpenStackCertification,
    updateOpenStackCertification,
    getOpenStackCertification
} from './api/certification';

import {
    getCertificationTestPlans,
    upsertCertificationTestPlans,
    getCertificationTestData,
} from './api/certificationTest';

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

import {
    getProducts,
    getProductVersions
} from './api/products';

import {
    getSbr,
    getSbrs
} from './api/sbrs';

import {
    getExternalTrackers,
    getExternalTrackersUpdates
} from './api/externalTrackers';

import {
    getSolrAccess,
    getSolrCases
} from './api/solr';

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
        },
        getLanguages,
        getSeverities,
        getStatuses,
        getTypes,
        getCaseExternalTrackers,
        getCaseExternalTrackerUpdates
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
        createOpenStackCertification,
        updateOpenStackCertification,
        getOpenStackCertification,
        getCertifications,
        getVendorProduct,
        createVendorProduct,
        updateVendorProduct,
        getTestClasses,
        getComponents,
        upsertComponents,
        getCertificationTestPlans,
        upsertCertificationTestPlans,
        getCertificationTestData,
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
        linkKcsResources,
        getSolution
    },
    products: {
        getProducts,
        getProductVersions
    },
    sbrs: {
        getSbr,
        getSbrs
    },
    externalTrackers: {
        getExternalTrackers,
        getExternalTrackersUpdates
    },
    solr: {
        getSolrAccess,
        getSolrCases
    }
};
