import {getUri, postUri, putUri, deleteUri} from '../utils/fetch';
import Env from '../utils/env';
import {IShiftMetadata, ICreateShiftMetadata} from '../models/skedge/shiftMetadata';

export function getAllShiftMetadatas(): Promise<IShiftMetadata[]> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/skedge/shiftsMetadata/`);
    return getUri<Promise<IShiftMetadata[]>>(uri);
}

export function createShiftMetadata(shiftMetadata: ICreateShiftMetadata): Promise<IShiftMetadata> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/skedge/shiftsMetadata/`);
    return postUri<Promise<IShiftMetadata>>(uri, shiftMetadata);
}

export function updateShiftMetadata(shiftId: string, shiftMetadata: ICreateShiftMetadata): Promise<IShiftMetadata> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/skedge/shiftsMetadata/${shiftId}`);
    return putUri<Promise<IShiftMetadata>>(uri, shiftMetadata);
}

export function deleteShiftMetadata(shiftId: string): Promise<any> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/skedge/shiftsMetadata/${shiftId}`);
    return deleteUri<any>(uri);
}
