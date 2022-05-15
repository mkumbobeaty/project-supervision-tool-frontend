import React, { Component } from "react";
import Topbar from "../components/Topbar";
import ContractsList from "../components/List";
import ListItem from "../components/ListItem";
import ListItemActions from "../components/ListItemActions";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import { Col, Drawer} from "antd";
import { contractsSelectors } from '../../redux/modules/contracts';
import * as contractsActions from '../../redux/modules/contracts/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

/* constants */
const contractorSpan = { xxl: 10, xl: 6, lg: 6, md: 5, sm: 5, xs: 4 };
const contratValuerSpan = { xxl: 4, xl: 4, lg: 4, md: 4, sm: 4, xs: 3 };
const contractPeriodSpan = { xxl: 4, xl: 4, lg: 4, md: 4, sm: 4, xs: 3 };



const headerLayout = [
  { ...contractorSpan, header: "Contractor" },
  { ...contratValuerSpan, header: "Contract Value" },
  { ...contractPeriodSpan, header: "Contract Period" },
];

class Contracts extends Component {

  state = {
    isEditForm: false,
    // visible: false,
  };

  componentDidMount() {
    const { fetchContracts } = this.props;
    fetchContracts();
  }

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
    this.props.searchContract({ searchQuery: searchData })
  };

  /**
 * @function
 * @name openContractForm
 * @description Open Human Resources form
 *
 * @version 0.1.0
 * @since 0.1.0
 */
  openContractForm = () => {
    const { openContractForm } = this.props;
    openContractForm();
  };

  /**
 * @function
 * @name closeContractForm
 * @description Open Human Resources form
 *
 * @version 0.1.0
 * @since 0.1.0
 */
   closeContractForm = () => {
    const { closeContractForm } = this.props;
    closeContractForm();
  };

  render() {
    const {
      contracts,
      loading,
      page,
      total,
      paginateContract,
      searchQuery,
      showForm,
    } = this.props;
    const { isEditForm } = this.state;
    return (
      <div>

        {/* list starts */}
        <ContractsList
          itemName="Contracts"
          items={contracts}
          page={page}
          loading={loading}
          itemCount={total}
          // onFilter={this.openFiltersModal}
          // onRefresh={this.handleRefreshInitiative}
          onPaginate={(nextPage) => {
            paginateContract({ page: nextPage });
          }}
          headerLayout={headerLayout}
          renderListItem={({
            item,
            isSelected,
            onSelectItem,
            onDeselectItem,
          }) => (
            <Link
              to={{
                pathname: `/app/contracts/${item.id}`,
              }}
              className="Contracts"
            >
              <ListItem
                key={item.id} // eslint-disable-line
                name={item.contractor.name}
                item={item}
                isSelected={isSelected}
                onSelectItem={onSelectItem}
                onDeselectItem={onDeselectItem}
                renderActions={() => (
                  <ListItemActions
                    edit={{
                      name: "Edit contract",
                      title: "Update contract details",
                      onClick: () => this.handleEdit(item),
                    }}
                    archive={{
                      name: "Archive contract",
                      title:
                        "Remove contract from list of Contracts",
                      onClick: () => this.showArchiveConfirm(item),
                    }}
                  />
                )}
              >
                {/* eslint-disable react/jsx-props-no-spreading */}
                <Col {...contractorSpan}>{item ? item.contractor?.name : "N/A"}                </Col>
                <Col {...contratValuerSpan}>{item ? item.contract_cost?.contract_award_value?.amount : "N/A"}</Col>
                <Col {...contractPeriodSpan}>{item ? item.contract_time?.original_contract_period : "N/A"}</Col>
                {/* eslint-enable react/jsx-props-no-spreading */}
              </ListItem>
            </Link>
          )
          }
        />
        {/* end list */}
        <Drawer
          title={
            isEditForm ? "Edit Contracts" : "Add New Contracts"
          } width={550}
          onClose={this.closeContractForm}
          footer={null}
          visible={showForm}
          // bodyStyle={{ paddingBottom: 80 }}
          destroyOnClose
          maskClosable={false}
          // afterClose={this.handleAfterCloseForm}
        >
          {/* <CommonProjectForm
            selected={selected}
            isEditForm={isEditForm}
            createProject={createProject}
            focalPeoples={focalPeoples}
            Projects={projects}
            getProjects={fetchProjects}
            handleAfterCloseForm={this.handleAfterCloseForm}
            handleAfterSubmit={this.closeProjectForm} /> */}
        </Drawer>
      </div>
    )

  }
}

Contracts.propTypes = {
  loading: PropTypes.bool.isRequired,
  contracts: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string }))
    .isRequired,
  page: PropTypes.number.isRequired,
  searchQuery: PropTypes.string,
  total: PropTypes.number.isRequired,
};

Contracts.defaultProps = {
  contracts: null,
  searchQuery: undefined,
  loading: null,
};

const mapStateToProps = (state) => {
  return {
    contracts: contractsSelectors.getContractsSelector(state),
    loading: contractsSelectors.getContractsLoadingSelector(state),
    page: contractsSelectors.getContractsPageSelector(state),
    total: contractsSelectors.getContractsTotalSelector(state),
    showForm: contractsSelectors.getContractsShowFormSelector(state),
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchContracts: bindActionCreators(contractsActions.getContractsStart, dispatch),
  paginateContract: bindActionCreators(contractsActions.getContractsStart, dispatch),
  searchContract: bindActionCreators(contractsActions.getContractsStart, dispatch),
  openContractForm: bindActionCreators(contractsActions.openForm, dispatch),
  closeContractForm: bindActionCreators(contractsActions.closeForm, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contracts);