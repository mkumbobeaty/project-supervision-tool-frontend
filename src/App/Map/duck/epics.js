import {ofType} from "redux-observable";
import {projectTypes} from "../../Projects/duck";
import {switchMap} from "rxjs/operators";
import {of} from "rxjs";


export const projectsPolygons = action$ =>  action$.pipe(
        ofType(projectTypes.GET_PROJECTS_SUCCESS),
        switchMap(({payload}) => {
            const projects = payload.data;
            const transformedProjects = projects.map((project) => {
                const { locations } = project;
                return locations.map( location => ({
                    location,
                    projectId: project.id,
                    projectName: project.name,
                    projectDescription: project.description,
                }));
            });

            // group projects by region
            return of()
        }),
    );
