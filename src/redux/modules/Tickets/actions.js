/*  Projects Action creators */
import * as types from "./types";
import {makeActionCreator} from "../../../Util";

/**
 * @function
 * @name getTicketsStart
 * @return {Object} action
 * */
export const getTicketsStart = makeActionCreator(types.GET_TICKETS_START);

/**
 * @function
 * @name getTicketsSuccess
 * @param {Object} payload tickets
 * @return {Object} action
 * */
export const getTicketsSuccess = makeActionCreator(types.GET_TICKETS_SUCCESS, 'payload');

/**
 * @function
 * @name getTicketsFailure
 * @param {Object} payload ticketst failure response
 * @return {Object} action
 * */
export const getTicketsFailure = makeActionCreator(types.GET_TICKETS_FAILURE, 'payload');
