import React from "react";
import { Table } from 'antd';

const columns = [
    {
        title: 'Report Type',
        dataIndex: 'report_type',
    },
    {
        title: 'Subminted On',
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
        report_type: 'CSC Progress Report',
        submitted_on: '24-12-2020',
        submited_by: 'Ms Jonisia',
    },
    {
        key: '2',
        report_type: 'CSC Progress Report',
        submitted_on: '29-12-2020',
        submited_by: 'Edgar Vitus',
    },
    {
        key: '3',
        report_type: 'CSC Progress Report',
        submitted_on: '26-01-2021',
        submited_by: 'Joe Black',
    },
    {
        key: '4',
        report_type: 'CSC Progress Report',
        submitted_on: '04-03-2021',
        submited_by: 'Mr Mlawa',
    }, {
        key: '5',
        report_type: 'CSC Progress Report',
        submitted_on: '12-03-2021',
        submited_by: 'Judith Bakari',
    },
];

const ReportOverview = () => {

    return (
        <Table
            columns={columns}
            dataSource={data}
            title={() => 'Latest Reports'}
            pagination={false}
        />
    )
}

export default ReportOverview