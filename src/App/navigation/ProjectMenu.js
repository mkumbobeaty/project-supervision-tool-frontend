import React from "react";

import { Menu } from "antd";
import { Link } from "react-router-dom";

const ProjectMenu = ({ project, baseUrl }) => {
  return (
    <div className="ProjectMenu">
       <h3 className="text-blue">{project.code}</h3> 
      <Menu
        mode="inline"
        theme="dark"
      >
        <Menu.Item>
          <span className="CustomizedIcon" />
          <Link to={`${baseUrl}/projects/${project.id}`}>Overview</Link>
        </Menu.Item>
        <Menu.Item>
          <span className="CustomizedIcon" />
          <Link to={`${baseUrl}/procuring-entity`}>Procuring Entity</Link>
        </Menu.Item>
        <Menu.Item>
          <span className="CustomizedIcon" />
          <Link to={`${baseUrl}/projects/packages`}>Package</Link>
        </Menu.Item>
        <Menu.Item>
          <span className="CustomizedIcon" />
          <Link to={`${baseUrl}/projects/sub-projects`}>Sub-project</Link>
        </Menu.Item>
        <Menu.Item>
          <span className="CustomizedIcon" />
          <Link to={`${baseUrl}/projects/map`}>Project Map</Link>
        </Menu.Item>
        <Menu.Item>
          <span className="CustomizedIcon" />
          <Link to={`${baseUrl}/projects/tickets`}>Tickets</Link>
        </Menu.Item>
        <Menu.Item>
          <span className="CustomizedIcon" />
          <Link to={`${baseUrl}/projects/contract`}>Contracts</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default ProjectMenu;
