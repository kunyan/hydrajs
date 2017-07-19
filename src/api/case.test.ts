import test from 'ava';
import * as caseApi from './case';
import { ICase_fields } from '../models/case';

test('should return specified fields for case 00023622', async t => {
    const fields: ICase_fields = [
        'id',
        'caseNumber',
        // 'account.id',
    ];

    const kase = await caseApi.getCase('00023622', fields);
    t.truthy(kase);
    t.truthy(kase.id);
    t.is(kase.caseNumber, '00023622');
    // t.is(kase.account.id, '001A000000K8A0dIAF');
});

test('should return escalations for case 01828054', async t => {
    const caseNumber = '01828054';

    const escalations = await caseApi.getEscalations(caseNumber);
    t.truthy(escalations);
    t.true(escalations.length >= 1);
});