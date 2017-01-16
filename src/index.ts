import {
    getComments,
    newComment,
    updateComment
} from './api/case';

export default {
    kase: {
        getComments: getComments,
        newComment: newComment,
        updateComment: updateComment
    }
};
