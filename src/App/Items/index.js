import React, { Component } from "react";
import Topbar from "../components/Topbar";
import ProjectsList from "../components/List";
import ListItem from "../components/ListItem";
import ListItemActions from "../components/ListItemActions";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import { Col, } from "antd";
import { itemsOperation, itemsSelectors } from '../../redux/modules/items';
import * as itemsActions from '../../redux/modules/items/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
// import PropTypes from "prop-types";

/* constants */
const contractIdSpan = { xxl: 3, xl: 4, lg: 5, md: 6, sm: 8, xs: 5 };
const contractNameSpan = { xxl: 8, xl: 10, lg: 10, md: 4, sm: 4, xs: 5 };
const contractDurationSpan = { xxl: 6, xl: 4, lg: 8, md: 8, sm: 10, xs: 11 };
const contractCostSpan = { xxl: 3, xl: 2, lg: 0, md: 0, sm: 0, xs: 0 };

const headerLayout = [
  { ...contractIdSpan, header: "Contract ID" },
  { ...contractNameSpan, header: "Contract Name" },
  { ...contractDurationSpan, header: "Contract Duration" },
  { ...contractCostSpan, header: "Contract Cost" },
]

class Items extends Component {

  componentDidMount() {
    const { fetchItems } = this.props;
    fetchItems();
  }

  render() {
    const {
      items,
      loading,
    } = this.props;
    return (
      <div>
        {/* Topbar */}
        <Topbar
          search={{
            size: "large",
            placeholder: "Search for items here ...",
            // onChange: this.searchInitiative,
            // value: searchQuery,
          }}
          actions={[
            {
              label: "New Contract",
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
          itemName="Items"
          items={items}
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
                pathname: `/app/items/${item.id}`,
              }}
              className="Items"
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
                        "Remove item from list of Items",
                      onClick: () => this.showArchiveConfirm(item),
                    }}
                  />
                )}
              >
                {/* eslint-disable react/jsx-props-no-spreading */}
                <Col {...contractIdSpan} className="contentEllipse">
                  {item.unit_id}
                </Col>
                <Col
                  {...contractNameSpan}
                  className="contentEllipse"
                  title={item.description}
                >
                  {item.name}
                </Col>
                <Col {...contractDurationSpan}>{item? item.description : 'N/A'}</Col>
                <Col {...contractCostSpan}>{item? item.capacity : 'N/A'}</Col>
                
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

// Items.propTypes = {
//   loading: PropTypes.bool.isRequired,
//   items: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string }))
//     .isRequired,
//   page: PropTypes.number.isRequired,
//   searchQuery: PropTypes.string,
//   total: PropTypes.number.isRequired,
// };

// Items.defaultProps = {
//   items: null,
//   searchQuery: undefined,
//   loading: null,
// };

const mapStateToProps = (state) => {
  return {
    items: itemsSelectors.getItemsSelector(state),
    loading: itemsSelectors.getItemsLoadingSelector(state),
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchItems: bindActionCreators(itemsActions.getItemsStart, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);