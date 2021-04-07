import React from "react";
import { Table } from "antd";
import "./styles.css";

const DetailsSection = () => {
    let sameKey;
    const columns = [
        {
            title: "Components",
            dataIndex: "state_name",
            key: "state_name",
            render: (value, row, index) => {
                const obj = {
                    children: value,
                    props: {}
                };
                if (!(sameKey !== value)) {
                    obj.props.rowSpan = 0;
                    return obj;
                }
                const count = data.filter(item => item.state_name === value).length;
                sameKey = value;
                obj.props.rowSpan = count;
                return obj;
            }
        },

        {
            title: "S/n",
            dataIndex: "gender",
            key: 1
        },
        {
            title: "Sub-Components",
            dataIndex: "total",
            key: 2
        },


    ];

    const data = [
        {
            state_name: "Priority Infustructure",
            gender: "1a",
            total: "Priority Roads",
        },
        {
            state_name: "Priority Infustructure",
            gender: "1b",
            total: "Flood control and storm water drainage",
        },
        {
            state_name: "Priority Infustructure",
            gender: "1c",
            total: "Contingency for Disaster risk response",
        },
        {
            state_name: "Upgrading low income community",
            gender: "2a",
            total: "Ilala MC",
        },
        {
            state_name: "Upgrading low income community",
            gender: "2b",
            total: "kinondoni MC",
        },
        {
            state_name: "Upgrading low income community",
            gender: "2c",
            total: "Temeke MC",
        },
        {
            state_name: "Implementing Support and monitoring and evaluation",
            gender: "3a",
            total: Math.floor(Math.random() * 90 + 10),
        },
        {
            state_name: "Implementing Support and monitoring and evaluation",
            gender: "3b",
            total: Math.floor(Math.random() * 90 + 10),
        },
    ];

    return (
        <section className="project_components">
            <h4>Projects Components</h4>
            <Table
                columns={columns}
                dataSource={data.map((d, i) => ({ key: i, ...d }))}
                pagination={false}
                bordered={true}
            />
        </section>

    );
};

export default DetailsSection;
