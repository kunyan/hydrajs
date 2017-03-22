import Env                  from '../utils/env';
import { getUri, putUri }           from '../utils/fetch';
import { ICertification }   from '../models/certification/certification';

export function getCertification(caseId: string): Promise<ICertification> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cwe/cases/${caseId}/certification`);
    return getUri<ICertification>(uri);
}

export function updateCertification(certification: ICertification): Promise<ICertification> {
    const caseNumber = certification.case.caseNumber;
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cwe/certifications/${caseNumber}`);
    return putUri<ICertification>(uri, certification);
}
