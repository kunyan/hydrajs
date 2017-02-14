import { getComments, upsertComment, } from './api/comment';
import { getCase } from './api/case';
import { getAllShiftsMetadata } from './api/shiftsMetadata';

export default {
    kase: {
        getComments: getComments,
        upsertComment: upsertComment,
        getCase: getCase,
    },
    skedge: {
        getAllShiftsMetadata: getAllShiftsMetadata,
    }
};
