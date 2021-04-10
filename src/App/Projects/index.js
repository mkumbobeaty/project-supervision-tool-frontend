
import React, { Component } from "react";
import { connect } from "react-redux";
import { projectActions, projectOperation, projectSelectors } from '../../redux/modules/projects';
import { Col, Drawer, Modal, Spin } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import Topbar from "../components/Topbar";
import ProjectsList from "../components/List";
import ListItem from "../components/ListItem";
import ListItemActions from "../components/ListItemActions";
import { Link } from "react-router-dom";
import CommonProjectForm from "./components/Forms";
import { focalPeopleOperation, focalPeopleSelectors } from "../FocalPeople/duck";
import { projectSectorsOperator, projectSectorsSelectors } from "./components/ProjectsSectors/duck";
import ProjectLocations from "../Map/components/ProjectLocations";
import BaseMap from "../Map/BaseMap";
import SideNav from "../Map/components/SideNav";
import { mapSelectors } from "../../redux/modules/map";
import "./styles.css";


/* constants */
const codeSpan = { xxl: 2, xl: 3, lg: 3, md: 4, sm: 5, xs: 5 };
const projectIdSpan = { xxl: 3, xl: 2, lg: 2, md: 3, sm: 5, xs: 5 };
const nameSpan = { xxl: 5, xl: 5, lg: 5, md: 7, sm: 0, xs: 0 };
const subProjectsSpan = { xxl: 2, xl: 2, lg: 2, md: 2, sm: 5, xs: 5 };
const projectLeadSpan = { xxl: 3, xl: 3, lg: 4, md: 0, sm: 0, xs: 0 };
const statusSpan = { xxl: 3, xl: 3, lg: 3, md: 4, sm: 5, xs: 5 };
const projectCoordinatorSpan = { xxl: 3, xl: 3, lg: 2, md: 0, sm: 0, xs: 0 };

const { confirm } = Modal;

