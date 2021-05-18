import React from 'react';
import PropTypes from 'prop-types';
import projectIcon from '../../assets/icons/projects.svg';
import adminPanelIcons from '../../assets/icons/admin-panel-grey.svg';
import NavigationMenu from '../components/NavigationMenu';
import subProjectsIcon from '../../assets/icons/sub-projects.svg';
import mapsIcon from "../../assets/icons/maps.svg";
import contractsIcons from '../../assets/icons/contract-management-grey.svg';
import documentIcons from '../../assets/icons/shared-documents-grey.svg';
import modules from '../../modules.json';

// import adminPanelIcons from '../../assets/icons/admin-pane-greyl.svg';

/* constants */
const routes = [

  {
    name: 'Projects',
    path: '/projects',
    icon: projectIcon,
    description: modules.humanResource,
  },
  {
    name: 'Sub Projects',
    path: '/sub_projects',
    icon: subProjectsIcon,
    description: modules.initiatives,
  },
  {
    name: 'MAPS',
    path: '/map',
    icon: mapsIcon,
    description: modules.map,
  },
  {
    name: 'Admin Panel',
    path: '/admin-panel',
    icon: adminPanelIcons,
    description: modules.adimin_panel,
    disabled: true,

  },
  {
    name: 'CONTRACT MANAGEMENT',
    path: '/contracts',
    icon: contractsIcons,
    description: modules.contract_management,
    disabled: true,

  },
  {
    name: 'Documents',
    path: '/documents',
    icon: documentIcons,
    description: modules.documents,
    disabled: true,

  }
];

/**
 * @function
 * @name HomeNavMenu
 * @description Home component which shows to base navigation menu
 * @param {object} props Component Props
 * @param {object} props.match Match prop from react router
 * @returns {object} Navigation Menu
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const HomeNavMenu = ({ match }) => (
  <NavigationMenu routes={routes} match={match} />
);

HomeNavMenu.propTypes = {
  match: PropTypes.shape({ url: PropTypes.string }).isRequired,
};
export default HomeNavMenu;
