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

const RegionLocationForm = ({ visible, onCancel, locations,  setLocations, regions }) => {
    const [form] = Form.useForm();
    useResetFormOnCloseModal({
        form,
        visible,
    });
    const [point, setPoint] = useState(null);

    const handleSelectedSuggestion = ({latlng}) => setPoint({ type: 'Point', coordinates: [latlng.lat, latlng.lng] })

    const onOk = () => {
        const region = form.getFieldValue('region') || null;
        API.createProjectLocation({ region_id: region, level: 'region', point})
            .then( ({ data }) => {
                setLocations([ ...locations, data.id]);
                form.submit();
            });

    };

    return (
        <Modal title="Add Project Location" visible={visible} onOk={onOk} onCancel={onCancel}>
            <Form form={form} layout="vertical" name="userForm">
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
                    <Select>
                        { regions.map(({ id, name}) => (
                            <Select.Option value={id}>{ name }</Select.Option>
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

export default RegionLocationForm;

RegionLocationForm.propTypes = {
    visible: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    setLocations: PropTypes.func.isRequired,
    locations: PropTypes.array.isRequired,
    regions: PropTypes.array.isRequired,
}
