import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { ProcuringEntityActions, ProcuringEntitySelectors } from '../../../../redux/modules/ProcuringEntities';
import PropTypes from 'prop-types';
import { Col, Drawer } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Topbar from "../../../components/Topbar";
import CustomList from "../../../components/List";
import ListItem from "../../../components/ListItem";
import ListItemActions from "../../../components/ListItemActions";
import { getIdFromUrlPath, showArchiveConfirm } from '../../../../Util';
import { projectActions, projectSelectors } from "../../../../redux/modules/projects";
import "./styles.css";
import ProcuringEntityForm from '../Form';
import BaseLayout from '../../../layouts/BaseLayout';
import DynamicBreadcrumbs from '../../../components/DynamicBreadcrumbs';


/* constants */
const nameSpan = { xxl: 5, xl: 5, lg: 5, md: 5, sm: 19, xs: 19};
const websiteSpan = { xxl: 5, xl: 5, lg: 5, md: 5, sm: 4, xs: 2 };
const subComponentSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 0, xs: 0 };
const packageSpan = { xxl: 5, xl: 5, lg: 5, md: 5, sm: 0, xs: 0 };

const headerLayout = [
    { ...nameSpan, header: "Name" },
    { ...websiteSpan, header: "Website" },
    { ...subComponentSpan, header: "ProcuringEntities Sub-Component" },
    { ...packageSpan, header: "Package" },
];

const ProcuringEntitiesList = ({ 
    getProcuringEntities, 
    procuringEntities, 
    loading, 
    deleteProcuringEntity,
    openProcuringEntityForm,
    closeProcuringEntityForm,
    selectProcuringEntity,
    selected,
    showForm,
    createProcuringEntity,
    getAgenciesActors,
    agencies,
    getProjectSubComponent,
    projectSubComponents,
    updateProcuringEntity,
    projects,
    match,
    getProjects,
}) => {

    const [ isEditForm, setIsEditForm ] = useState(false);
    const [ visible, setVisible ] =  useState(false);
    const projectId = getIdFromUrlPath(match.path, 2);
    const filter = {'filter[projectSubComponent.projectComponent.project_id]': projectId};
    const history = useHistory();

    useEffect(() => {
        getProcuringEntities(filter)
    }, [])

    
  /**
   * @function
   * @name openProcuringEntityForm
   * @description Open form
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  const handleOpenProcuringEntityForm = () => {
    openProcuringEntityForm();
  };

  /**
   * @function
   * @name handleCloseProcuringEntityForm
   * @description close form
   * @version 0.1.0
   * @since 0.1.0
   */
  const handleCloseProcuringEntityForm = () => {
    setIsEditForm(false);
    setVisible(false);
    selectProcuringEntity(null);
    closeProcuringEntityForm();
  };

    /**   
   * @function
   * @name handleRefresh
   * @description Handle refresh action
   *
   * @version 0.1.0
   * @since 0.1.0
   */
    const handleRefresh = () => {
        getProcuringEntities(filter);
    };

    /**
   * @function
   * @name handleViewDetails
   * @description Handle handleViewDetails action
   *
   * @version 0.1.0
   * @since 0.1.0
   */
    const handleViewDetails = (item) => {
        const path = `${match.url}/${item.id}`;
        history.push(path);
    };


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
const  handleEdit = (item) => {
    selectProcuringEntity(item);
    setIsEditForm(true)
    openProcuringEntityForm();
  };

  const breadcrumbs =  procuringEntities.length > 0 ? [
    {
        title: 'Projects',
        url: '/projects',
        name: 'Projects'
    },
    {
        title: procuringEntities[0].project.code,
        url: `/projects/${procuringEntities[0].project.id}`,
        name: procuringEntities[0].project.name
    },
    {
        title: `Procuring Entities`,
        url: match.url,
        name: `Procuring Entities under ${procuringEntities[0].project.name}(${procuringEntities[0].project.code})`
    }
] : [];


    return (
        <BaseLayout breadcrumbs={<DynamicBreadcrumbs breadcrumbs={breadcrumbs} />}>

            <div>
                        {/* Topbar */}
                        <Topbar
                            search={{
                                size: "large",
                                placeholder: "Search for Procuring Entities here ...",
                                onSearch: '',
                            }}
                            actions={[
                                {
                                    label: "New Procuring Entity",
                                    icon: <PlusOutlined />,
                                    size: "large",
                                    title: "Add New Procuring Entity",
                                    onClick: handleOpenProcuringEntityForm,
                                },
                            ]}
                        />
                        {/* end Topbar */}

                        {/* list starts */}
                        <CustomList
                            itemName="ProcuringEntities"
                            items={procuringEntities}
                            page={1}
                            itemCount={1}
                            loading={loading}
                            onRefresh={handleRefresh}
                            headerLayout={headerLayout}
                            renderListItem={({
                                item,
                            }) => (
                                    <ListItem
                                        key={item.id} // eslint-disable-line
                                        name={item?.agency?.name}
                                        item={item}
                                        renderActions={() => (
                                            <ListItemActions
                                                edit={{
                                                    name: "Edit Procuring Entity",
                                                    title: "Update Procuring Entity details",
                                                    onClick: () => handleEdit(item),
                                                }}
                                                archive={{
                                                    name: "Archive Procuring Entity",
                                                    title:
                                                        "Remove Sub project from list of active Procuring Entity",
                                                    onClick: () => showArchiveConfirm(item, deleteProcuringEntity),
                                                }}
                                                view={
                                                    {
                                                        name: "View Details",
                                                        title: "View more detail of selected Procuring Entity",
                                                        onClick: () => handleViewDetails(item)
                                                    }
                                                }

                                            />
                                        )}
                                    >
                                        {/* eslint-disable react/jsx-props-no-spreading */}

                                        <Col {...nameSpan} >
                                            {item?.agency?.name ? item?.agency?.name : 'N/A'}
                                        </Col>
                                        <Col {...websiteSpan}  >

                                            {item?.agency?.website ? item?.agency?.website : "N/A"}
                                        </Col>
                                        <Col {...subComponentSpan} className="contentEllipse">
                                            {item?.project_sub_component ? item?.project_sub_component.name : 'N/A'}
                                        </Col>
                                
                                        <Col {...packageSpan} className="contentEllipse">
                                            {
                                                item?.packages.length > 0 ?
                                                    item?.packages?.map(({ name }, index) => { return (index ? ", " : "") + name })
                                                    : "N/A"
                                            }
                                        </Col>

                                        {/* eslint-enable react/jsx-props-no-spreading */}
                                    </ListItem>
                                )}
                        />
                        {/* end list */}

                        <Drawer
                        title={
                        isEditForm ? "Edit Procuring Entity" : "Add New Procuring Entity"
                        } width={550}
                        onClose={handleCloseProcuringEntityForm}
                        footer={null}
                        visible={showForm}
                        bodyStyle={{ paddingBottom: 80 }}
                        destroyOnClose
                        maskClosable={false}
                        // afterClose={handleAfterCloseForm}
                        className="projectForm"
                    >
                        <ProcuringEntityForm 
                            isEditForm={isEditForm}
                            selected={selected}
                            handleAfterSubmit={handleCloseProcuringEntityForm}
                            createProcuringEntity={createProcuringEntity}
                            getAgenciesActors={getAgenciesActors}
                            loading={loading}
                            agencies={agencies}
                            getProjectSubComponent={getProjectSubComponent}
                            projectSubComponents={projectSubComponents}
                            updateProcuringEntity ={updateProcuringEntity}
                            projects={projects}
                            match={match}
                            getProjects={getProjects}
                        />              

                    </Drawer>

                    </div>
        </BaseLayout>

    )
}


