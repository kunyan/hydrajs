import {getUri, postUri, deleteUri, deleteUriWithBody, putUri} from '../utils/fetch';
import Env from '../utils/env';
import {IUserShift} from '../models/skedge/userShift';
import {IUserShiftFilter} from '../models/skedge/userShiftFilter';

export function getAllShiftsForUsers(): Promise<IUserShift[]> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/skedge/shifts/`);
    return getUri<Promise<IUserShift[]>>(uri);
}

export function getShiftsForUserFilters(filters: IUserShiftFilter): Promise<IUserShift[]> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/skedge/shifts/filter`);
    return postUri<Promise<IUserShift[]>>(uri, filters);
}


export function postShiftsForUsers(userShifts: IUserShift[]): Promise<IUserShift[]> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/skedge/shifts/bulk`);
    return postUri<Promise<IUserShift[]>>(uri, userShifts);
}

export function editShiftForUser(shiftRecordId: number, updatedShiftDetails: IUserShift): Promise<IUserShift> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/skedge/shifts/${shiftRecordId}`);
    return putUri<Promise<IUserShift>>(uri, updatedShiftDetails);
}

export function deleteShiftByShiftId(shiftId: number): Promise<any> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/skedge/shifts/${shiftId}`);
    return deleteUri<any>(uri);
}

export function deleteShiftForUsers(userShifts: IUserShiftFilter): Promise<IUserShift> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/skedge/shifts/remove`);
    return deleteUriWithBody<Promise<IUserShift>>(uri, userShifts);
}
