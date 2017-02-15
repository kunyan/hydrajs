import test from 'ava';
import * as caseApi from './comment';
import { IHydraCaseCommentFields, IHydraCaseComment } from '../models/comment';

test('should return specified fields for case 00023622', async t => {
    const fields: IHydraCaseCommentFields = [
        'commentId',
        'caseNumber',
        'createdBy',
        'createdByUserID',
        'isPublic',
    ];
    const comments = await caseApi.getComments('00023622', fields);
    t.truthy(comments);
    t.true(comments.length > 10);
    t.truthy(comments[0].commentId);
    t.true(comments[0].isPublic);
    t.truthy(comments[0].createdBy);
});

test('should create a new private comment on 00023622 and edit it', async t => {
    const apiComment: IHydraCaseComment = {
        caseNumber: '00023622',
        commentBody: 'Test private comment',
        isPublic: false,
        doNotChangeSBT: false
    };
    const comment: IHydraCaseComment = await caseApi.upsertComment(apiComment);
    t.truthy(comment.commentId);
    t.false(comment.isPublic);
    t.is(comment.commentBody, 'Test private comment');

    comment.commentBody = 'Test private comment updated';
    const updatedComment = await caseApi.upsertComment(comment);
    t.is(updatedComment.commentBody, 'Test private comment updated');
});

test('should create a new public comment on 00023622', async t => {
    const apiComment: IHydraCaseComment = {
        caseNumber: '00023622',
        commentBody: 'Test public comment',
        isPublic: true,
        doNotChangeSBT: false
    };
    const comment: IHydraCaseComment = await caseApi.upsertComment(apiComment);
    t.truthy(comment.commentId);
    t.true(comment.isPublic);
    t.false(comment.isDraft);
    t.is(comment.commentBody, 'Test public comment');
    t.truthy(comment.lastModifiedBy);
});
