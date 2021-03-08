
import React, { Component } from "react";
import { Col, List } from "antd";
import ListHeaderData from '../../ListHeader';
import { isoDateToHumanReadableDate } from "../../../../../../Util";

import "./styles.css";


/* constants */
const nameSpan = { xxl: 12, xl: 12, lg: 12, md: 12, sm: 14, xs: 12 };
const taskSpan = { xxl: 6, xl:6, lg: 6, md: 6, sm: 4, xs: 6 };
const completionDateSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 6, xs: 6 };



const headerLayout = [
    { ...nameSpan, header: "Name" },
    { ...taskSpan, header: "Tasks" },
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
                <ListHeaderData headerLayout={headerLayout} />
                <List
                    itemName="Sub_project_milestone"
                    dataSource={sub_project?.sub_project_milestones}
                    renderItem={item => (
                        <List.Item
                            key={item.id} // eslint-disable-line
                            item={item}
                            renderActions={() => null}
                            className="itemList"

                        >
                            {/* eslint-disable react/jsx-props-no-spreading */}

                            <Col
                                {...nameSpan}
                                className="contentEllipse"
                                title={item?.description}
                            >
                                {item ? item?.name : "N/A"}
                            </Col>
                            <Col {...taskSpan}>{item ? item?.tasks : "N/A"}</Col>
                            <Col {...completionDateSpan}>{isoDateToHumanReadableDate(item ? item?.created_ad : "N/A")}</Col>

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




