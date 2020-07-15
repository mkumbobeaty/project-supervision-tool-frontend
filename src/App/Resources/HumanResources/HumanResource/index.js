import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { resourceOperations } from "../../duck";
import Toolbar from "../../../components/Toolbar";
import { Row, Col } from "antd";

import "./styles.css";

/* constants */
const rowOneSpan = { xxl: 10, xl: 12, lg: 12, md: 24, sm: 24, xs: 24 };
const rowTwoSpan = { xxl: 5, xl: 6, lg: 6, md: 24, sm: 24, xs: 24 };
const rowThreeSpan = { xxl: 6, xl: 6, lg: 6, md: 24, sm: 24, xs: 24 };

class HumanResource extends Component {
  state = {
    showFilters: false,
  };

  componentDidMount() {
    const { getHumanResource } = this.props;
    getHumanResource();
  }

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
    const { page, loading, total } = this.props;

    return (
      <div className="HumanResource">
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
        <div className="HumanResourceDetail">
          <h2 className="humanResourceTitle">Doctors</h2>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col {...rowOneSpan}>
              <div className="Detail">
                <h4>Description</h4>
                <span>
                  ist ein einfacher Demo-Text für die Print- und
                  Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der
                  Standard Demo-Text seit 1500, als ein unbekannter
                  Schriftsteller eine Hand voll Wörter nahm und diese
                  durcheinander warf um ein Musterbuch zu erstellen. E
                </span>
              </div>
              <div className="Detail">
                <h4>Initiative currently being supported</h4>
                <span>
                  ist ein einfacher Demo-Text für die Print- und
                  Schriftindustrie. Lorem Ipsum ist in der Industrie bereits
                </span>
              </div>
            </Col>
            <Col {...rowTwoSpan} offset={2}>
              <div className="Detail">
                <h4>Start Date</h4>
                <span>ist ein einfacher</span>
              </div>
              <div className="Detail">
                <h4>Implementing Actor</h4>
                <span>ist ein einfacher Demo</span>
              </div>
              <div className="Detail">
                <h4>Implementing Actor Type</h4>
                <span>ist ein einfacher</span>
              </div>
            </Col>
            <Col {...rowThreeSpan}>
              <div className="Detail">
                <h4>End Date</h4>
                <span>ist ein einfacher</span>
              </div>
              <div className="Detail">
                <h4>Aggregate level</h4>
                <span>ist ein einfacher Demo</span>
              </div>
              <div className="Detail">
                <h4>Location</h4>
                <span>ist ein einfacher</span>
              </div>
            </Col>
          </Row>
        </div>
        <div className="HumanResourceProgress">
          <h2 className="humanResourceTitle">Progress</h2>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col {...rowThreeSpan}>
              <div className="progress">
                <h2>67</h2>
                <h4>Doctors</h4>
                <span>Deployed to the site</span>
              </div>{" "}
            </Col>
            <Col {...rowThreeSpan}>
              <div className="progress">
                <h2>67</h2>
                <h4>Doctors</h4>
                <span>Deployed to the site</span>
              </div>
            </Col>
            <Col {...rowThreeSpan}>
              <div className="progress">
                <h2>67</h2>
                <h4>Doctors</h4>
                <span>Deployed to the site</span>
              </div>{" "}
            </Col>
            <Col {...rowThreeSpan}>
              <div className="progress">
                <h2>67</h2>
                <h4>Doctors</h4>
                <span>Deployed to the site</span>
              </div>{" "}
            </Col>
          </Row>
        </div>
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

const mapDispatchToProps = (dispatch) => ({
  getHumanResource: bindActionCreators(
    resourceOperations.getHumanResource,
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(HumanResource);
