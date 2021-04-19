import React, { useEffect, useState } from "react";
import {Drawer, Table, Image, Button, Modal} from "antd";
import PropTypes from 'prop-types';
import API from "../../../API";
import {isoDateToHumanReadableDate, stringToGeoJson} from "../../../Util";
import Toolbar from "../../Sub-projects/components/SubProjectsDetails/Toolbar";
import DisplaySurveyForm from "../DisplaySurveyForm";
import ViewOnMap from "../../components/ViewOnMap";
import './styles.css';

const ViewSubmissionOnMap = ({data, showMApModal, handleOnCancel}) => <ViewOnMap showMApModal={showMApModal} handleOnCancel={handleOnCancel} data={data} />


const getAttachMentUrl = (attachments, name) => {
    return attachments.length > 0 ? attachments[0].download_url : '';
}

function SurveyResults({ survey_id }) {
    const [columns, setColumns] = useState([]);
    const [features, setFeatures] = useState([]);
    const [feature, setFeature] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    const [showMapModel, setShowMapModal] = useState(false);
    const [dataExportUrl, setExportDataUrl] = useState('');

    useEffect(() => {
        const spatialColumn = columns.filter((c) => c.type === 'geoshape' || c.type === 'geotrace' || c.type === 'geopoint' )[0];
        const data = dataSource.map((d) => stringToGeoJson(d[spatialColumn.key], spatialColumn.type));
        setFeatures(data);
    }, [dataSource]);


    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        getData(survey_id);
        setIsModalVisible(false);
    };

    const handleOnMapCancel = () => setShowMapModal(false);
    const handleOnSubmissionMapCancel = () => {
        setShowMapModal(false);
        setFeature(null);
        getData(survey_id);
    }

    const  handleOnPreviewSubmissionOnMap = (spatialData) => {
        setFeature(spatialData);
        setShowMapModal(true);
    }



    const getData = value => API.getAsset(value)
        .then(res => {
            // kml_legacy
            setExportDataUrl(res?.deployment__data_download_links?.kml_legacy)
            const meta = res.content.survey.map(s => ({
                title: s.label ? s.label[0] : s.name,
                dataIndex: s.$autoname,
                key: s.$autoname, type: s.type,
                render: text => {
                    if (s.type === 'image')
                        return <Image width={200} src={text} />

                    if (s.type === 'geoshape' || s.type === 'geotrace' || s.type === 'geopoint')
                    {
                        const geoJson = stringToGeoJson(text, s.type);
                        return text ? <Button onClick={() => { handleOnPreviewSubmissionOnMap(geoJson)}}>View on Map</Button> : 'N/A';

                    }

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
                showOnMap={() => setShowMapModal(true)}
                exportUrl={dataExportUrl}
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
            <Table dataSource={dataSource} columns={columns} className="SurveyTable" />
            <Drawer
                width={550}
                footer={null}
                onClose={handleCancel}
                visible={isModalVisible}
                destroyOnClose
                maskClosable={false}
                className="SurveyFormDrawer"
            >
                <DisplaySurveyForm survey_id={survey_id} />
            </Drawer>
            <ViewOnMap data={features} showMApModal={showMapModel} handleOnCancel={handleOnMapCancel} />
            { feature ?  <ViewSubmissionOnMap data={[feature]} showMApModal={showMapModel} handleOnCancel={handleOnSubmissionMapCancel} /> : ''}
        </section>
    );
}

export default SurveyResults;
SurveyResults.propTypes = {
    survey_id: PropTypes.string.isRequired
}
