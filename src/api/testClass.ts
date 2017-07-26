import Env                  from '../utils/env';
import { getUri }           from '../utils/fetch';
import { ITestClass }       from '../models/certification/certificationTest';

export function getTestClasses(productType: string): Promise<Array<ITestClass>> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/cwe/testclasses?productType=${productType}&isSupport=true`);
    return getUri<Promise<ITestClass[]>>(uri);
}
