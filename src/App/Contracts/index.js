import React, { Component } from "react";
import Topbar from "../components/Topbar";
import ProjectsList from "../components/List";
import ListItem from "../components/ListItem";
import ListItemActions from "../components/ListItemActions";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import { Col, } from "antd";
// import { contractsOperation, contractsSelectors } from '../../redux/modules/contracts';
// import * as contractsActions from '../../redux/modules/contracts/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
// import PropTypes from "prop-types";

/* constants */
const itemIdSpan = { xxl: 3, xl: 4, lg: 5, md: 6, sm: 8, xs: 5 };
const itemNameSpan = { xxl: 6, xl: 4, lg: 8, md: 8, sm: 10, xs: 11 };
const itemDescriptionSpan = { xxl: 8, xl: 10, lg: 10, md: 4, sm: 4, xs: 5 };
const itemCapacitySpan = { xxl: 3, xl: 2, lg: 0, md: 0, sm: 0, xs: 0 };


const headerLayout = [
  { ...itemIdSpan, header: "Item ID" },
  { ...itemNameSpan, header: "Item Name" },
  { ...itemDescriptionSpan, header: "Description" },
  { ...itemCapacitySpan, header: "Capacity" },
]

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
              label: "New Item",
              icon: <PlusOutlined />,
              size: "large",
              title: "Add New item",
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
                      name: "Edit item",
                      title: "Update item details",
                      onClick: () => this.handleEdit(item),
                    }}
                    archive={{
                      name: "Archive item",
                      title:
                        "Remove item from list of Contracts",
                      onClick: () => this.showArchiveConfirm(item),
                    }}
                  />
                )}
              >
                {/* eslint-disable react/jsx-props-no-spreading */}
                <Col {...itemIdSpan} className="contentEllipse">
                  {item.unit_id}
                </Col>
                <Col
                  {...itemNameSpan}
                  className="contentEllipse"
                  title={item.description}
                >
                  {item.name}
                </Col>
                <Col {...itemDescriptionSpan}>{item? item.description : 'N/A'}</Col>
                <Col {...itemCapacitySpan}>{item? item.capacity : 'N/A'}</Col>
                
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

// Contracts.propTypes = {
//   loading: PropTypes.bool.isRequired,
//   contracts: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string }))
//     .isRequired,
//   page: PropTypes.number.isRequired,
//   searchQuery: PropTypes.string,
//   total: PropTypes.number.isRequired,
// };

// Contracts.defaultProps = {
//   contracts: null,
//   searchQuery: undefined,
//   loading: null,
// };

const mapStateToProps = (state) => {
  return {
    // contracts: contractsSelectors.getContractsSelector(state),
    // loading: contractsSelectors.getContractsLoadingSelector(state),
  }
}

const mapDispatchToProps = (dispatch) => ({
  // fetchContracts: bindActionCreators(contractsActions.getContractsStart, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contracts);