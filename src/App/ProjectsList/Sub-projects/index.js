import React, {Component} from "react";
import {connect} from "react-redux";
import {projectActions, projectOperation, projectSelectors} from '../duck';
import {Col, Drawer, Modal} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import PropTypes from "prop-types";
import Topbar from "../../components/Topbar";
import List from "../../components/List";
import ListItem from "../../components/ListItem";
import ListItemActions from "../../components/ListItemActions";
import {Link} from "react-router-dom";
import CommonProjectForm from "../Projects/components/Forms";
import {focalPeopleOperation, focalPeopleSelectors} from "../../FocalPeople/duck";
import {projectSectorsSelectors} from "../Projects/components/ProjectsSectors/duck";
import {isoDateToHumanReadableDate} from "../../../Util";
import "./styles.css";
import SubProjectForm from "./Form";


/* constants */
const projectIdSpan = {xxl: 7, xl: 8, lg: 8, md: 11, sm: 12, xs: 14};
const organisationSpan = {xxl: 4, xl: 4, lg: 5, md: 6, sm: 8, xs: 5};
const borrowerSpan = {xxl: 3, xl: 3, lg: 4, md: 4, sm: 4, xs: 5};
const countrySpan = {xxl: 3, xl: 2, lg: 0, md: 0, sm: 0, xs: 0};
const statusSpan = {xxl: 2, xl: 2, lg: 0, md: 0, sm: 0, xs: 0};
const approvalSpan = {xxl: 2, xl: 2, lg: 4, md: 0, sm: 0, xs: 0};

const {confirm} = Modal;


const headerLayout = [
    {...projectIdSpan, header: "Name"},
    {...organisationSpan, header: "Contractor"},
    {...borrowerSpan, header: "LGA"},
    {...countrySpan, header: "Supervisor"},
    {...statusSpan, header: "Start date"},
    {...approvalSpan, header: "Closing Date"},
];


/**
 * @class
 * @name Projects
 * @description Render actions list which have search box, actions and Projects list
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
        const {fetchProjects, focalPeople} = this.props;
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
        const {selectProject, openSubProjectForm} = this.props;

        selectProject(project);
        this.setState({isEditForm: true});
        openSubProjectForm();
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
        const {cached: previousCached} = this.state;
        const values = {...previousCached, ...cached};
        this.setState({cached: values});
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
        this.setState({cached: null});
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
        const {deleteSubProject} = this.props;
        confirm({
            title: `Are you sure you want to archive this record ?`,
            okText: "Yes",
            okType: "danger",
            cancelText: "No",
            onOk() {
                deleteSubProject(item.id);
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
            projects,
            loading,
            searchQuery,
            showForm,
            subProjects,
        } = this.props;

        const {isEditForm} = this.state;
        return (
            <div>
                {/* Topbar */}
                <Topbar
                    search={{
                        size: "large",
                        placeholder: "Search for Sub Projects here ...",
                        onChange: () => {
                        },
                        value: searchQuery,
                    }}
                    actions={[
                        {
                            label: "New Sub Sub Project",
                            icon: <PlusOutlined/>,
                            size: "large",
                            title: "Add New Sub Sub Project",
                            onClick: this.openSubProjectForm,
                        },
                    ]}
                />
                {/* end Topbar */}

                {/* list starts */}
                <List
                    itemName="Sub Projects"
                    items={subProjects}
                    itemCount={subProjects.leading}
                    page={1}
                    loading={loading}
                    onFilter={() => {
                    }}
                    onRefresh={() => {
                    }}
                    onPaginate={() => {
                    }}
                    onShare={() => {
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
                                    archive={{
                                        name: "Archive sub project",
                                        title:
                                            "Remove sub project from list of active sub projects",
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
                                        pathname: `/app/sub_projects/${item.id}`,
                                    }}
                                >
                                    {item.name}
                                </Link>
                            </Col>
                            <Col {...organisationSpan}>{item?.details?.contractor ? item?.details?.contractor.name : 'N/A'}</Col>
                            <Col {...borrowerSpan}>{item?.details?.actor ? item?.details?.actor.name : 'N/A'}</Col>
                            <Col {...countrySpan}>{item?.details?.supervising_agency ? item?.details?.supervising_agency.name : 'N/A'}</Col>
                            <Col {...statusSpan}>{isoDateToHumanReadableDate(item.details?.start_date)}</Col>
                            <Col {...approvalSpan}>
                                {isoDateToHumanReadableDate(item.details?.end_date)}
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
                    bodyStyle={{paddingBottom: 80}}
                    destroyOnClose
                    maskClosable={false}
                    afterClose={this.handleAfterCloseForm}
                >
                    {/*<CommonProjectForm*/}
                    {/*    selected={selected}*/}
                    {/*    isEditForm={isEditForm}*/}
                    {/*    createProject={createProject}*/}
                    {/*    focalPeoples={focalPeoples}*/}
                    {/*    Projects={projects}*/}
                    {/*    getProjects={fetchProjects}*/}
                    {/*    handleAfterCloseForm={this.handleAfterCloseForm}*/}
                    {/*    handleAfterSubmit={this.closeSubProjectForm} />*/}
                    <SubProjectForm/>
                </Drawer>
            </div>
        );
    }
}

SubProjects.propTypes = {
    loading: PropTypes.bool.isRequired,
    subProjects: PropTypes.arrayOf(PropTypes.shape({name: PropTypes.string}))
        .isRequired,
    page: PropTypes.number.isRequired,
    searchQuery: PropTypes.string,
    total: PropTypes.number.isRequired,
};

SubProjects.defaultProps = {
    subProject: null,
    searchQuery: undefined,
};

const mapStateToProps = (state) => {
    return {
        subProjects: projectSelectors.getSubProjectsSelector(state),
        focalPeoples: focalPeopleSelectors.getFocalPeople(state),
        loading: projectSelectors.getSubProjectsLoadingSelector(state),
        page: projectSelectors.getProjectsPageSelector(state),
        total: projectSelectors.getProjectsTotalSelector(state),
        showForm: projectSelectors.getSubProjectShowFormSelector(state),
        selected: state.projects?.selectedProjects,
    };
};

const mapDispatchToProps = {
    fetchProjects: projectOperation.getSubProjectsStart,
    deleteSubProject: projectOperation.deleteSubProjectStart,
    selectProject: projectOperation.selectProject,
    focalPeople: focalPeopleOperation.getFocalPeopleStart,
    createProject: projectOperation.createProjectStart,
    openSubProjectForm: projectActions.openSubProjectForm,
    closeSubProjectForm: projectActions.closeSubProjectForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(SubProjects);




