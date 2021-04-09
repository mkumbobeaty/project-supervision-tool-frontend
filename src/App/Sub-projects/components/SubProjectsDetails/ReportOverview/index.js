import React from "react";
import { Table } from 'antd';

const columns = [
    {
        title: 'Name',
        dataIndex: 'report-type',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Cash Assets',
        className: 'column-money',
        dataIndex: 'submitted_on',
        align: 'right',
    },
    {
        title: 'Submited by',
        dataIndex: 'submited_by',
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        submitted_on: '￥300,000.00',
        submited_by: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        submitted_on: '￥1,256,000.00',
        submited_by: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        submitted_on: '￥120,000.00',
        submited_by: 'Sidney No. 1 Lake Park',
    },
];

const ReportOverview = () => {

    return (
        <Table
            columns={columns}
            dataSource={data}
            title={() => 'Latest Reports'}
        />
    )
}

export default ReportOverview