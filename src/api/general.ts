import Env                      from '../utils/env';
import { getUri }               from '../utils/fetch';

export function health(): Promise<string> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/health`);
    return getUri<string>(uri);
}

export function hostname(): string {
    return Env.hydraHostName.toString();
}