import test from 'ava';
import * as generalApi from './general';

test('health api check', async t => {
    const response = await generalApi.health();
    t.is(response, 'ok');
});
