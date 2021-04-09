import React, {useEffect, useState} from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { Row, Col, Layout, } from "antd";
import { isoDateToHumanReadableDate } from "../../../../../Util";

const { Content } = Layout;

const ImagesGallery = ({ sub_project, selectedImage}) => {
  const [images, setImages] = useState(null);


  useEffect(() => {
    let shouldCancel = false;

    if (!shouldCancel && sub_project?.photos && sub_project?.photos.length > 0) {
      setImages(
        sub_project?.photos.map(({ url }) => ({
          original: `${url}`,
          thumbnail: `${url}`,
        }))
      );
    }
    else {
      return () => (shouldCancel = true);
    }
  }, []);

  return (
    <Layout className="sub-project-inner-layout" >
      <Content className="sub-project-contents">
        <Row>
          <Col span={17} >
            {images ? <ImageGallery items={images} /> : null}
          </Col>
          <Col span={6} offset={1}>
            <div className="imageDetail">
              <h3>Details</h3>
                    <span>
                      <h4>Uploaded on</h4>
                      <p> {isoDateToHumanReadableDate(selectedImage?.created_at)}</p>
                      <h4>Location</h4>
                      <p> {selectedImage?.latitude || selectedImage?.longitude ? selectedImage?.latitude : 'N/A' }, {selectedImage?.longitude }</p>
                      <h4>Uploaded By</h4>
                      <p>{selectedImage?.owner ? selectedImage?.owner?.first_name : 'N/A'} , { selectedImage?.owner?.last_name }</p>
                      <h4>Description</h4>
                      <p>{selectedImage ? selectedImage?.description : 'N/A'}</p>
                    </span>
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
};
export default ImagesGallery

