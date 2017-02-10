import test from 'ava';
import * as shiftsMetadataApi from './shiftsMetadata';
import {ICase_Comment__c_fields, IAPIComment} from '../models/comment';

test('should return all shiftsMetadatas', async t => {
    const shiftsMetadatas = await shiftsMetadataApi.getAllShiftsMetadata();
    t.truthy(shiftsMetadatas);
    t.true(Array.isArray(shiftsMetadatas));
    t.true(shiftsMetadatas.length > 0);
    t.truthy(shiftsMetadatas[0].id);
    t.truthy(shiftsMetadatas[0].name);
    t.truthy(shiftsMetadatas[0].startAt);
    t.truthy(shiftsMetadatas[0].endAt);
});
