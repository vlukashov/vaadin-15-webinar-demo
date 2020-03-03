// edit connect-client.default.ts:
//
// import {cache} from '../cache';
// const client = new ConnectClient({prefix: 'connect', middlewares: [cache]});

import {MiddlewareContext, MiddlewareNext} from '@vaadin/flow-frontend/Connect';

let _cache: Response;

export async function cache(context: MiddlewareContext, next: MiddlewareNext): Promise<Response> {
  try {
    const response = await next(context);
    if (context.endpoint === 'CardListEndpoint' && context.method === 'list') {
      _cache = response.clone();
    }
    return response;
  } catch (e) {
    if (context.endpoint === 'CardListEndpoint' && context.method === 'list' && _cache !== undefined) {
      return _cache.clone();
    }
    throw e;
  }
}