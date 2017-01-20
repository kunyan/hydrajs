import {
    getComments,
    upsertComment,
} from './api/comment';

export default {
    kase: {
        getComments: getComments,
        upsertComment: upsertComment,
    }
};
