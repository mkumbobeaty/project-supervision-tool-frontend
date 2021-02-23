
import React, { Component } from "react";
import { Col,List } from "antd";
import ListHeaderData from '../../ListHeader';
import { isoDateToHumanReadableDate } from "../../../../../../Util";

import "./styles.css";


/* constants */
const awardValueNameSpan = { xxl: 5, xl: 5, lg: 6, md: 8, sm: 10, xs: 11 };
const finalPriceSpan = { xxl: 5, xl: 5, lg: 6, md: 5, sm: 4, xs: 5 };
const grantedValueSpan = { xxl: 5, xl: 5, lg: 6, md: 6, sm: 6, xs: 5 };
const milistonePeriondSpan = { xxl: 4, xl: 4, lg: 6, md: 5, sm: 4, xs: 3 };
const completionDateSpan = { xxl: 5, xl: 5, lg: 0, md: 0, sm: 0, xs: 0 };



const headerLayout = [
    { ...awardValueNameSpan, header: "Award Value", title:"milistone_award_value" },
    { ...finalPriceSpan, header: "milistone price", title:"Estimated final milistone price" },
    { ...grantedValueSpan, header: "Penalties granted", title:"Financial penalties granted" },
    { ...milistonePeriondSpan, header: "milistone period" },
    { ...completionDateSpan, header: "Completion Date" },
];


/**
 * @class
 * @name Sub  Projects
 * @description Render actions list which have search box, actions and Sub Projects list
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class SubProjectsMilestone extends Component {
    render() {
        const { sub_project } = this.props;
        return (
            <div className="sub-project-milestone">
                {/* list Reversides */}
                <h4 className='headerTitle'>Milestones</h4>
                <ListHeaderData headerLayout={headerLayout}/>
                <List
                    itemName="Sub_project_milestone"
                    dataSource={sub_project?.sub_project_milestones }
                    renderItem={item => (
                            <List.Item
                                key={item.id} // eslint-disable-line
                                item={item}
                                renderActions={() => null}
                                className="itemList"
                                
                            >
                                {/* eslint-disable react/jsx-props-no-spreading */}
    
                                <Col
                                    {...awardValueNameSpan}
                                    className="contentEllipse"
                                >
                                    {item?.milistone_cost ? item?.milistone_cost.milistone_award_value.amount:"N/A"} {item?.milistone_cost.milistone_award_value.currency.iso}
                                </Col>
                                <Col {...finalPriceSpan}>{item ? item?.milistone_cost.estimated_final_milistone_price.amount : "N/A"} {item?.milistone_cost.estimated_final_milistone_price.currency.iso}</Col>
                                <Col {...grantedValueSpan}>{item ? item?.milistone_cost.financial_penalties_granted_value.amount : "N/A"} {item?.milistone_cost.financial_penalties_granted_value.currency.iso}</Col>
                                <Col {...milistonePeriondSpan}>{item?.milistone_time ? item.milistone_time.original_milistone_period : "N/A"}</Col>
                                <Col {...completionDateSpan}>{isoDateToHumanReadableDate(item?.milistone_time ? item.milistone_time.intended_completion_date : "N/A")}</Col>
        
                                {/* eslint-enable react/jsx-props-no-spreading */}
                            </List.Item>
                        )}
                />
                {/* end list */}
            </div>
        );
    }
}


export default SubProjectsMilestone;




