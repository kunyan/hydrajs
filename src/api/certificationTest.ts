import Env                      from '../utils/env';
import { getUri, putUri }       from '../utils/fetch';
import { ITestPlan, ITestData } from '../models/certification/certificationTest';

export function getCertificationTestPlans(caseNumber: string | number): Promise<Array<ITestPlan>> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cwe/certcases/${caseNumber}/testplans`);
    return getUri<Promise<Array<ITestPlan>>>(uri);
}

export function upsertCertificationTestPlans(caseNumber: string | number, testplans: Array<ITestPlan>): Promise<Array<ITestPlan>> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cwe/certcases/${caseNumber}/testplans`);
    return putUri<Promise<Array<ITestPlan>>>(uri, testplans);
}

export function getCertificationTestData(caseNumber: string | number): Promise<Array<ITestData>> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cwe/certcases/${caseNumber}/testdata`);
    return getUri<Promise<Array<ITestData>>>(uri);
}

