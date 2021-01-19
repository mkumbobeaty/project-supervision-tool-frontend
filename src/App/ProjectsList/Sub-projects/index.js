import React, {Component} from "react";
import {connect} from "react-redux";
import {projectActions, projectOperation, projectSelectors} from '../duck';
import {Col, Drawer, Modal} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import PropTypes from "prop-types";
import Topbar from "../../components/Topbar";
import SubProjectsList from "../../components/List";
import ListItem from "../../components/ListItem";
import ListItemActions from "../../components/ListItemActions";
import {Link} from "react-router-dom";
import {isoDateToHumanReadableDate} from "../../../Util";
import SubProjectForm from "./Form";
import "./styles.css";


/* constants */
const subProjectNameSpan = { xxl: 3, xl: 4, lg: 5, md: 8, sm: 10, xs: 11 };
const contractorSpan = { xxl: 3, xl: 3, lg: 2, md: 3, sm: 4, xs: 5 };
const phaseSpan = { xxl: 2, xl: 2, lg: 2, md: 2, sm: 0, xs: 0 };
const agencySpan = { xxl: 2, xl: 2, lg: 4, md: 3, sm: 4, xs: 5 };
const actorSpan = { xxl: 2, xl: 2, lg: 3, md: 3, sm: 4, xs: 0 };
const locationSpan = { xxl: 5, xl: 4, lg: 0, md: 0, sm: 0, xs: 0 };
const startDateSpan = { xxl: 2, xl: 2, lg: 4, md: 0, sm: 0, xs: 0 };
const projectIdSpan = { xxl: 2, xl: 2, lg: 2, md: 3, sm: 2, xs: 3 };

const { confirm } = Modal;

const headerLayout = [
  { ...subProjectNameSpan, header: "Name" },
  { ...projectIdSpan, header: "Project ID" },
  { ...locationSpan, header: "Location" },
  { ...agencySpan, header: "Supervision Agency" },
  { ...contractorSpan, header: "Contractor" },
  { ...actorSpan, header: "Actor(LGA)" },
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
    const { getProject } = this.props;
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
        debugger
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
      const {openSubProjectForm} = this.props;
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
      console.log('closeSubProjectForm');
      this.setState({isEditForm: false, visible: false});
      const {closeSubProjectForm} = this.props;
      closeSubProjectForm();
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
      const {selectProject} = this.props;
      selectProject(null);
      this.setState({isEditForm: false});
  };

  render() {
    const {
      subProjects,
      searchQuery,
      loading,
      showForm
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
          itemName="Sub-project"
          items={subProjects}
          loading={loading}
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
                    onMapPreview={{
                      name: 'Preview Initiative on Map',
                      title: 'Preview Initiative on Map',
                      onClick: () => this.handleMapPreview(item.id),
                    }}
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
                  className="humanResourceEllipse"
                  title={item.description}
                >
                  {" "}
                  <Link
                    to={{
                      pathname: `/app/sub-projects/${item.id}`,
                    }}
                  >
                  {item.name}
                  </Link>
                </Col>
                <Col {...projectIdSpan} className="humanResourceEllipse">
                  {" "}
                  <Link
                    to={{
                      pathname: `/app/projects/${item.project_id}`,
                    }}
                  >
                    
                    {item.project_id ? item.project_id : "N/A"}
                  </Link>
                </Col>
                <Col {...locationSpan}  className="humanResourceEllipse">
                  {item.sub_project_locations.length <= 0 ? "" : item.sub_project_locations.map(({ district }, index) => {
                    return (index ? ", " : "") + district.name;
                  })}
                </Col>
                <Col {...agencySpan}>{item.details ? item.details.supervising_agency.name : "N/A"}</Col>
                <Col {...contractorSpan}>{item.details ? item.details.contractor.name : "N/A"}</Col>
                <Col {...actorSpan}>{item.details ? item.details.actor.name : "N/A"}</Col>
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
          <SubProjectForm />
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
};

const mapStateToProps = (state) => {
  return {
    subProjects: projectSelectors.getSubProjectsSelector(state),
    loading: projectSelectors.getSubProjectsLoadingSelector(state),
    showForm: projectSelectors.getSubProjectShowFormSelector(state),

  };
};

const mapDispatchToProps = {
  fetchSubProjects: projectOperation.getSubProjectsStart,
  deleteSubproject: projectOperation.deleteSubProjectStart,
  getProject: projectOperation.getProjectStart,
  openSubProjectForm: projectActions.openSubProjectForm,
  closeSubProjectForm: projectActions.closeSubProjectForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(SubProjects);


