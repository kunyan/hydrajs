import {getUri} from '../utils/fetch';
import Env from '../utils/env';
import {ICertification} from '../models/certification/certification';

export function getCertification(caseId: string): Promise<ICertification> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cwe/cases/${caseId}/certifications`);
    return getUri<ICertification>(uri);
}
