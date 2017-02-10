import test from 'ava';
import * as vendorProductApi from './vendorProduct';

test('should return vendor product for portal id 2957833', async t => {
    const vendorProductPortalId = '2957833';
    const vendorProduct = await vendorProductApi.getVendorProduct(vendorProductPortalId);
    t.truthy(vendorProduct);
    t.is(vendorProduct.program, 'hardware');
});

test.only('should return all certifications of vendor product for portal id 2957833', async t => {
    const vendorProductPortalId = '2957833';
    const certifications = await vendorProductApi.getCertifications(vendorProductPortalId);
    console.log(certifications);
    t.truthy(certifications);
    t.true(certifications.length > 1);
});
