import {
    getComments,
    newComment,
    editComment
} from './api/case';

export default {
    kase: {
        getComments: getComments,
        newComment: newComment,
        editComment: editComment
    }
};
