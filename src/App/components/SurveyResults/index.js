import React, { useEffect, useState } from "react";
import { Drawer, Table, Image } from "antd";
import PropTypes from 'prop-types';
import API from "../../../API";
import { isoDateToHumanReadableDate } from "../../../Util";
import Toolbar from "../../Sub-projects/components/SubProjectsDetails/Toolbar";
import DisplaySurveyForm from "../DisplaySurveyForm";

const getAttachMentUrl = (attachments, name) => {
    return attachments.length > 0 ? attachments[0].download_url : '';
}

function SurveyResults({ survey_id }) {
    const [columns, setColumns] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [dataSource, setDataSource] = useState([]);


    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        getData(survey_id)
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        getData(survey_id)
        setIsModalVisible(false);
    };

    const getData = value => API.getAsset(value)
        .then(res => {
            console.log('asset', res);
            const meta = res.content.survey.map(s => ({
                title: s.label ? s.label[0] : s.name,
                dataIndex: s.$autoname,
                key: s.$autoname, type: s.type,
                render: text => {
                    if (s.type === 'image')
                        return <Image width={200} src={text} />
                    //  <a href={text} target='_blank' rel="noopener noreferrer"> </a>

                    return text;
                },
            }))
            setColumns(meta);
            API.getAssetData(value)
                .then(res => setDataSource(res.results.map(r => {
                    const imageColumns = meta.filter(({ type }) => type === 'image');
                    let withFomratedDates = {
                        ...r,
                        end: isoDateToHumanReadableDate(r.end),
                        start: isoDateToHumanReadableDate(r.start),
                    }

                    for (let imageColumn of imageColumns) {
                        withFomratedDates[imageColumn.key] = getAttachMentUrl(r._attachments, r[imageColumn.key]);
                    }
                    return withFomratedDates;

                })));
        });

    useEffect(() => {
        getData(survey_id)
    }, []);

    return (
        <section className="container">
            <Toolbar
                total={dataSource.length}
                onRefresh={() => getData(survey_id)}
                itemName="PhotoGallary"
                filterTo="To"
                actions={[
                    {
                        label: "Fill Field Notes",
                        size: "large",
                        title: "Fill Field Notes",
                        onClick: showModal,
                    },
                ]}
            />
            <Table dataSource={dataSource} columns={columns} className="container" />
            <Drawer
                width={550}
                footer={null}
                onClose={handleCancel}
                visible={isModalVisible}
                destroyOnClose
                maskClosable={false}
            >
                <DisplaySurveyForm survey_id={survey_id} />
            </Drawer>
        </section>
    );
}

export default SurveyResults;
SurveyResults.propTypes = {
    survey_id: PropTypes.string.isRequired
}
