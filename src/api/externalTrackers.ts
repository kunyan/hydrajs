import { getUri }           from '../utils/fetch';
import Env                  from '../utils/env';

import {
    IExternalTracker,
    IExternalTrackerUpdate
} from '../models/externalTracker';

export function getExternalTrackers(externalTrackerId: string, fields?: string[]): Promise<IExternalTracker[]> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/externaltrackers/{id}`);
    if (fields && fields.length > 0) {
        uri.addQueryParam('fields', fields.join(','));
    }
    return getUri<IExternalTracker[]>(uri);
}

export function getExternalTrackersUpdates(externalTrackerId: string, fields?: string[]): Promise<IExternalTrackerUpdate[]> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/externaltrackerupdates/{id}`);
    if (fields && fields.length > 0) {
        uri.addQueryParam('fields', fields.join(','));
    }
    return getUri<IExternalTrackerUpdate[]>(uri);
}