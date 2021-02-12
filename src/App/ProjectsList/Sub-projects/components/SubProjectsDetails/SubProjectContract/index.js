
import React, { Component } from "react";
import { Col,List } from "antd";
import ListHeaderData from '../../ListHeader';
import { isoDateToHumanReadableDate } from "../../../../../../Util";

import "./styles.css";


/* constants */
const awardValueNameSpan = { xxl: 5, xl: 5, lg: 6, md: 8, sm: 10, xs: 11 };
const finalPriceSpan = { xxl: 5, xl: 5, lg: 6, md: 5, sm: 4, xs: 5 };
const grantedValueSpan = { xxl: 5, xl: 5, lg: 6, md: 6, sm: 6, xs: 5 };
const contractPeriondSpan = { xxl: 4, xl: 4, lg: 6, md: 5, sm: 4, xs: 3 };
const completionDateSpan = { xxl: 5, xl: 5, lg: 0, md: 0, sm: 0, xs: 0 };



const headerLayout = [
    { ...awardValueNameSpan, header: "Award Value", title:"contract_award_value" },
    { ...finalPriceSpan, header: "Contract price", title:"Estimated final contract price" },
    { ...grantedValueSpan, header: "Penalties granted", title:"Financial penalties granted" },
    { ...contractPeriondSpan, header: "Contract period" },
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
class ProjectSubProjects extends Component {


    render() {
        const { sub_project } = this.props;
        return (
            <div className="sub-project-contract">
                {/* list Reversides */}
                <ListHeaderData headerLayout={headerLayout}/>
                <List
                    itemName="Sub_project_contract"
                    dataSource={sub_project?.sub_project_contracts }
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
                                    {item?.contract_cost ? item?.contract_cost.contract_award_value.amount:"N/A"} {item?.contract_cost.contract_award_value.currency.iso}
                                </Col>
                                <Col {...finalPriceSpan}>{item ? item?.contract_cost.estimated_final_contract_price.amount : "N/A"} {item?.contract_cost.estimated_final_contract_price.currency.iso}</Col>
                                <Col {...grantedValueSpan}>{item ? item?.contract_cost.financial_penalties_granted_value.amount : "N/A"} {item?.contract_cost.financial_penalties_granted_value.currency.iso}</Col>
                                <Col {...contractPeriondSpan}>{item?.contract_time ? item.contract_time.original_contract_period : "N/A"}</Col>
                                <Col {...completionDateSpan}>{isoDateToHumanReadableDate(item?.contract_time ? item.contract_time.intended_completion_date : "N/A")}</Col>
        
                                {/* eslint-enable react/jsx-props-no-spreading */}
                            </List.Item>
                        )}
                />
                {/* end list */}
            </div>
        );
    }
}


export default ProjectSubProjects;




