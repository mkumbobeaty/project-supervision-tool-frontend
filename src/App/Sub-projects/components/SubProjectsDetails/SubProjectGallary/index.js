
import {Drawer, Image} from 'antd';
import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import API from '../../../../../API';

import Toolbar from '../Toolbar';
import './styles.css';
import DisplaySurveyForm from "../../../../components/DisplaySurveyForm";

 const ImageGallary = ({ survey_id }) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [imgUrls, setImgUrls] = useState([]);

    const getData = value => API.getAssetData(value)
        .then(res => {
            const urls = res.results.map((result) => result._attachments.map(({ download_url }) => download_url));
            setImgUrls(urls.flat());
        });

    useEffect(() => {
        getData(survey_id)
    }, [])

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

  return (
    <section className="ImageGallary container">
      <Toolbar
        total={imgUrls.length}
        itemName="PhotoGallary"
        onRefresh={() => getData(survey_id)}
        // exportUrl={true}
        // onFilter={true}
        // filterData="20/2/2020"
        // filterFrom="Showing images from:"
        filterTo="To"
        actions={[
          {
            label: "Upload new photo",
            size: "large",
            title: "Upload New photo",
            onClick: () => showModal(),
          },
        ]}
      />
      <Image.PreviewGroup>
        {
          imgUrls.map(url => {
            return (
              <Image
                width={300}
                src={url}
              />
            )
          })
        }

      </Image.PreviewGroup>
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

export default ImageGallary;

 ImageGallary.propTypes = {
     survey_id: PropTypes.string.isRequired
 }

