// 
import React, { Component } from "react";
import { Col, List } from "antd";
import ListHeaderData from '../../ListHeader';
import "./styles.css";

/* constants */
const nameSpan = { xxl: 5, xl: 4, lg: 4, md: 4, sm: 4, xs: 0 };
const capacitySpan = { xxl: 5, xl: 4, lg: 4, md: 4, sm: 4, xs: 0 };
const contractAmountSpan = { xxl: 3, xl: 3, lg: 3, md: 3, sm: 3, xs: 10 };
const mobilizedAmountSpan = { xxl: 3, xl: 3, lg: 3, md: 3, sm: 3, xs: 10 };
const mobilizedDateSpan = { xxl: 3, xl: 3, lg: 4, md: 0, sm: 0, xs: 0 };
const remarksSPan = { xxl: 4, xl: 4, lg: 4, md: 4, sm: 10, xs: 11 };

const headerLayout = [
    { ...nameSpan, header: "Name" },
    { ...capacitySpan, header: "Capacity" },
    { ...contractAmountSpan, header: "Contract Amount" },
    { ...mobilizedAmountSpan, header: "Mobilized Amount" },
    { ...mobilizedDateSpan, header: "Mobilization Date" },
    { ...remarksSPan, header: "Remarks" },

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

                            <Col {...nameSpan}>{item.item ? item.id : "N/A"}</Col>
                            <Col {...capacitySpan}>{item.item ? item.capacity : "N/A"}</Col>
                            <Col {...contractAmountSpan}>{item ? item.quantity_per_contract : "N/A"}</Col>
                            <Col {...mobilizedAmountSpan}>{item ? item.quantity_mobilized : "N/A"}</Col>
                            <Col {...mobilizedDateSpan}>{item ? item.mobilization_date : "N/A"}</Col>
                            <Col {...remarksSPan} >{item ? item.remarks : "N/A"}</Col>

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




