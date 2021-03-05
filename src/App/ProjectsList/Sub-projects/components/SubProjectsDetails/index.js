import React, { Component } from "react";
import { Button, Col, Layout, Row, Spin } from 'antd';
import SidebarSection from "./SideBar";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { projectOperation, projectSelectors } from "../../../../../redux/modules/projects";
import SubProjectEquipment from "./SubProjectEquipment";
import SubProjectsMilestone from "./SubProjectMilestone";
import SubProjectHumanResource from "./SubProjectHumanResource";
import BaseMap from "../../../../Map/BaseMap";
import SubProjectLocations from "../../../../Map/components/SubProjectLocations";
import { mapActions, mapSelectors } from "../../../../../redux/modules/map";
import ImageList from "./ImageGallary";
import ImagesGallery from "./ImageGallary/imageGallaries";
import "./styles.css";

const { Content, Sider } = Layout;

class SubProject extends Component {

  state = {
    showImage: false,
    selectedImage:{}

  }
  componentDidMount() {
    const { getSubProject, match: { params }
    } = this.props;
    getSubProject(params.id)
  }

  handleViewImage = (image) => {
    this.setState({ showImage: true, selectedImage: image})
  }

  handleViewClose = () => {
    this.setState({ showImage: false, selectedImage: {} })
  }

  render() {
    const { sub_project, loading, mapLoading, getWfsLayerData } = this.props;
    const { showImage,selectedImage  } = this.state;
    return (
      <Layout className="sub-project-layout">
        <Spin spinning={loading} tip="Loading..." >
          <Content style={{ padding: '0 50px' }}>
            <div className='top-nav'>
              <h3 id="sub_project_name">{sub_project?.name}</h3>
              {showImage ? <Button id="closeAlbum" onClick={this.handleViewClose}>Close Album</Button> : null}
            </div>
            {!showImage ? <Layout className="sub-project-inner-layout" >
              <Sider className="sider" width={350}>
                <div className="sidebar-header">
                  <h2 id="sider-title">Key Details</h2>
                  <Link
                    to={{
                      pathname: '/app/map/',
                    }}
                  >View on map
              </Link>
                </div>
                <SidebarSection sub_project={sub_project} />
              </Sider>
              <Content className="sub-project-contents">
                <Row>
                  <Col span={11} className="sub_project_map"  >
                    <h4 className='mapHeaderTitle'>Sub Project Location</h4>
                    <Spin spinning={mapLoading} tip="Loading data...">
                      <BaseMap ref={this.map} zoomControl={false}>
                        <SubProjectLocations getWfsLayerData={getWfsLayerData} subProject={sub_project} />
                      </BaseMap>
                    </Spin>
                  </Col>
                  <Col span={12} >
                    <SubProjectsMilestone sub_project={sub_project} offset={1} />
                  </Col>
                  <Col span={11} style={{ marginTop: 26 }}>
                    <SubProjectHumanResource sub_project={sub_project} />
                  </Col>
                  <Col span={12} style={{ marginTop: 26 }}>
                    < SubProjectEquipment sub_project={sub_project} offset={1} />
                  </Col>
                  <Col span={11} style={{ marginTop: 26 }} className='Sub-project-image'>
                   {  <ImageList handleViewImage={this.handleViewImage} showImage={showImage} sub_project={sub_project} />}
                  </Col>
                </Row>
                {/* <ImageGallary /> */}
              </Content>
            </Layout> : <ImagesGallery sub_project={sub_project} selectedImage={selectedImage} />}

          </Content>
        </Spin>
      </Layout>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    sub_project: projectSelectors.getSubProjectSelector(state),
    loading: projectSelectors.getSubProjectLoadingSelector(state),
    mapLoading: mapSelectors.getMapLoadingSelector(state),

  };
};

const mapDispatchToProps = {
  getSubProject: projectOperation.getSubProjectStart,
  getWfsLayerData: mapActions.getWfsLayerDataStart,

};

export default connect(mapStateToProps, mapDispatchToProps)(SubProject);


