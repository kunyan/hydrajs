import {getUri} from '../utils/fetch';
import Env from '../utils/env';
import {IShiftsMetadata} from '../models/skedge/shiftsMetadata';

export function getAllShiftsMetadata(): Promise<IShiftsMetadata[]> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/skedge/shiftsMetadata/`);
    return getUri<IShiftsMetadata[]>(uri);
}
