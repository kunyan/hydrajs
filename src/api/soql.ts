import { postUri }  from '../utils/fetch';
import Env                  from '../utils/env';

export function postSoql<T>(queryString: string): Promise<T> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/soql`);
    return postUri<Promise<T>>(uri, {
        query: queryString
    });
}