
import React, { Component } from "react";
import { Col, List } from "antd";
import ListHeaderData from '../../ListHeader';
import { isoDateToHumanReadableDate } from "../../../../../Util";
import "./styles.css";


/* constants */
const contractorSpan = { xxl: 12, xl: 12, lg: 12, md: 12, sm: 14, xs: 12 };
const contratValuerSpan = { xxl: 6, xl:6, lg: 6, md: 6, sm: 4, xs: 6 };
const contractPeriodSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 6, xs: 6 };



const headerLayout = [
    { ...contractorSpan, header: "Contractor" },
    { ...contratValuerSpan, header: "Contract Value" },
    { ...contractPeriodSpan, header: "Contract Period" },
];


/**
 * @class
 * @name Sub  Projects
 * @description Render actions list which have search box, actions and Sub Projects list
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class SubProjectContract extends Component {
    render() {
        const { sub_project } = this.props;
        return (
            <div className="sub-project-contract">
                {/* list Reversides */}
                <h4 className='headerTitle'>Contracts</h4>
                <ListHeaderData headerLayout={headerLayout} />
                <List
                    itemName="Sub_project_contract"
                    dataSource={sub_project?.sub_project_contracts}
                    renderItem={item => (
                        <List.Item
                            key={item.id} // eslint-disable-line
                            item={item}
                            renderActions={() => null}
                            className="itemList"

                        >
                            {/* eslint-disable react/jsx-props-no-spreading */}

                            <Col
                                {...contractorSpan}
                                className="contentEllipse"
                                title={item?.description}
                            >
                                {item ? item?.contractor?.name : "N/A"}
                            </Col>
                            <Col {...contratValuerSpan}>{item ? item?.contract_time?.original_contract_period : "N/A"}</Col>
                            <Col {...contractPeriodSpan}>{item ? item?.contract_cost?.contract_award_value?.amount : "N/A"}</Col>

                            {/* eslint-enable react/jsx-props-no-spreading */}
                        </List.Item>
                    )}
                />
                {/* end list */}
            </div>
        );
    }
}


export default SubProjectContract;




