import test                     from 'ava';
import * as certificationApi    from './certification';
import { IRedHatProduct }       from '../models/certification/certification';

test('should return certification for case number 2909043', async t => {
    const caseNumber = '01902863';
    const certification = await certificationApi.getCertification(caseNumber);
    t.truthy(certification);
    t.is(certification.portalId, 2909053);
});

test.only('should get certification for case number 2909043, and update it', async t => {
    // Get a certification
    const caseNumber = '01902863';
    const certification = await certificationApi.getCertification(caseNumber);
    t.truthy(certification);
    t.is(certification.portalId, 2909053);

    // Update it
    const newRedHatProduct: IRedHatProduct = {
        name: 'Red Hat Enterprise Linux',
        minorVersion: '7.0',
        platform: 'x86_64',
    };
    certification.rhProduct = newRedHatProduct;
    const updated = await certificationApi.updateCertification(certification);
    t.truthy(updated);
    t.is(updated.case.caseNumber, caseNumber);

    // Verify
    const updatedCertification = await certificationApi.getCertification(caseNumber);
    t.truthy(updatedCertification);
    t.is(certification.rhProduct, newRedHatProduct);

});
