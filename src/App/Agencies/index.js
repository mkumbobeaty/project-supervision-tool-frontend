import React, { Component } from "react";
import Topbar from "../components/Topbar";
import ProjectsList from "../components/List";
import ListItem from "../components/ListItem";
import ListItemActions from "../components/ListItemActions";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import { Col, } from "antd";
// import { agenciesOperation, agenciesSelectors } from '../../redux/modules/agencies';
// import * as agenciesActions from '../../redux/modules/agencies/actions';
import { connect } from 'react-redux';
// import { bindActionCreators } from "redux";
// import PropTypes from "prop-types";

/* constants */
const nameSpan = { xxl: 6, xl: 4, lg: 8, md: 8, sm: 10, xs: 11 };
const phoneNumberSpan = { xxl: 3, xl: 4, lg: 5, md: 6, sm: 8, xs: 5 };
const emailSpan = { xxl: 6, xl: 4, lg: 8, md: 8, sm: 10, xs: 11 };
const addressSpan = { xxl: 3, xl: 2, lg: 0, md: 0, sm: 0, xs: 0 };

const headerLayout = [
  { ...nameSpan, header: "Name" },
  { ...phoneNumberSpan, header: "Phone Number" },
  { ...emailSpan, header: "Email" },
  { ...addressSpan, header: "Address" },
]

class Agencies extends Component {

//   componentDidMount() {
//     const { fetchAgencies } = this.props;
//     fetchAgencies();
//   }

  render() {
    const {
      agencies,
      loading,
    } = this.props;
    return (
      <div>
        {/* Topbar */}
        <Topbar
          search={{
            size: "large",
            placeholder: "Search for agencies here ...",
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
          itemName="Agencies"
          item={agencies}
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
                pathname: `/app/agencies/${item.id}`,
              }}
              className="Agencies"
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
                        "Remove item from list of Agencies",
                      onClick: () => this.showArchiveConfirm(item),
                    }}
                  />
                )}
              >
                {/* eslint-disable react/jsx-props-no-spreading */}
                <Col {...nameSpan} className="contentEllipse">
                  {item.unit_id}
                </Col>
                <Col
                  {...phoneNumberSpan}
                  className="contentEllipse"
                  title={item.description}
                >
                  {item.name}
                </Col>
                <Col {...emailSpan}>{item? item.description : 'N/A'}</Col>
                <Col {...addressSpan}>{item? item.capacity : 'N/A'}</Col>
                
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

// Agencies.propTypes = {
//   loading: PropTypes.bool.isRequired,
//   agencies: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string }))
//     .isRequired,
//   page: PropTypes.number.isRequired,
//   searchQuery: PropTypes.string,
//   total: PropTypes.number.isRequired,
// };

// Agencies.defaultProps = {
//   agencies: null,
//   searchQuery: undefined,
//   loading: null,
// };

const mapStateToProps = (state) => {
  return {
    // agencies: agenciesSelectors.getAgenciesSelector(state),
    // loading: agenciesSelectors.getAgenciesLoadingSelector(state),
  }
}

const mapDispatchToProps = (dispatch) => ({
//   fetchAgencies: bindActionCreators(agenciesActions.getAgenciesStart, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Agencies);