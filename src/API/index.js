
import projectsAPI from './projects';
import focalPeopleAPI from './focal_people';
import locationsAPI from './locations';
import sectorAPI from  './sectors';
import subProjectsAPI from  './sub_projects';
import subProjectElementsAPI from  './sub_project_elements';
import wfsRequests from  './wfs_requests';

export default {
    ...projectsAPI,
    ...focalPeopleAPI,
    ...locationsAPI,
    ...sectorAPI,
    ...subProjectsAPI,
    ...subProjectElementsAPI,
    ...wfsRequests,
}
