import { getComments, upsertComment, } from './api/comment';
import { getCase } from './api/case';

export default {
    kase: {
        getComments: getComments,
        upsertComment: upsertComment,
        getCase: getCase,
    }
};
