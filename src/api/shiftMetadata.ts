import {getUri} from '../utils/fetch';
import Env from '../utils/env';
import {IShiftMetadata} from '../models/skedge/shiftMetadata';

export function getAllShiftMetadata(): Promise<IShiftMetadata[]> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/skedge/shiftsMetadata/`);
    return getUri<IShiftMetadata[]>(uri);
}