const headerLayout = [
  { ...codeSpan, header: "Code" },
  { ...projectIdSpan, header: "Project ID" },
  { ...nameSpan, header: "Name" },
  { ...subProjectsSpan, header: "Sub-projects" },
  { ...statusSpan, header: "Status" },
  { ...projectLeadSpan, header: "Project Lead" },
  { ...projectCoordinatorSpan, header: "Project Coordinator" },
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
    previewOnMap: false,
  };

  componentDidMount() {
    const { fetchProjects, focalPeople } = this.props;
    fetchProjects();
    focalPeople();
  }
  /**
   * @function
   * @name handleEdit
   * @description Handle on Edit action for list item
   *
   * @param {object} project Action Catalogue to be edited
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleEdit = (project) => {
    const { selectProject, openProjectForm } = this.props;

    selectProject(project);
    this.setState({ isEditForm: true });
    openProjectForm();
  };

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

  /**
   * @function
   * @name showArchiveConfirm
   * @description show confirm modal before archiving a Event Initiative
   * @param {object} item Resource item to be archived
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  showArchiveConfirm = (item) => {
    const { deleteProject } = this.props;
    confirm({
      title: `Are you sure you want to archive this record ?`,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deleteProject(item.id);
      },
    });
  };


  /**
   * @function
   * @name openProjectForm
   * @description Open Human Resources form
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  openProjectForm = () => {
    const { openProjectForm } = this.props;
    openProjectForm();
  };

  /**
   * @function
   * @name closeProjectForm
   * @description close Human Resources form
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  closeProjectForm = () => {
    this.setState({ isEditForm: false, visible: false });
    const { closeProjectForm, selectProject } = this.props;
    selectProject(null);
    closeProjectForm();
  };

  /**
     * @function
     * @name handleAfterCloseForm
     * @description Perform post close form cleanups
     *
     * @version 0.1.0
     * @since 0.1.0
     */
  handleAfterCloseForm = () => {
    const { selectProject } = this.props;
    selectProject(null);
    this.setState({ isEditForm: false });
  };

  /**   
   * @function
   * @name handleSearch
   * @description Handle list search action
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleSearch = (searchData) => {
    console.log(searchData)
    this.props.searchProject({ searchQuery: searchData })
  };

  /**   
   * @function
   * @name handleRefresh
   * @description Handle refresh action
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleRefresh = () => {
    this.props.fetchProjects()
  };

  /**
  * @function
  * @name handleViewDetails
  * @description Handle detail preview
  *
  * @version 0.1.0
  * @since 0.1.0
  */
  handleViewDetails = (item_id) => {
    const { getProject } = this.props;
    getProject(item_id);
    let path = `/app/projects/${item_id}`;
    this.props.history.push(path);
  };
  /**
   * @function
   * @name handleMapPreview
   * @description Handle map preview
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleMapPreview = (item) => {
    const { getProject,} = this.props;
    this.setState({ previewOnMap: true })
    getProject(item.id);
  };


  render() {
    const {
      projects,
      loading,
      page,
      total,
      paginateProject,
      searchQuery,
      showForm,
      selected,
      focalPeoples,
      createProject,
      fetchProjects,
      mapLoading,
      project
    } = this.props;

    const { isEditForm, previewOnMap } = this.state;
    return previewOnMap ? <div className="MapDashboard">
      <SideNav>
      </SideNav>
      <Spin spinning={mapLoading} tip="Loading data...">
        <BaseMap ref={this.map} zoomControl={true}>
          <ProjectLocations project={project} />
        </BaseMap>
      </Spin>
    </div> : (
        <div>
          {/* Topbar */}
          <Topbar
            search={{
              size: "large",
              placeholder: "Search for Projects here ...",
              onSearch: this.handleSearch,
              onChange: this.searchInitiative,
              value: searchQuery,
            }}
            actions={[
              {
                label: "New Project",
                icon: <PlusOutlined />,
                size: "large",
                title: "Add New Project",
                onClick: this.openProjectForm,
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
            itemCount={total}
            onFilter={this.openFiltersModal}
            onRefresh={this.handleRefresh}
            onPaginate={(nextPage) => {
              paginateProject({ page: nextPage });
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
                  // onSelectItem={onSelectItem}
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
                      view={
                        {
                          name: "View Deatail",
                          title: "View more detail of selected project",
                          onClick: () => this.handleViewDetails(item.id)
                        }
                      }
                      onMapPreview={
                        {
                          name: "Preview on Map",
                          title: "View Project on map",
                          onClick: () => this.handleMapPreview(item)
                        }
                      }
                    />

                  )}
                >
                  {/* eslint-disable react/jsx-props-no-spreading */}
                  <Col {...codeSpan} title={item.name} className="contentEllipse" >{item ? item?.code.toUpperCase() : 'N/A'}</Col>
                  <Col {...projectIdSpan} className="contentEllipse">
                    {" "}

                    {item.id ? item.id : "All"}
                  </Col>
                  <Col
                    {...nameSpan}
                    className="contentEllipse"
                    title={item.descrition}
                  >
                    <Link
                      to={{
                        pathname: `/app/projects/${item.id}`,
                      }}
                      className="Projects"
                    >
                      {item.name}
                    </Link>
                  </Col>
                  <Col {...subProjectsSpan}>{item.sub_projects ? item.sub_projects.length : 'N/A'}</Col>
                  <Col {...statusSpan}>{item?.details ? item?.details.status : 'N/A'}</Col>
                  <Col {...projectLeadSpan} title={item?.leaders.map(({ first_name, last_name }) => { return " " + first_name + " " + last_name })} >
                    {item.leaders ? item?.leaders.map(({ first_name, last_name }, index) => { return (index ? ", " : "") + first_name + " " + last_name }).slice(0, 2) : 'N/A'}</Col>
                  <Col {...projectCoordinatorSpan}>{item.details.implementing_agency ? item.details.implementing_agency.focalPerson.first_name + ' ' + item.details.implementing_agency.focalPerson.last_name : 'N/A'}</Col>

                  {/* eslint-enable react/jsx-props-no-spreading */}
                </ListItem>
              )}
          />
          {/* end list */}
          <Drawer
            title={
              isEditForm ? "Edit Projects" : "Add New Projects"
            } width={550}
            onClose={this.closeProjectForm}
            footer={null}
            visible={showForm}
            bodyStyle={{ paddingBottom: 80 }}
            destroyOnClose
            maskClosable={false}
            afterClose={this.handleAfterCloseForm}
          >
            <CommonProjectForm
              selected={selected}
              isEditForm={isEditForm}
              createProject={createProject}
              focalPeoples={focalPeoples}
              Projects={projects}
              getProjects={fetchProjects}
              handleAfterCloseForm={this.handleAfterCloseForm}
              handleAfterSubmit={this.closeProjectForm} />
          </Drawer>
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
    projects: projectSelectors.getProjectsSelector(state),
    focalPeoples: focalPeopleSelectors.getFocalPeople(state),
    loading: projectSelectors.getProjectsLoadingSelector(state),
    page: projectSelectors.getProjectsPageSelector(state),
    total: projectSelectors.getProjectsTotalSelector(state),
    showForm: projectSectorsSelectors.getShowFormSelector(state),
    selected: state.projects?.selectedProjects,
    mapLoading: mapSelectors.getMapLoadingSelector(state),
    project: projectSelectors.getProjectSelector(state)
  };
};

const mapDispatchToProps = {
  fetchProjects: projectOperation.getProjectsStart,
  deleteProject: projectOperation.deleteProjectStart,
  selectProject: projectOperation.selectProject,
  focalPeople: focalPeopleOperation.getFocalPeopleStart,
  createProject: projectOperation.createProjectStart,
  openProjectForm: projectSectorsOperator.openForm,
  closeProjectForm: projectSectorsOperator.closeForm,
  paginateProject: projectActions.getProjectsStart,
  searchProject: projectActions.getProjectsStart,
  getProject: projectActions.getProjectStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);




