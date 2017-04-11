import test from 'ava';
import { getTestClasses } from './testClass';

test('should return all test classes for product type hardware', async t => {
    const productType = 'hardware';
    const testClasses = await getTestClasses(productType);
    t.truthy(testClasses);
    t.true(testClasses.length >= 1);
});
