import ProjectApi from '../api/mockProject';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadProjectSuccess(projects) {
  return {type: types.LOAD_PROJECTS_SUCCESS, projects};
}

export function loadProjects() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return ProjectApi.getAllProjects().then(projects => {
      dispatch(loadProjectSuccess(projects));
    }).catch(error => {
      throw(error);
    });
  };
}
