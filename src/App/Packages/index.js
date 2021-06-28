import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { ProcuringEntityActions, ProcuringEntitySelectors, } from '../../redux/modules/ProcuringEntities';
import PropTypes from 'prop-types';
import { Col, Drawer } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Topbar from "../components/Topbar";
import PackagesList from "../components/List";
import ListItem from "../components/ListItem";
import ListItemActions from "../components/ListItemActions";
import { projectActions, projectSelectors } from "../../redux/modules/projects";
import { moneyFormat, showArchiveConfirm } from "../../Util";

import "./styles.css";


/* constants */
const nameSpan = { xxl: 4, xl: 4, lg: 4, md: 4, sm: 19, xs: 19};
const descriptionSpan = { xxl: 4, xl: 4, lg: 4, md: 4, sm: 0, xs: 0 };
const contractNoSpan = { xxl: 3, xl: 3, lg: 3, md: 3, sm: 4, xs: 2 };
const contractorSpan = { xxl: 3, xl: 3, lg: 3, md: 3, sm: 0, xs: 0 };
const estimentedAmountNoSpan = { xxl: 2, xl: 2, lg: 2, md: 2, sm: 4, xs: 2 };
const awardedAmountNoSpan = { xxl: 2, xl: 2, lg: 2, md: 2, sm: 4, xs: 2 };
const completeDateSpan = { xxl: 3, xl: 3, lg: 3, md: 3, sm: 0, xs: 0 };

const headerLayout = [
    { ...nameSpan, header: "Name" },
    { ...descriptionSpan, header: "Description" },
    { ...contractNoSpan, header: "Contract No" },
    { ...contractorSpan, header: "Contractor" },
    { ...estimentedAmountNoSpan, header: "Estimated Amount" },
    { ...awardedAmountNoSpan, header: "Awarded Amount" },
    { ...completeDateSpan, header: "Complete Date" },

];

const Packages = ({ 
    getPackes, 
    packages, 
    loading,
    match,
    deletePackage
}) => {

    const [ isEditForm, setIsEditForm ] = useState(false);
    const history = useHistory();

    useEffect(() => {
        getPackes()
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
        getPackes();
    };
;

  const getAmount = (data) => {
    const { amount, currency } = data
    const { iso } = currency;
    const money = moneyFormat(amount);
    return `${money} ${iso} `;
  }

    return (
        <div>
            {/* Topbar */}
            <Topbar
                search={{
                    size: "large",
                    placeholder: "Search for Packages here ...",
                    onSearch: '',
                }}
                actions={[
                    {
                        label: "New Package",
                        icon: <PlusOutlined />,
                        size: "large",
                        title: "Add New Package",
                        onClick: '',
                    },
                ]}
            />
            {/* end Topbar */}

            {/* list starts */}
            <PackagesList
                itemName="Packages"
                items={packages}
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
                            name={item?.name}
                            item={item}
                            renderActions={() => (
                                <ListItemActions
                                    edit={{
                                        name: "Edit Package",
                                        title: "Update Package details",
                                        onClick: '',
                                    }}
                                    archive={{
                                        name: "Archive Package",
                                        title:
                                            "Remove Sub project from list of active Package",
                                        onClick: () => showArchiveConfirm(item, deletePackage),
                                    }}
                                    view={
                                        {
                                            name: "View Details",
                                            title: "View more detail of selected Package",
                                            onClick: ''
                                        }
                                    }

                                />
                            )}
                        >
                            {/* eslint-disable react/jsx-props-no-spreading */}

                            <Col {...nameSpan} >
                                {item?.name ? item?.name : 'N/A'}
                            </Col>
                            <Col {...descriptionSpan} className="contentEllipse">
                                {item?.description ? item?.description : 'N/A'}
                            </Col>
                            <Col {...contractNoSpan}  >
                                {item?.contract?.contract_no ? item?.contract?.contract_no : "N/A"}
                            </Col>
                            <Col {...contractorSpan} className="contentEllipse">
                                {  item?.contract?.contractor ? item?.contract?.contractor?.name :'N/A' }
                            </Col>
                            <Col {...estimentedAmountNoSpan} className="contentEllipse">
                                {  item?.contract?.contract_cost ? getAmount(item?.contract?.contract_cost?.estimated_final_contract_price) :'N/A' }
                            </Col>
                            <Col {...awardedAmountNoSpan} className="contentEllipse">
                                {  item?.contract?.contract_cost ? getAmount(item?.contract?.contract_cost?.contract_award_value) :'N/A' }
                            </Col>
                            <Col {...completeDateSpan} className="contentEllipse">
                            {item ? new Date(item?.contract?.contract_time?.intended_completion_date).toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' }) : 'N/A'}
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
        packages: ProcuringEntitySelectors.getPackagesSelector(state),
        loading: ProcuringEntitySelectors.getPackagesloaderSelector(state),
    }
}

const mapDispatchToProps = {
    getPackes: ProcuringEntityActions.getPackagesStart,
    deletePackage: ProcuringEntityActions.deletePackageStart,
}

Packages.propTypes = {
    getPackage: PropTypes.func.isRequired,
    contractors: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    openProcuringEntityForm:PropTypes.func.isRequired,
    closeProcuringEntityForm:PropTypes.func.isRequired,
    selectProcuringEntity:PropTypes.func.isRequired,
    showForm: PropTypes.bool,
};

Packages.defaultProps = {
    contractors: null,
    loading: null,
    isEditForm: null,
    showForm:null
}

export default connect(mapStateToProps, mapDispatchToProps)(Packages);
