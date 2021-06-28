import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { ProcuringEntityActions, ProcuringEntitySelectors, } from '../../redux/modules/ProcuringEntities';
import PropTypes from 'prop-types';
import { Col, Drawer } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Topbar from "../components/Topbar";
import PackagesList from "../components/List";
import ListItem from "../components/ListItem";
import ListItemActions from "../components/ListItemActions";
import { moneyFormat, showArchiveConfirm } from "../../Util";
import PackageForm from './componets/Form';

import "./styles.css";


/* constants */
const nameSpan = { xxl: 4, xl: 4, lg: 4, md: 4, sm: 19, xs: 19 };
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
    showForm,
    deletePackage,
    createPackage,
    updatePackage,
    procuringEntities,
    openPackageForm,
    closePackageForm,
    selectPackage,
    selected,
    getProcuringEntities
}) => {

    const [isEditForm, setIsEditForm] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        getPackes()
    }, [])


    /**
      * @function
      * @name handleOpenPackageForm
      * @description Open form
      *
      * @version 0.1.0
      * @since 0.1.0
      */
    const handleOpenPackageForm = () => {
        openPackageForm();
    };

    /**
     * @function
     * @name handleClosePackageForm
     * @description close form
     * @version 0.1.0
     * @since 0.1.0
     */
    const handleClosePackageForm = () => {
        setIsEditForm(false);
        setVisible(false);
        selectPackage(null);
        closePackageForm();
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
        getPackes();
    };
    ;

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
    const handleEdit = (item) => {
        selectPackage(item);
        setIsEditForm(true)
        openPackageForm();
    };


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
                        onClick: handleOpenPackageForm,
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
                                        onClick: () => handleEdit(item),
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
                                {item?.contract?.contractor ? item?.contract?.contractor?.name : 'N/A'}
                            </Col>
                            <Col {...estimentedAmountNoSpan} className="contentEllipse">
                                {item?.contract?.contract_cost ? getAmount(item?.contract?.contract_cost?.estimated_final_contract_price) : 'N/A'}
                            </Col>
                            <Col {...awardedAmountNoSpan} className="contentEllipse">
                                {item?.contract?.contract_cost ? getAmount(item?.contract?.contract_cost?.contract_award_value) : 'N/A'}
                            </Col>
                            <Col {...completeDateSpan} className="contentEllipse">
                                {item ? new Date(item?.contract?.contract_time?.intended_completion_date).toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' }) : 'N/A'}
                            </Col>

                            {/* eslint-enable react/jsx-props-no-spreading */}
                        </ListItem>
                    )}
            />
            {/* end list */}

            <Drawer
                title={
                    isEditForm ? "Edit Package" : "Add New Package"
                } width={550}
                onClose={handleClosePackageForm}
                footer={null}
                visible={showForm}
                bodyStyle={{ paddingBottom: 80 }}
                destroyOnClose
                maskClosable={false}
                className="projectForm"
            >
                <PackageForm
                    isEditForm={isEditForm}
                    selected={selected}
                    createPackage={createPackage}
                    loading={loading}
                    updatePackage={updatePackage}
                    procuringEntities={procuringEntities}
                    getProcuringEntities={getProcuringEntities}

                />

            </Drawer>

        </div>

    )
}


const mapStateToProps = (state) => {
    return {
        packages: ProcuringEntitySelectors.getPackagesSelector(state),
        loading: ProcuringEntitySelectors.loadingPackages(state),
        procuringEntities: ProcuringEntitySelectors.getProcuringEntities(state),
        showForm: ProcuringEntitySelectors.showPackageFormSelector(state),
        selected: ProcuringEntitySelectors.selectedPackageSelector(state)
    }
}

const mapDispatchToProps = {
    getPackes: ProcuringEntityActions.getPackagesStart,
    deletePackage: ProcuringEntityActions.deletePackageStart,
    createPackage: ProcuringEntityActions.createPackageStart,
    updatePackage: ProcuringEntityActions.updatePackageStart,
    getProcuringEntities: ProcuringEntityActions.getProcuringEntitiesStart,
    openPackageForm: ProcuringEntityActions.openPackageForm,
    closePackageForm: ProcuringEntityActions.closePackageForm,
    selectPackage: ProcuringEntityActions.selectPackage,
}

Packages.propTypes = {
    getPackage: PropTypes.func.isRequired,
    packages: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    openPackageForm: PropTypes.func.isRequired,
    closePackageForm: PropTypes.func.isRequired,
    selectPackage: PropTypes.func.isRequired,
    showForm: PropTypes.bool,
};

Packages.defaultProps = {
    packages: null,
    loading: null,
    isEditForm: null,
    showForm: null
}

export default connect(mapStateToProps, mapDispatchToProps)(Packages);