const mapStateToProps = (state) => {
    return {
        procuringEntities: ProcuringEntitySelectors.getProcuringEntities(state),
        loading: ProcuringEntitySelectors.loading(state),
        selected: ProcuringEntitySelectors.selectedProcuringEntity(state),
        showForm: ProcuringEntitySelectors.getShowFormSelector(state),
        agencies: ProcuringEntitySelectors.getActorsSelector(state),
        projectSubComponents: projectSelectors.getProjectSubComponents(state),
        projects: projectSelectors.getProjectsSelector(state),
    }
}

const mapDispatchToProps = {
    getProcuringEntities: ProcuringEntityActions.getProcuringEntitiesStart,
    deleteProcuringEntity: ProcuringEntityActions.deleteProcuringEntityStart,
    getAgenciesActors: ProcuringEntityActions.getActorsStart,
    openProcuringEntityForm:ProcuringEntityActions.openProcuringEntityForm,
    closeProcuringEntityForm:ProcuringEntityActions.closeProcuringEntityForm,
    selectProcuringEntity:ProcuringEntityActions.selectProcuringEntity,
    getProjectSubComponent: projectActions.getProjectSubComponentStart,
    createProcuringEntity: ProcuringEntityActions.createProcuringEntityStart,
    updateProcuringEntity: ProcuringEntityActions.updateProcuringEntityStart,
    getProjects: projectActions.getProjectsStart,
}

ProcuringEntitiesList.propTypes = {
    getProcuringEntities: PropTypes.func.isRequired,
    procuringEntities: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    openProcuringEntityForm:PropTypes.func.isRequired,
    closeProcuringEntityForm:PropTypes.func.isRequired,
    selectProcuringEntity:PropTypes.func.isRequired,
    showForm: PropTypes.bool,
    isEditForm: PropTypes.bool
};

ProcuringEntitiesList.defaultProps = {
    procuringEntities: [],
    loading: null,
    isEditForm: null,
    showForm:null
}

export default connect(mapStateToProps, mapDispatchToProps)(ProcuringEntitiesList);
