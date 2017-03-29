import Env                          from '../utils/env';
import { getUri, putUri, postUri }  from '../utils/fetch';
import { ICertification }           from '../models/certification/certification';

export function getCertification(caseNumber: string | number): Promise<ICertification> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cwe/cases/${caseNumber}/certification`);
    return getUri<ICertification>(uri);
}

export function updateCertification(certification: ICertification): Promise<ICertification> {
    const caseNumber = certification.kase.caseNumber;
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cwe/cases/${caseNumber}/certification`);
    return putUri<ICertification>(uri, certification);
}

export function createCertification(certification: ICertification): Promise<ICertification> {
    const caseNumber = certification.kase.caseNumber;
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cwe/certifications`);
    return postUri<ICertification>(uri, certification);
}
