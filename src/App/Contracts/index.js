import React, { Component } from "react";
import Topbar from "../components/Topbar";
import ProjectsList from "../components/List";
import ListItem from "../components/ListItem";
import ListItemActions from "../components/ListItemActions";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import { Col, } from "antd";
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

  componentDidMount() {
    const { fetchContracts } = this.props;
    fetchContracts();
  }

  render() {
    const {
      contracts,
      loading,
    } = this.props;
    console.log(contracts)
    return (
      <div>
        {/* Topbar */}
        <Topbar
          search={{
            size: "large",
            placeholder: "Search for contracts here ...",
            // onChange: this.searchInitiative,
            // value: searchQuery,
          }}
          actions={[
            {
              label: "New Contract",
              icon: <PlusOutlined />,
              size: "large",
              title: "Add New Contract",
              // onClick: this.openProjectForm,
            },
          ]}
        />
        {/* end Topbar */}
        {/* list starts */}
        <ProjectsList
          itemName="Contracts"
          contracts={contracts}
          // page={page}
          loading={loading}
          // itemCount={total}
          // onFilter={this.openFiltersModal}
          // onRefresh={this.handleRefreshInitiative}
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
            <Link
              to={{
                pathname: `/app/contracts/${item.id}`,
              }}
              className="Contracts"
            >
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
                <Col
                  {...contractorSpan}
                  className="contentEllipse"
                  title={contracts.contractor}
                >
                  {contracts ? contracts?.contractor?.name : "N/A"}
                </Col>
                <Col {...contratValuerSpan}>{contracts ? contracts?.contract_time?.original_contract_period : "N/A"}</Col>
                <Col {...contractPeriodSpan}>{contracts ? contracts?.contract_cost?.contract_award_value?.amount : "N/A"}</Col>

                {/* eslint-enable react/jsx-props-no-spreading */}
              </ListItem>
            </Link>
          )
          }
        />
        {/* end list */}
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchContracts: bindActionCreators(contractsActions.getContractsStart, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contracts);