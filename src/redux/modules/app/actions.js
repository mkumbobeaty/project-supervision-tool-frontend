
import * as types from './types'
import { makeActionCreator } from '../../../Util';

/**
 * @function
 * @name reloadPage
 */
export const reloadPage = makeActionCreator(types.RELOAD_PAGE);

/**
 * @function
 * @name restoreAccessToken
 * @param {String} payload the access token
 */
export const restoreAccessToken = makeActionCreator(types.RESTORE_ACCESS_TOKEN, 'payload');

