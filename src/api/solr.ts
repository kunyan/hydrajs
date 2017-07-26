import { getUri }               from '../utils/fetch';
import Env                      from '../utils/env';
import { ISolrQuery }           from '../models/solr/solr';
import { IHeaderParamOption }   from '../models/general';

export function getSolrAccess<T>(solrQuery: ISolrQuery): Promise<T> {
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/solr/access`)
        .addQueryParam('q', solrQuery.q)
        .addQueryParam('fl', '*, score') // this will add the score to each response
        // It's currently not completely clear if we need to explictly set the language facet.  Mani was unsure.
        // .addQueryParam('fq', 'language:(en)')
        .addQueryParam('fq', solrQuery.fq)
        .addQueryParam('sort', solrQuery.sort)
        .addQueryParam('facet', 'true')
        .addQueryParam('facet.field', 'accessState')
        .addQueryParam('facet.field', 'hasPublishedRevision')
        .addQueryParam('hl', 'true')
        .addQueryParam('hl.simple.post', '%3C%2Fmark%3E')
        .addQueryParam('hl.simple.pre', '%3Cmark%3E')
        .addQueryParam('hl.fl', 'abstract')
        .addQueryParam('enableElevation', 'true') // Enable hand picked solutions
        .addQueryParam('rows', solrQuery.rows)
        .addQueryParam('start', solrQuery.start)
        .addQueryParam('wt', 'json');

    const headerParams: IHeaderParamOption[] = [{
        key: 'Accept',
        value: 'application/vnd.redhat.solr+json'
    }];
    return getUri<Promise<T>>(uri, headerParams);
}

export function getSolrCases<T>(solrQuery: ISolrQuery): Promise<T> {
    if (solrQuery.q == null || solrQuery.q === '') throw 'SOLR Query is mandatory';
    const uri = Env.hydraHostName.clone().setPath(`${Env.pathPrefix}/solr/case`);

    uri.addQueryParam('wt', 'json');
    uri.addQueryParam('q', solrQuery.q);
    if (solrQuery.fq != null && solrQuery.fq !== '') {
        uri.addQueryParam('fq', solrQuery.fq);
    }
    if (solrQuery.start != null) {
        uri.addQueryParam('start', solrQuery.start);
    }
    if (solrQuery.rows != null) {
        uri.addQueryParam('rows', solrQuery.rows);
    }
    if (solrQuery.sort != null && solrQuery.sort !== '') {
        uri.addQueryParam('sort', solrQuery.sort);
    }
    if (solrQuery.fl != null && solrQuery.fl !== '') {
        uri.addQueryParam('fl', solrQuery.fl);
    }

    return getUri<Promise<T>>(uri);
}