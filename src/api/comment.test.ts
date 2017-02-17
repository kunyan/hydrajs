import test from 'ava';
import * as caseApi from './comment';
import { ICaseCommentFields, ICaseComment } from '../models/comment';
// createdByUser return error for now
test('should return specified fields for case 00023622', async t => {
    const fields: ICaseCommentFields = [
        'id',
        'caseNumber',
        // 'createdByUser',
        'createdByUserID',
        'isPublic',
    ];
    const comments = await caseApi.getComments('00023622', fields);
    t.truthy(comments);
    t.true(comments.length > 10);
    t.truthy(comments[0].id);
    t.true(comments[0].isPublic);
});

test('should return only 1 comment for case 00023622', async t => {
    const fields: ICaseCommentFields = [
        'id',
        'caseNumber',
        'createdByUserID',
        'isPublic',
    ];
    const limit = 1;
    const comments = await caseApi.getComments('00023622', fields, limit);
    t.truthy(comments);
    t.is(comments.length, limit);
    t.truthy(comments[0].id);
    t.true(comments[0].isPublic);
});

test('should create a new private comment on 00023622 and edit it', async t => {
    const apiComment: ICaseComment = {
        caseNumber: '00023622',
        commentBody: 'Test private comment',
        isPublic: false,
        doNotChangeSBT: false
    };
    const comment: ICaseComment = await caseApi.upsertComment(apiComment);
    t.truthy(comment.id);
    t.false(comment.isPublic);
    t.is(comment.commentBody, 'Test private comment');

    comment.commentBody = 'Test private comment updated';
    const updatedComment = await caseApi.upsertComment(comment);
    t.is(updatedComment.commentBody, 'Test private comment updated');
});

test('should create a new public comment on 00023622', async t => {
    const apiComment: ICaseComment = {
        caseNumber: '00023622',
        commentBody: 'Test public comment',
        isPublic: true,
        doNotChangeSBT: false
    };
    const comment: ICaseComment = await caseApi.upsertComment(apiComment);
    t.truthy(comment.id);
    t.true(comment.isPublic);
    t.false(comment.isDraft);
    t.is(comment.commentBody, 'Test public comment');
});
