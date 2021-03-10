// 
import React, { Component } from "react";
import { Col, List } from "antd";
import ListHeaderData from '../../ListHeader';
import "./styles.css";

/* constants */
const positionSpan = { xxl: 16, xl: 16, lg: 16, md: 16, sm: 16, xs: 16 };
const quantitySpan = { xxl: 8, xl: 8, lg: 8, md: 8, sm: 8, xs: 8 }



const headerLayout = [
    { ...positionSpan, header: "Position", title: 'position' },
    { ...quantitySpan, header: "Quantity", title: 'Number of Human resources' },

];

/**
 * @class
 * @name Sub  Projects equipments
 * @description Render actions list which have search box, actions and Sub Projects list
 *
 * @version 0.1.0
 * @since 0.1.0
 */

class SubProjectHumanResource extends Component {
    render() {
        const { sub_project } = this.props;
        return (
            <div className="sub_project_human_resource">
                {/* list starts */}
                {/* <h4 className='headerTitle'>Human Resource</h4> */}
                <ListHeaderData headerLayout={headerLayout} />
                <List
                    itemName="Sub_project_human_resource"
                    dataSource={sub_project?.human_resources}
                    renderItem={item => (
                        <List.Item
                            key={item.id} // eslint-disable-line
                            item={item}
                            renderActions={() => null}
                            className="itemList"

                        >
                            {/* eslint-disable react/jsx-props-no-spreading */}
                            <Col
                                {...positionSpan}
                                className="contentEllipse"
                                title={item.position.description}
                            >
                                {item ? item?.position.name : "N/A"}
                            </Col>
                            <Col {...quantitySpan}>{item ? item?.quantity : "N/A"}</Col>
                            {/* eslint-enable react/jsx-props-no-spreading */}
                        </List.Item>
                    )}
                />
                {/* end list */}
            </div>
        );
    }
}


export default SubProjectHumanResource;




