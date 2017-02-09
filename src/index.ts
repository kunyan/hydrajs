import { getComments, upsertComment, } from './api/comment';
import { getCase } from './api/case';
import {getAllShiftMetadata} from './api/shiftMetadata';

export default {
    kase: {
        getComments: getComments,
        upsertComment: upsertComment,
        getCase: getCase,
    },
    skedge: {
        getAllShiftMetadata: getAllShiftMetadata,
    }
};
