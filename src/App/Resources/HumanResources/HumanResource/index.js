import React, { Component } from "react";
import { connect } from "react-redux";
import Toolbar from "../../../components/Toolbar";
import "./styles.css";

class HumanResource extends Component {
  state = {
    showFilters: false,
  };
  /**
   * @function
   * @name openFiltersModal
   * @description open filters modal by setting it's visible property
   * to false via state
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  openFiltersModal = () => {
    this.setState({ showFilters: true });
  };

  /**
   * @function
   * @name handleRefreshHumanResources
   * @description Handle list refresh action
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleRefreshHumanResources = () => {
    window.location.reload();
  };

  /**
   * @function
   * @name paginateHumanResources
   * @description Handle list refresh action
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  paginateHumanResources = (page) => {};

  render() {
    const {
      page,
      loading,
      total,
    } = this.props;
    return (
      <div className="HumanResourceDetail">
        <Toolbar
          itemName="Human resource"
          page={page}
          total={total}
          loading={loading}
          onFilter={this.openFiltersModal}
          onRefresh={this.handleRefreshHumanResources}
          onPaginate={(nextPage) => {
            this.paginateHumanResources(nextPage);
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    HumanResources: state.resources.humanResource.data
      ? state.resources.humanResource.data
      : [],
    total: state.resources.humanResource.total,
    page: state.resources.humanResource.page,
    loading: state.resources.humanResource.loading,
  };
};
export default connect(mapStateToProps)(HumanResource);
