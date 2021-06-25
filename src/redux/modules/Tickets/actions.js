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


/**
 * @function
 * @name getTicketStart
 * @return {Object} action
 * */
export const getTicketStart = makeActionCreator(types.GET_TICKET_START, 'payload');

/**
 * @function
 * @name getTicketSuccess
 * @param {Object} payload tickets
 * @return {Object} action
 * */
export const getTicketSuccess = makeActionCreator(types.GET_TICKET_SUCCESS, 'payload');

/**
 * @function
 * @name getTicketFailure
 * @param {Object} payload ticketst failure response
 * @return {Object} action
 * */
export const getTicketFailure = makeActionCreator(types.GET_TICKET_FAILURE, 'payload');


/**
 * @function
 * @name createProjectTicketStart
 * @return {Object} action
 * */
export const createProjectTicketStart = makeActionCreator(types.CREATE_PROJECT_TICKET_START, 'payload');

/**
 * @function
 * @name createProjectTicketSuccess
 * @param {Object} payload tickets
 * @return {Object} action
 * */
export const createProjectTicketSuccess = makeActionCreator(types.CREATE_PROJECT_TICKET_SUCCESS, 'payload');

/**
 * @function
 * @name createProjectTicketFailure
 * @param {Object} payload ticketst failure response
 * @return {Object} action
 * */
export const createProjectTicketFailure = makeActionCreator(types.CREATE_PROJECT_TICKET_FAILURE, 'payload');

/**
 * @function
 * @name openTicketForm
 * @return {Object} action
 * */
export const openTicketForm = makeActionCreator(types.OPEN_TICKET_FORM);

/**
 * @function
 * @name closeTicketForm
 * @return {Object} action
 * */
export const closeTicketForm = makeActionCreator(types.CLOSE_TICKET_FORM);

/**
 * @function
 * @name getTicketByProjectStart
 * @return {Object} action
 * */
export const getTicketByProjectStart = makeActionCreator(types.GET_TICKET_BY_PROJECT_START, 'payload');

/**
 * @function
 * @name getTicketByProjectSuccess
 * @param {Object} payload tickets
 * @return {Object} action
 * */
export const getTicketByProjectSuccess = makeActionCreator(types.GET_TICKET_BY_PROJECT_SUCCESS, 'payload');

/**
 * @function
 * @name getTicketByProjectFailure
 * @param {Object} payload ticketst failure response
 * @return {Object} action
 * */
export const getTicketByProjectFailure = makeActionCreator(types.GET_TICKET_BY_PROJECT_FAILURE, 'payload');
