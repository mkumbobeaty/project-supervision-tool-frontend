
import { Image } from 'antd';
import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import API from '../../../../../API';

import Toolbar from '../Toolbar';
import './styles.css';
import DisplaySurveyForm from "../../../../components/DisplaySurveyForm";

// const imgUrls = [
//   'https://source.unsplash.com/PC_lbSSxCZE/800x600', 'https://source.unsplash.com/lVmR1YaBGG4/800x600',
//   'https://source.unsplash.com/5KvPQc1Uklk/800x600', 'https://source.unsplash.com/GtYFwFrFbMA/800x600',
//   'https://source.unsplash.com/Igct8iZucFI/800x600', 'https://source.unsplash.com/M01DfkOqz7I/800x600',
//   'https://source.unsplash.com/MoI_cHNcSK8/800x600', 'https://source.unsplash.com/M0WbGFRTXqU/800x600',
//   'https://source.unsplash.com/s48nn4NtlZ4/800x600', 'https://source.unsplash.com/E4944K_4SvI/800x600',
//   'https://source.unsplash.com/F5Dxy9i8bxc/800x600', 'https://source.unsplash.com/iPum7Ket2jo/800x600'
// ];

 const ImageGallary = ({ survey_id }) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [imgUrls, setImgUrls] = useState([]);

    useEffect(() => {
        API.getAssetData(survey_id)
            .then(res => {
                const urls = res.results.map((result) => result._attachments.map(({ download_url }) => download_url));
                setImgUrls(urls.flat());
            });
    }, [])

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

  return (
    <section className="ImageGallary container">
      <Toolbar
        total={imgUrls.length}
        itemName="PhotoGallary"
        onRefresh={() => console.log("clicked to refles")}
        exportUrl={true}
        onFilter={true}
        filterData="20/2/2020"
        filterFrom="Showing images from:"
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
        <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <DisplaySurveyForm survey_id={survey_id} />
        </Modal>
    </section>
  );
}

export default ImageGallary;

 ImageGallary.propTypes = {
     survey_id: PropTypes.string.isRequired
 }

