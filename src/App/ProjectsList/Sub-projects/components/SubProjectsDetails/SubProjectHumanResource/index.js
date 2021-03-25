// 
import React, { Component } from "react";
import { Col, List } from "antd";
import ListHeaderData from '../../ListHeader';
import "./styles.css";

/* constants */
const positionSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 6, xs: 6 };
const quantitySpan = { xxl: 4, xl: 4, lg: 4, md: 4, sm: 4, xs: 4 }
const genderMaleSpan = { xxl: 4, xl: 4, lg: 4, md: 4, sm: 4, xs: 4 }
const genderFemaleSpan = { xxl: 4, xl: 4, lg: 4, md: 4, sm: 4, xs: 4 }
const nameSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 6, xs: 6 };




const headerLayout = [
    { ...positionSpan, header: "Position", title: 'position' },
    { ...quantitySpan, header: "Quantity", title: 'Number of Human resources' },
    { ...genderMaleSpan, header: "Gender (M)", title: 'gender-male' },
    { ...genderFemaleSpan, header: "Gender (F)", title: 'gender-female' },
    { ...nameSpan, header: "Name(s)", title: 'name' },
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
                            <Col {...genderMaleSpan}>{item ? item?.quantity : "N/A"}</Col>
                            <Col {...genderFemaleSpan}>{item ? item?.quantity : "N/A"}</Col>
                            <Col {...nameSpan}>{item ? item?.quantity : "N/A"}</Col>
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




