import React from 'react';
import NavigationMenu from '../components/NavigationMenu';
import settingsIcons from '../../assets/icons/admin-panel.svg';
import modules from '../../modules.json';
import PropTypes from 'prop-types';

/* constants */
const routes = [

    // {
    //   name: 'Sub Project Items',
    //   path: '/sub-project-items',
    //   icon: itemsIcons,
    //   description: modules.map,
    // },
    // {
    //   name: 'Dashboards',
    //   path: '/dashboards',
    //   icon: dashboardIcon,
    //   description: modules.dashboards,
    // },
   
    // {
    //   name: 'Settings',
    //   path: '/settings',
    //   icon: settingsIcons,
    //   description: modules.dashboards,
    // },
    {
      name: 'Agencies',
      path: '/Agencies',
      icon: settingsIcons,
      description: modules.dashboards,
    },
      {
        name: 'users',
        path: '/users',
        icon: settingsIcons,
        description: modules.dashboards,
      },

    {
        name: 'User roles',
        path: '/roles',
        icon: settingsIcons,
        description: modules.dashboards,
      },
      {
        name: 'Permission',
        path: '/permission',
        icon: settingsIcons,
        description: modules.dashboards,
      }
      
];


/**
 * @function
 * @name AdminPanel
 * @description Component which shows to admin panel navigation menu
 * @param {object} props Component Props
 * @param {object} props.match Match prop from react router
 * @returns {object} Navigation Menu
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const AdminPanel = ({ match }) => {
    return (
        <NavigationMenu routes={routes} match={match} />
    )
}

AdminPanel.propTypes = {
    match: PropTypes.shape({ url: PropTypes.string }).isRequired,
};

export default AdminPanel;