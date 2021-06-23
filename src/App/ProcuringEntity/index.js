import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { ProcuringEntityActions, ProcuringEntitySelectors, } from '../../redux/modules/ProcuringEntities';
import PropTypes from 'prop-types';
import { Col, } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Topbar from "../components/Topbar";
import ProcuringEntitiesList from "../components/List";
import ListItem from "../components/ListItem";
import ListItemActions from "../components/ListItemActions";
import { isoDateToHumanReadableDate } from '../../Util';
import { useHistory } from 'react-router-dom';
import "./styles.css";


/* constants */
const nameSpan = { xxl: 5, xl: 5, lg: 5, md: 5, sm: 19, xs: 19};
const websiteSpan = { xxl: 5, xl: 5, lg: 5, md: 5, sm: 4, xs: 2 };
const subComponentSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 0, xs: 0 };
const packageSpan = { xxl: 5, xl: 5, lg: 5, md: 5, sm: 0, xs: 0 };

const headerLayout = [
    { ...nameSpan, header: "Name" },
    { ...websiteSpan, header: "Website" },
    { ...subComponentSpan, header: "Project Sub-Component" },
    { ...packageSpan, header: "Package" },

];


const ProcuringEntities = ({ getProcuringEntities, procuringEntity, loading, }) => {


    useEffect(() => {
        getProcuringEntities()
    }, [])

    /**   
   * @function
   * @name handleRefresh
   * @description Handle refresh action
   *
   * @version 0.1.0
   * @since 0.1.0
   */
    const handleRefresh = () => {
        getProcuringEntities();
    };


    return (
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
                        onClick: '',
                    },
                ]}
            />
            {/* end Topbar */}

            {/* list starts */}
            <ProcuringEntitiesList
                itemName="ProcuringEntities"
                items={procuringEntity}
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
                                        onClick: () => (item),
                                    }}
                                    archive={{
                                        name: "Archive Procuring Entity",
                                        title:
                                            "Remove Sub project from list of active Procuring Entity",
                                        onClick: () => this.showArchiveConfirm(item),
                                    }}
                                    view={
                                        {
                                            name: "View Details",
                                            title: "View more detail of selected Procuring Entity",
                                            // onClick: () => handleViewDetails(item.id)
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


        </div>

    )
}


const mapStateToProps = (state) => {
    return {
        procuringEntity: ProcuringEntitySelectors.getProcuringEntities(state),
        loading: ProcuringEntitySelectors.loading(state),
    }
}

const mapDispatchToProps = {
    getProcuringEntities: ProcuringEntityActions.getProcuringEntitiesStart,
}

ProcuringEntities.propTypes = {
    getProcuringEntities: PropTypes.func.isRequired,
    procuringEntity: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
};

ProcuringEntities.defaultProps = {
    procuringEntity: null,
    loading: null
}

export default connect(mapStateToProps, mapDispatchToProps)(ProcuringEntities);
