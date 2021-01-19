import {Form, Modal, Select} from "antd";
import PropTypes from 'prop-types';
import React, {useEffect, useRef, useState} from "react";
import AlgoliaPlaces from 'algolia-places-react';
import API from '../../API';


// reset form fields when modal is form, closed
const useResetFormOnCloseModal = ({ form, visible }) => {
    const prevVisibleRef = useRef();
    useEffect(() => {
        prevVisibleRef.current = visible;
    }, [visible]);
    const prevVisible = prevVisibleRef.current;
    useEffect(() => {
        if (!visible && prevVisible) {
            form.resetFields();
        }
    }, [visible]);
};

const LocationForm = ({ visible, onCancel, locations,  setLocations, regions, layers }) => {
    const [form] = Form.useForm();
    useResetFormOnCloseModal({
        form,
        visible,
    });
    const [point, setPoint] = useState(null);
    const [districts, setDistricts] = useState([]);
    const [region_id, setRegionId] = useState(null);

    // get districts when region is selected
    useEffect(() => {
        API.getDistricts(region_id)
            .then(({data}) => setDistricts(data));
    }, [region_id]);

    const handleSelectedSuggestion = ({latlng}) => setPoint({ type: 'Point', coordinates: [latlng.lng, latlng.lat] })

    const onOk = () => {
        const district = form.getFieldValue('district') || null;
        const layer_name = form.getFieldValue('layer_name') || null;
        API.createProjectLocation({
            district_id: district,
            level: 'district',
            layer_source: 'geonode',
            layer_name,
            point
        })
            .then( ({ data }) => {
                setLocations([ ...locations, data.id]);
                form.submit();
            });

    };

    return (
        <Modal title="Add Project Location" visible={visible} onOk={onOk} onCancel={onCancel}>
            <Form form={form} layout="vertical" name="locationForm">
                <Form.Item
                    label="Region"
                    name="region"
                    rules={[
                        {
                            required: true,
                            message: "Region is required",
                        },
                    ]}
                >
                    <Select onChange={(id) => setRegionId(id)}>
                        { regions.map(({ id, name}) => (
                            <Select.Option value={id}>{ name }</Select.Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="District"
                    name="district"
                    rules={[
                        {
                            required: true,
                            message: "District is required",
                        },
                    ]}
                >
                    <Select>
                        { districts.map(({ id, name}) => (
                            <Select.Option value={id}>{ name }</Select.Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Sub project Layer(Optional)"
                    name="layer_name"
                >
                    <Select>
                        { layers.map(({ name}) => (
                            <Select.Option value={name}>{ name }</Select.Option>
                        ))}
                    </Select>
                </Form.Item>
            </Form>
            <AlgoliaPlaces
                placeholder='Write Project Address'

                options={{
                    appId: 'pl1JRJN6R9BW',
                    apiKey: 'c21ba5b080b685c549c57d57cf48f262',
                    language: 'sv',
                    countries: ['tz'],
                    type: 'address',
                    // Other options from https://community.algolia.com/places/documentation.html#options
                }}

                onChange={({ suggestion }) => handleSelectedSuggestion(suggestion)}
            />

        </Modal>
    );
};

export default LocationForm;

LocationForm.propTypes = {
    visible: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    setLocations: PropTypes.func.isRequired,
    locations: PropTypes.array.isRequired,
    regions: PropTypes.array.isRequired,
}
