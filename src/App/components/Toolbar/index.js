import { Button, Col, Pagination, Row } from "antd";
import { pluralize, singularize } from "inflection";
import startCase from "lodash/startCase";
import PropTypes from "prop-types";
import React from "react";
import "./styles.css";

/**
 * @function
 * @name Toolbar
 * @description Render action bar for actions which are applicable to list
 * content
 *
 * @param {object} props props object
 * @param {string} props.itemName names for items/ modules used by toolbar
 * @param {number} props.page current page
 * @param {number} props.total total number of results from the API
 * @param {number} props.selectedItemsCount total Number of selected items
 * @param {string} props.exportUrl export url
 * @param {Function} props.onPaginate on paginate action callback
 * @param {Function} props.onRefresh on refresh action callback
 *
 * @returns {object} React component
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const Toolbar = ({
  itemName,
  page,
  total,
  selectedItemsCount,
  exportUrl,
  onPaginate,
  onRefresh,
  onMapView,
}) => (
  <div className="Toolbar">
    <Row>
      {/* action bar */}
      <Col xxl={12} xl={12} lg={12} md={10} sm={14} xs={12}>
        <div className="Toolbar-col">
          {/* refresh  action */}
          {onRefresh && (
            <div className="Toolbar-row">
              <Button
                title="Refresh "
                className="actionButton"
                size="large"
                onClick={onRefresh}
                data-cy="reflesh"
              >
                <span className="ToolbarIcon" />
                Refresh
              </Button>
            </div>
          )}
          {/* end refresh  action */}

          {/* refresh  action */}
          {onMapView && (
            <div className="Toolbar-row">
              <Button
                title="View on Map"
                className="actionButton"
                size="large"
                onClick={onMapView}
              >
                <span className="ToolbarIcon" />
                View on Map
              </Button>
            </div>
          )}
          {/* end refresh  action */}

          {/* export action */}
          {exportUrl && (
            <div className="Toolbar-row">
              <a href={exportUrl} download>
                <Button
                  title="Export Data"
                  className="actionButton"
                  size="large"
                >
                  <span className="ToolbarIcon" />
                  Export
                </Button>
              </a>
            </div>
          )}
          {/* end export action */}
        </div>
      </Col>
      {/* end action bar */}

      <Col xxl={12} xl={12} lg={12} md={14} sm={10} xs={12}>
        <Row type="flex" justify="end">
          {/* selected and  number summary */}
          <Col xxl={10} xl={12} lg={13} md={12} sm={0} xs={0}>
            {selectedItemsCount > 0 && (
              <span
                style={{ color: "#959595" }}
              >{`selected ${selectedItemsCount} out of `}</span>
            )}
            <span
              style={{ color: "#959595", fontSize: 15, fontWeight: 600 }}
            >{`${total} ${
              total > 1
                ? startCase(pluralize(itemName))
                : startCase(singularize(itemName))
            }`}</span>
          </Col>
          {/* end selected and  number summary */}

          {/* pagination */}
          {onPaginate && total > 0 && (
            <Col xxl={6} xl={7} lg={9} md={9} sm={24} xs={24}>
              <Pagination
                simple
                current={page}
                defaultCurrent={page}
                total={total}
                defaultPageSize={10}
                className="pagination"
                onChange={onPaginate}
              />
            </Col>
          )}
          {/* end pagination */}
        </Row>
      </Col>
    </Row>
  </div>
);

/* props validation */
Toolbar.propTypes = {
  itemName: PropTypes.string.isRequired,
  page: PropTypes.number,
  total: PropTypes.number,
  exportUrl: PropTypes.string,
  selectedItemsCount: PropTypes.number.isRequired,
  onPaginate: PropTypes.func.isRequired,
  onRefresh: PropTypes.func.isRequired,
};

Toolbar.defaultProps = {
  exportUrl: undefined,
};

export default Toolbar;
