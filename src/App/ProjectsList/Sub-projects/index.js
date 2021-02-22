import React, { Component } from "react";
import { connect } from "react-redux";
import { projectActions, projectOperation, projectSelectors } from '../../../redux/modules/projects';
import { Col, Drawer, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import Topbar from "../../components/Topbar";
import SubProjectsList from "../../components/List";
import ListItem from "../../components/ListItem";
import ListItemActions from "../../components/ListItemActions";
import { Link } from "react-router-dom";
import { isoDateToHumanReadableDate } from "../../../Util";
import SubProjectForm from "./Form";
import "./styles.css";
import { subProjectsActions, subProjectsSelectors } from "../../../redux/modules/subProjects";
import { bindActionCreators } from "redux";
// import { subProjectsActions, subProjectsSelectors } from "./duck";


/* constants */
const subProjectNameSpan = { xxl: 3, xl: 4, lg: 5, md: 8, sm: 10, xs: 11 };
const contractorSpan = { xxl: 5, xl: 3, lg: 5, md: 3, sm: 4, xs: 5 };
const phaseSpan = { xxl: 2, xl: 2, lg: 3, md: 2, sm: 4, xs: 0 };
const agencySpan = { xxl: 4, xl: 4, lg: 4, md: 3, sm: 4, xs: 5 };
const locationSpan = { xxl: 3, xl: 4, lg: 0, md: 0, sm: 0, xs: 0 };
const startDateSpan = { xxl: 2, xl: 2, lg: 4, md: 0, sm: 0, xs: 0 };
const projectIdSpan = { xxl: 2, xl: 2, lg: 2, md: 3, sm: 2, xs: 3 };

const { confirm } = Modal;

const headerLayout = [
  { ...subProjectNameSpan, header: "Name" },
  { ...projectIdSpan, header: "Project ID" },
  { ...locationSpan, header: "Location" },
  { ...agencySpan, header: "Supervision Agency" },
  { ...contractorSpan, header: "Contractor" },
  { ...phaseSpan, header: "Phase" },
  { ...startDateSpan, header: "Start Date" },
];


/**
 * @class
 * @name SubProjects
 * @description Render actions list which have search box, actions and Sub Projects list
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class SubProjects extends Component {

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
   * @name handleMapPreview
   * @description Handle map preview
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleMapPreview = (item_id) => {
    const { getProject, match: { params }
    } = this.props;
    getProject(item_id);
    console.log(item_id)
    let path = '/app/map';
    this.props.history.push(path);
  };

  /**
   * @function
   * @name showArchiveConfirm
   * @description show confirm modal before archiving a subproject
   * @param {object} item Resource item to be archived
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  showArchiveConfirm = (item) => {
    const { deleteSubproject } = this.props;
    confirm({
      title: `Are you sure you want to archive this record ?`,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deleteSubproject(item.id);
      },
    });
  };

  /**
  * @function
  * @name openSubProjectForm
  * @description Open Human Resources form
  *
  * @version 0.1.0
  * @since 0.1.0
  */
  openSubProjectForm = () => {
    const { openSubProjectForm } = this.props;
    openSubProjectForm();
  };

  /**
   * @function
   * @name closeSubProjectForm
   * @description close Human Resources form
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  closeSubProjectForm = () => {
    this.setState({ isEditForm: false, visible: false });
    const { closeSubProjectForm, selectSubProject } = this.props;
    selectSubProject(null)
    closeSubProjectForm();
  };

  // /**
  //  * @function
  //  * @name handleAfterCloseForm
  //  * @description Perform post close form cleanups
  //  *
  //  * @version 0.1.0
  //  * @since 0.1.0
  //  */
  // handleAfterCloseForm = () => {
  //   const { selectProject } = this.props;
  //   selectProject(null);
  //   this.setState({ isEditForm: false });
  // };

  /**
  * @function
  * @name handleEdit
  * @description Handle on Edit action for list item
  *
  * @param {object} subProject Action Catalogue to be edited
  *
  * @version 0.1.0
  * @since 0.1.0
  */
  handleEdit = (subProject) => {
    const { selectSubProject, openSubProjectForm, selected } = this.props;
    selectSubProject(subProject);
    this.setState({ isEditForm: true });
    openSubProjectForm();
  };


  render() {
    const {
      subProjects,
      searchQuery,
      loading,
      showForm,
      page,
      total,
      paginateSubProject
    } = this.props;

    const { isEditForm } = this.state;
    return (
      <div>
        {/* Topbar */}
        <Topbar
          search={{
            size: "large",
            placeholder: "Search for Sub-project here ...",
            onChange: this.searchInitiative,
            value: searchQuery,
          }}
          actions={[
            {
              label: "New Sub-project",
              icon: <PlusOutlined />,
              size: "large",
              title: "Add New Sub-project",
              onClick: this.openSubProjectForm,
            },
          ]}
        />
        {/* end Topbar */}

        {/* list starts */}
        <SubProjectsList
          itemName="Sub-projects"
          items={subProjects}
          page={page}
          itemCount={total}
          loading={loading}
          onPaginate={(nextPage) => {
            paginateSubProject(nextPage);
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
                      name: "Edit Sub-project",
                      title: "Update Sub-project details",
                      onClick: () => this.handleEdit(item),
                    }}
                    archive={{
                      name: "Archive Sub-project",
                      title:
                        "Remove Sub project from list of active Sub Projects",
                      onClick: () => this.showArchiveConfirm(item),
                    }}
                  />
                )}
              >
                {/* eslint-disable react/jsx-props-no-spreading */}

                <Col
                  {...subProjectNameSpan}
                  className="contentEllipse"
                  title={item.description}
                >
                  {" "}
                  <Link
                    to={{
                      pathname: `/app/sub_projects/${item.id}`,
                    }}
                    className="sub-project-list"
                  >
                    {item.name}
                  </Link>

                </Col>
                <Col {...projectIdSpan} className="contentEllipse">

                  {item.project_id ? item.project_id : "N/A"}
                </Col>
                <Col {...locationSpan} className="contentEllipse">
                  {item.sub_project_locations.length <= 0 ? "" : item.sub_project_locations.map(({ district }, index) => {
                    return (index ? ", " : "") + district.name;
                  })}
                </Col>
                <Col {...agencySpan} className="contentEllipse" title={item?.details?.supervising_agency.name}>{item.details ? item.details.supervising_agency.name : "N/A"}</Col>
                <Col {...contractorSpan} className="contentEllipse">{item.details ? item.details.contractor.name : "N/A"}</Col>
                {/* <Col {...actorSpan}>{item.details ? item.details.actor.name : "N/A"}</Col> */}
                <Col {...phaseSpan}>{item.details ? item.details.phase.name : "N/A"}</Col>
                <Col {...startDateSpan}>
                  {isoDateToHumanReadableDate(item.details ? item.details.start_date : 'N/A')}
                </Col>

                {/* eslint-enable react/jsx-props-no-spreading */}
              </ListItem>
            )}
        />
        {/* end list */}
        <Drawer
          title={
            isEditForm ? "Edit Sub Projects" : "Add New Sub Projects"}
          width={550}
          onClose={this.closeSubProjectForm}
          footer={null}
          visible={showForm}
          bodyStyle={{ paddingBottom: 80 }}
          destroyOnClose
          maskClosable={false}
          afterClose={this.handleAfterCloseForm}
        >
          <SubProjectForm isEditForm={isEditForm} onCancel={this.closeSubProjectForm} closeSubProjectForm={this.closeSubProjectForm} />
        </Drawer>
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
  loading: null,
};

const mapStateToProps = (state) => {
  return {
    subProjects: subProjectsSelectors.getSubProjectsSelector(state),
    loading: subProjectsSelectors.getSubProjectsLoadingSelector(state),
    showForm: projectSelectors.getSubProjectShowFormSelector(state),
    page: subProjectsSelectors.getSubProjectsPageSelector(state),
    total: subProjectsSelectors.getSubProjectsTotalSelector(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchSubProjects(current_page) {
    dispatch(subProjectsActions.getSubProjectsStart({ current_page }));
  }, 
  deleteSubproject: bindActionCreators(projectOperation.deleteSubProjectStart),
  paginateSubProject(current_page) {
    dispatch(subProjectsActions.getSubProjectsStart({ current_page }));
  },
  getProject: bindActionCreators(projectOperation.getProjectStart, dispatch),
  openSubProjectForm: bindActionCreators(projectActions.openSubProjectForm, dispatch),
  closeSubProjectForm: bindActionCreators(projectActions.closeSubProjectForm, dispatch),
  selectSubProject: bindActionCreators(subProjectsActions.selectedSubProject, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubProjects);


