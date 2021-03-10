import React, { Component } from "react";
import Topbar from "../components/Topbar";
import ProjectsList from "../components/List";
import ListItem from "../components/ListItem";
import ListItemActions from "../components/ListItemActions";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import { Col, } from "antd";
import { isoDateToHumanReadableDate } from "../../Util";
// import { rolesOperation, rolesSelectors } from '../../redux/modules/roles';
// import * as rolesActions from '../../redux/modules/roles/actions';
import { connect } from 'react-redux';
// import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

/* constants */
const roleNameSpan = { xxl: 4, xl: 6, lg: 6, md: 8, sm: 10, xs: 11 };
const roleDescriptionSpan = { xxl: 5, xl: 4, lg: 4, md: 4, sm: 4, xs: 5 };


const headerLayout = [
  // { ...userIdSpan, header: "user ID" },
  { ...roleNameSpan, header: "Name" },
  { ...roleDescriptionSpan, header: "Description" },
  
];

class Roles extends Component {

  // componentDidMount() {
  //   const { fetchRoles } = this.props;
  //   fetchRoles();
  // }

  render() {
    const {
      roles,
      loading,
    } = this.props;
    return (
      <div>
        {/* Topbar */}
        <Topbar
          search={{
            size: "large",
            placeholder: "Search for roles here ...",
            // onChange: this.searchInitiative,
            // value: searchQuery,
          }}
          actions={[
            {
              label: "New personnel",
              icon: <PlusOutlined />,
              size: "large",
              title: "Add New user",
              // onClick: this.openProjectForm,
            },
          ]}
        />
        {/* end Topbar */}
        {/* list starts */}
        <ProjectsList
          itemName="Roles"
          items={roles}
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
                pathname: `/app/roles/${item.id}`,
              }}
              className="Roles"
            >
              <ListItem
                key={item.id} // eslint-disable-line
                name={item.first_name}
                item={item}
                isSelected={isSelected}
                onSelectItem={onSelectItem}
                onDeselectItem={onDeselectItem}
                renderActions={() => (
                  <ListItemActions
                    edit={{
                      name: "Edit user",
                      title: "Update user details",
                      onClick: () => this.handleEdit(item),
                    }}
                    archive={{
                      name: "Archive user",
                      title:
                        "Remove user from list of active Roles",
                      onClick: () => this.showArchiveConfirm(item),
                    }}
                  />
                )}
              >
                {/* eslint-disable react/jsx-props-no-spreading */}
                {/* <Col {...userIdSpan} className="contentEllipse">
                  {item.first_name}
                  {item.middle_name}
                  {item.last_name}
                </Col> */}
                <Col
                  {...roleNameSpan}
                  className="contentEllipse"
                  title={item.description}
                >
                  {item.first_name}{" "}
                  {item.middle_name}{" "}
                  {item.last_name}
                </Col>
                <Col {...roleDescriptionSpan}>{item.details ? item.details.borrower.name : 'N/A'}</Col>
                
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

// Roles.propTypes = {
//   loading: PropTypes.bool.isRequired,
//   roles: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string }))
//     .isRequired,
//   page: PropTypes.number.isRequired,
//   searchQuery: PropTypes.string,
//   total: PropTypes.number.isRequired,
// };

// Roles.defaultProps = {
//   roles: null,
//   searchQuery: undefined,
//   loading: null,
// };

const mapStateToProps = (state) => {
  return {
    // roles: rolesSelectors.getRolesSelector(state),
    // loading: rolesSelectors.getRolesLoadingSelector(state),
  }
}

const mapDispatchToProps = (dispatch) => ({
  // fetchRoles: bindActionCreators(rolesActions.getRolesStart, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Roles);