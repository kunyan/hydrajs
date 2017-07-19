import test from 'ava';
import * as countsApi from './counts';

test('should return articles linked count for 00315520', async t => {
    const count = await countsApi.articlesLinked('00315520');
    t.is(typeof count === 'number', true);
});

test('should return bomgar session count for 00315520', async t => {
    const count = await countsApi.bomgarSessions('00315520');
    t.is(typeof count === 'number', true);
});

test('should return bugzilla count for 00315520', async t => {
    const count = await countsApi.bugzillas('00315520');
    t.is(typeof count === 'number', true);
});

test('should return case history count for 00315520', async t => {
    const count = await countsApi.caseHistory('00315520');
    t.is(typeof count === 'number', true);
});

test('should return chat transcript count for 00315520', async t => {
    const count = await countsApi.chatTranscripts('00315520');
    t.is(typeof count === 'number', true);
});

test('should return a comment count for 00315520', async t => {
    const count = await countsApi.comments('00315520');
    t.is(typeof count === 'number', true);
});

test('should return escalations closed count for 00315520', async t => {
    const count = await countsApi.escalationsClosed('00315520');
    t.is(typeof count === 'number', true);
});

test('should return escalations open count for 00315520', async t => {
    const count = await countsApi.escalationsOpen('00315520');
    t.is(typeof count === 'number', true);
});

test('should return file attachment count for 00315520', async t => {
    const count = await countsApi.fileAttachments('00315520');
    t.is(typeof count === 'number', true);
});

test('should return jira count for 00315520', async t => {
    const count = await countsApi.jiras('00315520');
    t.is(typeof count === 'number', true);
});

test('should return solutions linked count for 00315520', async t => {
    const count = await countsApi.solutionsLinked('00315520');
    t.is(typeof count === 'number', true);
});

test('should return team member count for 00315520', async t => {
    const count = await countsApi.teamMembers('00315520');
    t.is(typeof count === 'number', true);
});

test('should return review count for 00315520', async t => {
    const cqiCount = await countsApi.reviews({qualityIndexType: 'cqi', contentId: '00315520'});
    const sqiCount = await countsApi.reviews({qualityIndexType: 'sqi', contentId: '00315520'});
    t.is(typeof cqiCount === 'number', true);
    t.is(typeof sqiCount === 'number', true);
});

