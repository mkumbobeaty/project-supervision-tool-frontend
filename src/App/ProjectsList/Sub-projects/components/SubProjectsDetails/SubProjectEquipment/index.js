// 
import React, { Component } from "react";
import { Col, List } from "antd";
import ListHeaderData from '../../ListHeader';
import "./styles.css";

/* constants */
const subProjectQuantitySpan = { xxl: 4, xl: 4, lg: 4, md: 4, sm: 6, xs: 6 };
const quantityMobilizedSpan = { xxl: 4, xl: 4, lg: 4, md: 4, sm: 4, xs: 5 };
const capacitySpan = { xxl: 4, xl: 4, lg: 4, md: 4, sm: 4, xs: 5 };
const mobilizationSpan = { xxl: 6, xl: 6, lg: 6, md: 5, sm: 4, xs: 3 };
const remarksSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 5, xs: 5 };



const headerLayout = [
    { ...mobilizationSpan, header: "Name", title: 'Equipment name' },
    { ...subProjectQuantitySpan, header: "Q/Contract", title: 'Quantity contract' },
    { ...quantityMobilizedSpan, header: "Q/Mobilized", title: 'Quantity mobilized' },
    { ...capacitySpan, header: "Capacity", title: 'capacity' },
    { ...remarksSpan, header: "Remarks", title: 'Remarks' },
];

/**
 * @class
 * @name Sub  Projects equipments
 * @description Render actions list which have search box, actions and Sub Projects list
 *
 * @version 0.1.0
 * @since 0.1.0
 */

class SubProjectEquipment extends Component {
    render() {
        const { sub_project } = this.props;
        return (
            <div className="sub-project-equipment">
                {/* list starts */}
                {/* <h4 className='headerTitle'>Sub Project Equipment</h4> */}
                <ListHeaderData headerLayout={headerLayout} />
                <List
                    itemName="Sub_project_equipment"
                    dataSource={sub_project?.sub_project_equipments}
                    renderItem={item => (
                        <List.Item
                            key={item.id} // eslint-disable-line
                            item={item}
                            renderActions={() => null}
                            className="itemList"

                        >
                            {/* eslint-disable react/jsx-props-no-spreading */}

                            <Col {...mobilizationSpan}>{item ? item?.item?.name : "N/A"}</Col>
                            <Col
                                {...subProjectQuantitySpan}
                                className="contentEllipse"
                            >
                                {item ? item?.quantity_per_contract : "N/A"}
                            </Col>
                            <Col {...quantityMobilizedSpan}>{item ? item?.quantity_mobilized : "N/A"}</Col>
                            <Col {...capacitySpan}>{item ? item?.item?.capacity : "N/A"}</Col>
                            <Col {...remarksSpan}>{item ? item.remarks : "N/A"}</Col>


                            {/* eslint-enable react/jsx-props-no-spreading */}
                        </List.Item>
                    )}
                />
                {/* end list */}
            </div>
        );
    }
}


export default SubProjectEquipment;




