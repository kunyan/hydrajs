import test                     from 'ava';
import * as componentApi    from './component';

test('should return all components of vendor product for portal id 2909043', async t => {
    const vendorProductPortalId = '2909043';
    const components = await componentApi.getComponents(vendorProductPortalId);
    t.truthy(components);
    t.true(components.length >= 1);
});
