import test from 'ava';
import * as caseApi from './comment';
import {ICase_Comment__c_fields, IAPIComment} from '../models/comment';

test('should return specified fields for case 00023622', async t => {
    const fields: ICase_Comment__c_fields = [
        'Id',
        'CaseNumber__c',
        'Is_Public__c',
        'Created_By_User__r.Id',
        'Created_By_User__r.Full_Name__c'
    ];
    const comments = await caseApi.getComments('00023622', fields);
    t.truthy(comments);
    t.true(comments.length > 10);
    t.truthy(comments[0].Id);
    t.truthy(comments[0].Is_Public__c);
});

test('should create a new private comment on 00023622 and edit it', async t => {
    const apiComment: IAPIComment = {
        caseNumber: '00023622',
        text: 'Test private comment',
        isPublic: false,
        doNotChangeSBT: false
    };
    const comment: IAPIComment = await caseApi.upsertComment(apiComment);
    t.truthy(comment.id);
    t.false(comment.isPublic);
    t.is(comment.returnCode, 200);
    t.is(comment.text, 'Test private comment');

    comment.text = 'Test private comment updated';
    const updatedComment = await caseApi.upsertComment(comment);
    t.is(updatedComment.returnCode, 200);
    t.is(updatedComment.text, 'Test private comment updated');
});

test('should create a new public comment on 00023622', async t => {
    const apiComment: IAPIComment = {
        caseNumber: '00023622',
        text: 'Test public comment',
        isPublic: true,
        doNotChangeSBT: false
    };
    const comment: IAPIComment = await caseApi.upsertComment(apiComment);
    t.truthy(comment.id);
    t.true(comment.isPublic);
    t.is(comment.returnCode, 200);
    t.is(comment.text, 'Test public comment');
});
