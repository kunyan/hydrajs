import test                     from 'ava';
import * as vendorProductApi    from './vendorProduct';

test('should return vendor product for portal id 2909043', async t => {
    const vendorProductPortalId = '2909043';
    const vendorProduct = await vendorProductApi.getVendorProduct(vendorProductPortalId);
    t.truthy(vendorProduct);
    t.is(vendorProduct.program, 'hardware');
});

test('should return all certifications of vendor product for portal id 2909043', async t => {
    const vendorProductPortalId = '2909043';
    const certifications = await vendorProductApi.getCertifications(vendorProductPortalId);
    t.truthy(certifications);
    t.true(certifications.length >= 1);
});

test.only('should return all components of vendor product for portal id 2909043', async t => {
    const vendorProductPortalId = '2909043';
    const components = await vendorProductApi.getComponents(vendorProductPortalId);
    t.truthy(components);
    t.true(components.length >= 1);
});
