import test from 'ava';
import * as reviewApi from './review';

test.only('should return cqi questions', async t => {
    const questions = await reviewApi.getQuestions('cqi');
    t.truthy(questions);
});

test('should return sqi questions', async t => {
    const questions = await reviewApi.getQuestions('sqi');
    t.truthy(questions);
});