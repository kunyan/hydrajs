import test from 'ava';
import * as templateMetadataApi from './templateMetadata';

test('should return all templateMetadatas', async t => {
    const templateMetadatas = await templateMetadataApi.getAllTemplateMetadatas();
    t.truthy(templateMetadatas);
    t.true(Array.isArray(templateMetadatas));
    t.true(templateMetadatas.length > 0);
    t.truthy(templateMetadatas[0].templateId);
    t.truthy(templateMetadatas[0].templateCustom);
    t.truthy(templateMetadatas[0].monday);
    t.truthy(templateMetadatas[0].tuesday);
    t.truthy(templateMetadatas[0].wednesday);
    t.truthy(templateMetadatas[0].thursday);
    t.truthy(templateMetadatas[0].friday);
    t.truthy(templateMetadatas[0].saturday);
    t.truthy(templateMetadatas[0].sunday);
    t.truthy(templateMetadatas[0].createdBy);
    t.truthy(templateMetadatas[0].createdAt);
    t.truthy(templateMetadatas[0].updateBy);
    t.truthy(templateMetadatas[0].updateAt);
});
