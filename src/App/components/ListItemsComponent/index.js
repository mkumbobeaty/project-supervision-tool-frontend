import React from 'react';
import PropTypes from 'prop-types';
import { List, Row, Col } from 'antd';
import './styles.css';

/**
 * @function
 * @name CustomList
 * @description List UI with tool bar , list header and list items
 * @param {object} props CustomList props
 * @param {object[]} props.items list of items
 * @param {boolean} props.loading list loading flag
 * @param {object} props.headerLayout list header layout
 * @returns {object} CustomListItem component
 * @version 0.1.0
 * @since 0.1.0
 */
const CustomListItem = ({
  items,
  loading,
  headerLayout,
  renderListItem
}) => {
 
  return (
    <div className="CustomListItem">
    <Row className="ListHeader">
    {headerLayout.map((item) => (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Col key={item.header} {...item}>
        <h4 className="title">{item.header}</h4>
      </Col>
    ))}
  </Row>
      <List
        loading={loading}
        dataSource={items}
        renderItem={(item) =>
            renderListItem({
              item
            })
          }
      ></List>
    </div>
  );
};

CustomListItem.propTypes = {
  loading: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape({ _id: PropTypes.string }))
    .isRequired,
  headerLayout: PropTypes.arrayOf(PropTypes.shape({ header: PropTypes.string }))
    .isRequired,
    renderListItem: PropTypes.func.isRequired,
 
};

export default CustomListItem;
