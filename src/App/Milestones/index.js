import React, { Component } from "react";
import Topbar from "../components/Topbar";
import ProjectsList from "../components/List";
import ListItem from "../components/ListItem";
import ListItemActions from "../components/ListItemActions";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import { Col, } from "antd";
// import { milestonesOperation, milestonesSelectors } from '../../redux/modules/milestones';
// import * as milestonesActions from '../../redux/modules/milestones/actions';
import { connect } from 'react-redux';
// import { bindActionCreators } from "redux";
// import PropTypes from "prop-types";
import { isoDateToHumanReadableDate } from "../../Util";

/* constants */
const nameSpan = { xxl: 6, xl: 6, lg: 6, md:6, sm: 6, xs: 6 };
const taskSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 4, xs: 6 };
const completionDateSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 6, xs: 6 };

const headerLayout = [
  { ...nameSpan, header: "Name" },
  { ...taskSpan, header: "Tasks", },
  { ...completionDateSpan, header: "Completion Date" },
];

class Milestones extends Component {

  // componentDidMount() {
  //   const { fetchMilestones } = this.props;
  //   fetchMilestones();
  // }

  render() {
    const {
      milestones,
      loading,
    } = this.props;
    return (
      <div>
        {/* Topbar */}
        <Topbar
          search={{
            size: "large",
            placeholder: "Search for milestones here ...",
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
          itemName="Milestones"
          items={milestones}
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
                pathname: `/app/milestones/${item.id}`,
              }}
              className="Milestones"
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
                        "Remove item from list of Milestones",
                      onClick: () => this.showArchiveConfirm(item),
                    }}
                  />
                )}
              >
                {/* eslint-disable react/jsx-props-no-spreading */}
                <Col
                  {...nameSpan}
                  className="contentEllipse"
                  title={item?.description}
                >
                  {item ? item?.name : "N/A"}
                </Col>
                <Col {...taskSpan}>{item ? item?.tasks : "N/A"}</Col>
                <Col {...completionDateSpan}>{isoDateToHumanReadableDate(item ? item?.created_ad : "N/A")}</Col>

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

// Milestones.propTypes = {
//   loading: PropTypes.bool.isRequired,
//   milestones: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string }))
//     .isRequired,
//   page: PropTypes.number.isRequired,
//   searchQuery: PropTypes.string,
//   total: PropTypes.number.isRequired,
// };

// Milestones.defaultProps = {
//   milestones: null,
//   searchQuery: undefined,
//   loading: null,
// };

const mapStateToProps = (state) => {
  // return {
  //   milestones: milestonesSelectors.getMilestonesSelector(state),
  //   loading: milestonesSelectors.getMilestonesLoadingSelector(state),
  // }
}

const mapDispatchToProps = (dispatch) => ({
  // fetchMilestones: bindActionCreators(milestonesActions.getMilestonesStart, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Milestones);