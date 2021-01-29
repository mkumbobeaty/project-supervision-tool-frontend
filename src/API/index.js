
import projectsAPI from './projects';
import focalPeopleAPI from './focal_people';
import locationsAPI from './locations';
import sectorAPI from  './sectors';
import subProjectsAPI from  './sub_projects';
import agenciesAPI from './agencies';
import moneyAPI from './money';
import subProjectElementsAPI from  './sub_project_elements';
import environmentalCategoriesAPI from  './environmental_categories';
import itemsAPI from './items';
import progressAPI from './progress'
import wfsRequests from  './wfs_requests';

export default {
    ...projectsAPI,
    ...focalPeopleAPI,
    ...locationsAPI,
    ...sectorAPI,
    ...moneyAPI,
    ...subProjectsAPI,
    ...agenciesAPI,
    ...subProjectElementsAPI,
    ...environmentalCategoriesAPI,
    ...wfsRequests,
    ...itemsAPI,
    ...progressAPI
}
