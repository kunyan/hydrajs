import { getComments, upsertComment, } from './api/comment';
import { getCase } from './api/case';
import { getAllShiftMetadatas } from './api/shiftMetadata';

export default {
    kase: {
        getComments: getComments,
        upsertComment: upsertComment,
        getCase: getCase,
    },
    skedge: {
        getAllShiftMetadatas: getAllShiftMetadatas,
    }
};
