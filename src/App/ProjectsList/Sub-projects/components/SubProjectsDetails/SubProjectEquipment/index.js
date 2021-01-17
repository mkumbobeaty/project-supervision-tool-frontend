// 
import React, { Component } from "react";
import { Col,List } from "antd";
import ListHeaderData from '../../ListHeader';

/* constants */
const subProjectQuantitySpan = { xxl: 6, xl: 6, lg: 6, md: 8, sm: 10, xs: 11 };
const quantityMobilizedSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 6, xs: 5 };
const mobilizationSpan = { xxl: 6, xl: 6, lg: 6, md: 5, sm: 4, xs: 3 };
const remarksSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 5, xs: 5 };



const headerLayout = [
    { ...subProjectQuantitySpan, header: "Quantity per contract" },
    { ...quantityMobilizedSpan, header: "Quantity mobilized" },
    { ...remarksSpan, header: "Remarks" },
    { ...mobilizationSpan, header: "Mobilization date" },
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
                <ListHeaderData headerLayout={headerLayout}/>
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
    
                                <Col
                                    {...subProjectQuantitySpan}
                                    className="humanResourceEllipse"
                                >
                                    {item? item?.quantity_per_contract :"N/A"}
                                </Col>
                                <Col {...quantityMobilizedSpan}>{item ? item?.quantity_mobilized : "N/A"}</Col>
                                <Col {...remarksSpan}>{item ? item.remarks : "N/A"}</Col>
                                <Col {...mobilizationSpan}>{item ? item.mobilization_date : "N/A"}</Col>
        
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




