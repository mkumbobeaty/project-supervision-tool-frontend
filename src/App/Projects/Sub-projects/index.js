
import React, { Component } from "react";
import { connect } from "react-redux";
import { projectOperation } from '../duck';
import { Col,Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import { isoDateToHumanReadableDate } from '../../../Util';
import Topbar from "../../components/Topbar";
import ProjectsList from "../../components/List";
import ListItem from "../../components/ListItem";
import ListItemActions from "../../components/ListItemActions";
import { Link } from "react-router-dom";
import "./styles.css";


/* constants */
const projectIdSpan = { xxl: 2, xl: 2, lg: 2, md: 3, sm: 2, xs: 3 };
const projectNameSpan = { xxl: 3, xl: 4, lg: 5, md: 8, sm: 10, xs: 11 };
const contractorSpan = { xxl: 3, xl: 3, lg: 2, md: 3, sm: 4, xs: 5 };
const phaseSpan = { xxl: 2, xl: 2, lg: 2, md: 2, sm: 0, xs: 0 };
const agencySpan = { xxl: 2, xl: 2, lg: 4, md: 3, sm: 4, xs: 5 };
const actorSpan = { xxl: 2, xl: 2, lg: 3, md: 3, sm: 4, xs: 0 };
const locationSpan = { xxl: 3, xl: 2, lg: 0, md: 0, sm: 0, xs: 0 };
const humanResourcesSpan = { xxl: 2, xl: 2, lg: 0, md: 0, sm: 0, xs: 0 };
const startDateSpan = { xxl: 2, xl: 2, lg: 4, md: 0, sm: 0, xs: 0 };

const { confirm } = Modal;


/**
 * @function
 * @name displayLocation
 * @description display location of human resource
 * @param {object} location to be display
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const displayLocation = (location) => {
  const regionLevel = `${location?.region?.name}`;
  const districtLvel = `${location?.region?.name}, ${location?.district?.name}`;
  return location?.district ? districtLvel : regionLevel;
};

const headerLayout = [
  { ...projectIdSpan, header: "Project ID" },
  { ...projectNameSpan, header: "Project Name" },
  { ...contractorSpan, header: "Contractor" },
  { ...phaseSpan, header: "Phase" },
  { ...agencySpan, header: "Supervision Agency" },
  { ...actorSpan, header: "Actor(LGA)" },
  { ...locationSpan, header: "Location" },
  { ...humanResourcesSpan, header: "Human resources" },
  { ...startDateSpan, header: "Start Date" },
];


/**
 * @class
 * @name Sub  Projects
 * @description Render actions list which have search box, actions and Sub Projects list
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class SubProjects extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    showShare: false,
    isEditForm: false,
    cached: null,
    visible: false,
  };

  componentDidMount() {
    const { fetchSubProjects } = this.props;
    fetchSubProjects()
  }

  /**
   * @function
   * @name handleOnCachedValues
   * @description Cached selected values for filters
   *
   * @param {object} cached values to be cached from filter
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleOnCachedValues = (cached) => {
    const { cached: previousCached } = this.state;
    const values = { ...previousCached, ...cached };
    this.setState({ cached: values });
  };

  /**
   * @function
   * @name handleClearCachedValues
   * @description Clear cached values
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleClearCachedValues = () => {
    this.setState({ cached: null });
  };


  render() {
    const {
      projects,
      loading,
      page,
      searchQuery,

    } = this.props;
    return (
      <div>
        {/* Topbar */}
        <Topbar
          search={{
            size: "large",
            placeholder: "Search for Projects here ...",
            onChange: this.searchInitiative,
            value: searchQuery,
          }}
          actions={[
            {
              label: "New Project",
              icon: <PlusOutlined />,
              size: "large",
              title: "Add New Project",
              onClick: this.openInitiativeForm,
            },
          ]}
        />
        {/* end Topbar */}

        {/* list starts */}
        <ProjectsList
          itemName="Projects"
          items={projects}
          page={page}
          loading={loading}
          onFilter={this.openFiltersModal}
          onRefresh={this.handleRefreshInitiative}
          
          headerLayout={headerLayout}
          renderListItem={({
            item,
            isSelected,
            onSelectItem,
            onDeselectItem,
          }) => (
              <ListItem
                key={item.id} // eslint-disable-line
                name={item.name}
                item={item}
                isSelected={isSelected}
                onSelectItem={onSelectItem}
                onDeselectItem={onDeselectItem}
                renderActions={() => (
                  <ListItemActions
                    edit={{
                      name: "Edit project",
                      title: "Update project details",
                      onClick: () => this.handleEdit(item),
                    }}
                    archive={{
                      name: "Archive project",
                      title:
                        "Remove project from list of active Projects",
                      onClick: () => this.showArchiveConfirm(item),
                    }}
                  />
                )}
              >
                {/* eslint-disable react/jsx-props-no-spreading */}
                <Col {...projectIdSpan} className="humanResourceEllipse">
                  {" "}
                  <Link
                    to={{
                      pathname: `/app/resources/initiatives/${item.project_id}`,
                    }}
                  >
                    {item.project_id ? item.project_id : "All"}
                  </Link>
                </Col>
                <Col
                  {...projectNameSpan}
                  className="humanResourceEllipse"
                  title={item.description}
                >
                  {item.name}
                </Col>
                <Col {...contractorSpan}>{item.details ? item.details.contractor.name : "Null"}</Col>
                <Col {...phaseSpan}>{item.details ? item.details.phase.name: "Null"}</Col>
                <Col {...agencySpan}>{item.details ? item.details.supervising_agency.name : "Null"}</Col>
                <Col {...actorSpan}>{item.details ? item.details.actor.name : "Null"}</Col>
                <Col {...locationSpan}>
                {item.sub_project_locations.length <= 0 ? "Null" : item.sub_project_locations.map(({ quantity }, index) => {
                    return (index ? ", " : "") + quantity;
                  })}
                  </Col>
                  <Col {...humanResourcesSpan} className="humanResourceEllipse">
                  {item.human_resources.length <= 0 ? "Null" : item.human_resources.map(({ quantity }, index) => {
                    return (index ? ", " : "") + quantity;
                  })}
                </Col>
                <Col {...startDateSpan}>
                  {isoDateToHumanReadableDate(item.details ? item.details.start_date : 'Not set')}
                </Col>

                {/* eslint-enable react/jsx-props-no-spreading */}
              </ListItem>
            )}
        />
        {/* end list */}
      </div>
    );
  }
}

SubProjects.propTypes = {
  loading: PropTypes.bool.isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string }))
    .isRequired,
  page: PropTypes.number.isRequired,
  searchQuery: PropTypes.string,
  total: PropTypes.number.isRequired,
};

SubProjects.defaultProps = {
  projects: null,
  searchQuery: undefined,
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects.sub_projects.data
      ? state.projects.sub_projects.data
      : []
  };
};

const mapDispatchToProps = {
  fetchSubProjects: projectOperation.getSubProjectsStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(SubProjects);




