import {getUri, postUri, deleteUri} from '../utils/fetch';
import Env from '../utils/env';
import {IUserShift} from '../models/skedge/userShift';
import {IUserShiftFilter} from '../models/skedge/userShiftFilter';

export function getAllShiftsForUsers(): Promise<IUserShift[]> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/skedge/shifts/`);
    return getUri<IUserShift[]>(uri);
}

export function getShiftsForUserFilters(filters: IUserShiftFilter): Promise<IUserShift[]> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/skedge/shifts/filter`);
    return postUri<IUserShift[]>(uri, filters);
}


export function postShiftsForUsers(userShifts: IUserShift[]): Promise<IUserShift[]> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/skedge/shifts/bulk`);
    return postUri<IUserShift[]>(uri, userShifts);
}

export function deleteShiftByShiftId(shiftId: number): Promise<any> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/skedge/shifts/${shiftId}`);
    return deleteUri<any>(uri);
}