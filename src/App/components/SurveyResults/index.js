import React, {useEffect, useState} from "react";
import {Table} from "antd";
import PropTypes from 'prop-types';
import API from "../../../API";
import {isoDateToHumanReadableDate} from "../../../Util";

const getAttachMentUrl = (attachments, name) => {
    return attachments.length > 0 ? attachments[0].download_url : '';
}

function SurveyResults({survey_id}) {
    const [columns, setColumns] = useState([]);
    const [dataSource, setDataSource] = useState([]);
    useEffect(() => {
        API.getAsset(survey_id)
            .then(res => {
                console.log('asset', res);
                const meta = res.content.survey.map(s => ({
                    title: s.label ? s.label[0] : s.name,
                    dataIndex: s.$autoname,
                    key: s.$autoname, type: s.type,
                    render: text => {
                        if (s.type === 'image') return <a href={text} target='_blank' rel="noopener noreferrer">{text}</a>;
                        return text;
                    },
                }))
                setColumns(meta);
                API.getAssetData(survey_id)
                    .then(res => setDataSource(res.results.map(r => {
                        const imageColumns = meta.filter(({type}) => type === 'image');
                        let withFomratedDates = {
                            ...r,
                            end: isoDateToHumanReadableDate(r.end),
                            start: isoDateToHumanReadableDate(r.start),
                        }

                        for ( let imageColumn of imageColumns) {
                            withFomratedDates[imageColumn.key] = getAttachMentUrl(r._attachments, r[imageColumn.key]);
                        }
                        return withFomratedDates;

                    })));
            });
    }, []);
    return (<Table dataSource={dataSource} columns={columns}/>);
}

export default SurveyResults;
SurveyResults.propTypes = {
    survey_id: PropTypes.string.isRequired
}
