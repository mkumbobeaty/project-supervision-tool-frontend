import * as actions from "./actions";
import * as API from "../../../API";
import { ofType } from "redux-observable";
import * as types from './types';
import { switchMap, catchError } from 'rxjs/operators';
import { of, from } from 'rxjs';
import axios from 'axios';

export const getProjectsEpic = $action => $action.pipe(
  ofType(types.GET_PROJECTS_START),
  switchMap(() => from(axios.get('https://api.github.com/repos/octocat/Hello-World/issues').then(res =>  {
    return (console.log(res.results))
  }))),
  switchMap(data => of(actions.getProjectSuccess(data))),
  catchError(error => actions.getProjectFailure(error))
)
