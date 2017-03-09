import test                     from 'ava';
import * as certificationApi    from './certification';

test('should return certification for case number 2909043', async t => {
    const caseNumber = '01902863';
    const certification = await certificationApi.getCertification(caseNumber);
    t.truthy(certification);
    t.is(certification.portalId, 2909053);
});
