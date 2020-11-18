
import React, { Component } from "react";
import { connect } from "react-redux";
import { projectOperation } from '../duck';
import { Col, } from "antd";
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
const organisationSpan = { xxl: 3, xl: 3, lg: 2, md: 3, sm: 4, xs: 5 };
const borrowerSpan = { xxl: 2, xl: 2, lg: 2, md: 2, sm: 0, xs: 0 };
const agencySpan = { xxl: 2, xl: 2, lg: 4, md: 3, sm: 4, xs: 5 };
const sectorSpan = { xxl: 2, xl: 2, lg: 3, md: 3, sm: 4, xs: 0 };
const countrySpan = { xxl: 3, xl: 2, lg: 0, md: 0, sm: 0, xs: 0 };
const statusSpan = { xxl: 2, xl: 2, lg: 0, md: 0, sm: 0, xs: 0 };
const approvalSpan = { xxl: 2, xl: 2, lg: 4, md: 0, sm: 0, xs: 0 };



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
  { ...organisationSpan, header: "Funding Organisation" },
  { ...borrowerSpan, header: "Borrower" },
  { ...agencySpan, header: "Implementing Agency" },
  { ...sectorSpan, header: "Sectors" },
  { ...countrySpan, header: "Country" },
  { ...statusSpan, header: "Project status" },
  { ...approvalSpan, header: "Approval FY" },
];


/**
 * @class
 * @name Projects
 * @description Render actions list which have search box, actions and Projects list
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class Projects extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    showShare: false,
    isEditForm: false,
    cached: null,
    visible: false,
  };

  componentDidMount() {
    const { fetchProjects } = this.props;
    fetchProjects()
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
          onPaginate={(nextPage) => {
            this.paginateInitiative(nextPage);
          }}
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
                      name: "Edit Human Resources",
                      title: "Update Human Resources Details",
                      onClick: () => this.handleEdit(item),
                    }}
                    archive={{
                      name: "Archive Human Resources",
                      title:
                        "Remove Human Resources from list of active Human Resources",
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
                      pathname: `/app/resources/initiatives/${item.id}`,
                    }}
                  >
                    {item.details.project_id ? item.details.project_id : "All"}
                  </Link>
                </Col>
                <Col
                  {...projectNameSpan}
                  className="humanResourceEllipse"
                  title={item.description}
                >
                  {item.name}
                </Col>
                <Col {...organisationSpan}>{item.details.funding_organisation.name}</Col>
                <Col {...borrowerSpan}>{item.details.borrower.name}</Col>
                <Col {...agencySpan}>{item.details.implementing_agency.name}</Col>
                <Col {...sectorSpan} className="humanResourceEllipse">
                  {item.sectors.length <= 0 ? "Null" : item.sectors.map(({ name }, index) => {
                    return (index ? ", " : "") + name;
                  })}
                </Col>
                <Col {...countrySpan}>{item.details.country.name}, {item.details.project_region}</Col>
                <Col {...statusSpan}>{item.details.status.toString()}</Col>
                <Col {...approvalSpan}>
                  {isoDateToHumanReadableDate(item.details.approval_fy)}
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

Projects.propTypes = {
  loading: PropTypes.bool.isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string }))
    .isRequired,
  page: PropTypes.number.isRequired,
  searchQuery: PropTypes.string,
  total: PropTypes.number.isRequired,
};

Projects.defaultProps = {
  projects: null,
  searchQuery: undefined,
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects.main_projects.data
      ? state.projects.main_projects.data
      : []
  };
};

const mapDispatchToProps = {
  fetchProjects: projectOperation.getProjectsStart
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);




