
import React, { Component } from "react";
import { connect } from "react-redux";
import { projectOperation, projectSelectors } from '../duck';
import { Col, Drawer, Modal, Steps } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import Topbar from "../../components/Topbar";
import ProjectsList from "../../components/List";
import ListItem from "../../components/ListItem";
import ListItemActions from "../../components/ListItemActions";
import { Link } from "react-router-dom";
import CommonProjectForm from "./components/Forms";
import { focalPeopleOperation, focalPeopleSelectors } from "../../FocalPeople/duck";
import { projectSectorsOperator, projectSectorsSelectors } from "./components/ProjectsSectors/duck";
import "./styles.css";
import { isoDateToHumanReadableDate } from "../../../Util";


/* constants */
const projectIdSpan = { xxl: 2, xl: 2, lg: 2, md: 3, sm: 2, xs: 3 };
const projectNameSpan = { xxl: 5, xl: 6, lg: 6, md: 8, sm: 10, xs: 11 };
const organisationSpan = { xxl: 4, xl: 4, lg: 5, md: 6, sm: 8, xs: 5 };
const borrowerSpan = { xxl: 3, xl: 3, lg: 4, md: 4, sm: 4, xs: 5 };
const countrySpan = { xxl: 3, xl: 2, lg: 0, md: 0, sm: 0, xs: 0 };
const statusSpan = { xxl: 2, xl: 2, lg: 0, md: 0, sm: 0, xs: 0 };
const approvalSpan = { xxl: 2, xl: 2, lg: 4, md: 0, sm: 0, xs: 0 };

const { confirm } = Modal;




const headerLayout = [
  { ...projectIdSpan, header: "Project ID" },
  { ...projectNameSpan, header: "Project Name" },
  { ...organisationSpan, header: "Funding Organisation" },
  { ...borrowerSpan, header: "Borrower" },
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

  render() {
    const {
      projects,
      loading,
      page,
      total,
      searchQuery,
      showForm,
      selected,
      focalPeoples,
      createProject,
      fetchProjects
    } = this.props;

    const { isEditForm } = this.state;
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
              onClick: this.openProjectForm,
            },
          ]}
        />
        {/* end Topbar */}

        {/* list starts */}
        <ProjectsList
          itemName="Projects"
          items={projects}
          // page={page}
          loading={loading}
          // itemCount={total}
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
                      pathname: `/app/projects/${item.id}`,
                    }}
                  >
                    {item.id ? item.id : "All"}
                  </Link>
                </Col>
                <Col
                  {...projectNameSpan}
                  className="humanResourceEllipse"
                  title={item.description}
                >
                  {item.name}
                </Col>
                <Col {...organisationSpan}>{item.details ? item.details?.funding_organisation?.name : 'Null'}</Col>
                <Col {...borrowerSpan}>{item.details ? item.details.borrower.name : 'Null'}</Col>
                <Col {...countrySpan}>{item.details?.country ? item.details.country.name : 'Not Specified'}</Col>
                <Col {...statusSpan}>{item.details ? item.details.status.toString() : 'Unknown'}</Col>
                <Col {...approvalSpan}>
                  {isoDateToHumanReadableDate(item.details?.approval_fy)}
                </Col>

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
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);




