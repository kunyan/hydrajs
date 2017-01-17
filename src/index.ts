import {
    getComments,
    upsertComment,
} from './api/case';

export default {
    kase: {
        getComments: getComments,
        upsertComment: upsertComment,
    }
};
