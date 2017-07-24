import Env                                         from '../utils/env';
import { getUri, putUri, postUri }                 from '../utils/fetch';
import { ICertification, IOpenStackCertification } from '../models/certification/certification';

export function getCertification(caseNumber: string | number): Promise<ICertification> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cwe/certcases/${caseNumber}`);
    return getUri<ICertification>(uri);
}

export function updateCertification(certification: ICertification): Promise<ICertification> {
    const caseNumber = certification.kase.caseNumber;
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cwe/certcases/${caseNumber}`);
    return putUri<ICertification>(uri, certification);
}

export function createCertification(certification: ICertification): Promise<ICertification> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cwe/certcases`);
    return postUri<ICertification>(uri, certification);
}

export function getOpenStackCertification<T>(caseNumber: string | number): Promise<IOpenStackCertification<T>> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cwe/openstack/certcases/${caseNumber}`);
    return getUri<IOpenStackCertification<T>>(uri);
}

export function createOpenStackCertification<T>(certification: IOpenStackCertification<T>): Promise<IOpenStackCertification<T>> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cwe/openstack/certcases/`);
    return getUri<IOpenStackCertification<T>>(uri);
}

export function updateOpenStackCertification<T>(certification: IOpenStackCertification<T>): Promise<IOpenStackCertification<T>> {
    const caseNumber = certification.kase.caseNumber;
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cwe/openstack/certcases/${caseNumber}`);
    return getUri<IOpenStackCertification<T>>(uri);
}

