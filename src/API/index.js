
import projectsAPI from './projects';
import focalPeopleAPI from './focal_people';
import locationsAPI from './locations';

export default {
    ...projectsAPI,
    ...focalPeopleAPI,
    ...locationsAPI,
}
