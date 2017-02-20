import test from 'ava';
import * as shiftMetadataApi from './shiftMetadata';

test('should return all shiftMetadatas', async t => {
    const shiftMetadatas = await shiftMetadataApi.getAllShiftMetadatas();
    t.truthy(shiftMetadatas);
    t.true(Array.isArray(shiftMetadatas));
    t.true(shiftMetadatas.length > 0);
    t.truthy(shiftMetadatas[0].id);
    t.truthy(shiftMetadatas[0].name);
    t.truthy(shiftMetadatas[0].startAt);
    t.truthy(shiftMetadatas[0].endAt);
});
