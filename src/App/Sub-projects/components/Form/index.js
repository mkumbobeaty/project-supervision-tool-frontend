
import React, {useEffect, useState} from "react";
import Proptypes from 'prop-types';
import { connect } from "react-redux";
import {Button, Col, Form, Input, InputNumber, Row, Select} from "antd";
import {projectActions, projectSelectors} from "../../../../redux/modules/projects";
import { subProjectsActions } from "../../../../redux/modules/subProjects";
import PropTypes from "prop-types";
import API from "../../../../API";

/* ui */
const labelCol = {
  xs: {span: 24},
  sm: {span: 24},
  md: {span: 24},
  lg: {span: 24},
  xl: {span: 24},
  xxl: {span: 24},
};
const wrapperCol = {
  xs: {span: 24},
  sm: {span: 24},
  md: {span: 24},
  lg: {span: 24},
  xl: {span: 24},
  xxl: {span: 24},
};



function SubProjectForm ({  createSubProject, selected,projects,closeSubProjectForm, getProjects }) {

  const [projectComponents, setProjectComponents] = useState([]);
  const [projectSubComponents, setProjectSubComponents] = useState([]);
  const [procuringEntities, setProcuringEntities] = useState([]);
  const [packages, setPackages] = useState([]);
  const [status, setStatus] = useState([]);
  const [types, setTypes] = useState([]);
  const [regions, setRegions] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [features, setFeatures] = useState([]);
  const [shapefiles, setShapefiles] = useState([]);

  useEffect(() => {
    getProjects();
    API.getSubProjectStatus()
        .then(res => setStatus(res.data));
    API.getSubProjectTypes()
        .then(res => setTypes(res.data));
    API.getRegions()
        .then(res => setRegions(res.data));

  }, []);




  const handleOnProjectChange = (value) => {
    const project = projects.find(({id}) => id === value);
    setProjectComponents(project.components)
    setShapefiles(project.shapefiles)
  };


  const handleOnShapefileChange = (shapefile) => {
      API.getWfsLayerData(shapefile)
          .then(res => setFeatures(res.features))
  };

  const handleOnProjectComponentChange = (value) => {
    const component = projectComponents.filter(({id}) => id === value)[0];
    setProjectSubComponents(component.sub_components);
  };

  const handleOnProjectSubComponentChange = (value) => {
    const subComponent = projectSubComponents.filter(({id}) => id === value)[0];
    setProcuringEntities(subComponent.procuring_entities);
  };

  const handleOnProcuringEntityChange = (value) => {
    const procuringEntity = procuringEntities.filter(({id}) => id === value)[0];
    setPackages(procuringEntity.packages);
  };

  const handleOnRegionChange = (value) => {
    API.getDistricts(value)
        .then(res => setDistricts(res.data));
  };


  const onFinish = (values) => {
      const geo_json = features.find(({properties}) => properties.fid === values.sub_project_geo_data_id)
    createSubProject({...values, geo_json, code: values.name});
    closeSubProjectForm();
  };


  return (
      <Form
          labelCol={labelCol}
          wrapperCol={wrapperCol}
          name="basicForm"
          onFinish={onFinish}
          autoComplete="off"
          className="ProjectForm"
          initialValues={{
            name: selected?.name,
            project_id: selected?.project_id,
            description: selected?.description,
            code: selected?.code
          }}

      >
        <h4>Please Fill the form correctly</h4>


          {/*start: project id */}
          <Form.Item
              label="Project"
              name="project_id"
              rules={[
                  {
                      required: true,
                      message: "Project is required",
                  },
              ]}
          >
              <Select onChange={handleOnProjectChange}>
                  {projects.map((project) => (
                      <Select.Option
                          value={project.id}
                      >
                          {project.name}
                      </Select.Option>
                  ))}
              </Select>
          </Form.Item>
          {/*end: project id */}


          {/*start: shapefiles*/}
          <Form.Item
              label="Project Shapefiles"
              name="shapefile"
              rules={[
                  {
                      required: true,
                      message: "Please select project shapefile",
                  },
              ]}
          >
              <Select onChange={handleOnShapefileChange}>
                  {shapefiles.map((shapefile) => (
                      <Select.Option
                          value={shapefile}
                      >
                          {shapefile}
                      </Select.Option>
                  ))}
              </Select>
          </Form.Item>
          {/*end: shapefiles */}

          {/*start: geo_json id */}
          <Form.Item
              label="Select SubProject from project shapefile"
              name="sub_project_geo_data_id"
              rules={[
                  {
                      required: true,
                      message: "Sub project geo data is required is required",
                  },
              ]}
          >
              <Select>
                  {features.map(({ properties }) => (
                      <Select.Option value={properties.fid}>{properties?.name || properties?.road_name || properties?.unique_id}</Select.Option>
                  ))}
              </Select>
          </Form.Item>
          {/*end: geo_json id */}

          <Row>
              <Col lg={14}>
                  {/*start: type id */}
                  <Form.Item
                      label="Subproject Type"
                      name="sub_project_type_id"
                      rules={[
                          {
                              required: true,
                              message: "Sub project type is required",
                          },
                      ]}
                  >
                      <Select>
                          {types.map(({id, name}) => (
                              <Select.Option value={id}>{name}</Select.Option>
                          ))}
                      </Select>
                  </Form.Item>
                  {/*end: type id */}
              </Col>
              <Col lg={8} offset={2}>
                  {/*start: quantity id */}
                  <Form.Item
                      label="Quantity"
                      name="quantity"
                      rules={[
                          {
                              required: false,
                          },
                      ]}
                  >
                      <InputNumber style={{width: 180}}/>
                  </Form.Item>
                  {/*end: quantity id */}
              </Col>
          </Row>

          {/* start:sub project name */}
          <Form.Item
              label="Sub project Name"
              name="name"
              rules={[
                  {
                      required: true,
                      message: "Sub Project name is required",
                  },
              ]}
          >
              <Input/>
          </Form.Item>
          {/* end:sub project name */}

          {/* start:Description */}
          <Form.Item
              label="Description"
              name="description"
              rules={[
                  {
                      required: false,
                      message: "SubProject description is required",
                  },
              ]}
          >
              <Input/>
          </Form.Item>
          {/* end:Description */}

          <Row>
              <Col lg={11}>
                  {/*start: financial progress */}
                  <Form.Item
                      label="Financial Progress"
                      name="financial_progress"
                      rules={[
                          {
                              required: false,
                          },
                      ]}
                  >
                      <InputNumber />
                  </Form.Item>
                  {/*end: financial progress */}
              </Col>
              <Col lg={11} offset={2}>
                  {/*start: physical progress */}
                  <Form.Item
                      label="Physical Progress"
                      name="physical_progress"
                      rules={[
                          {
                              required: false,
                          },
                      ]}
                  >
                      <InputNumber />
                  </Form.Item>
                  {/*end: physical progress */}
              </Col>
          </Row>

          {/*start: region id */}
          <Form.Item
              label="Region"
              name="region_id"
              rules={[
                  {
                      required: true,
                      message: "Region is required",
                  },
              ]}
          >
              <Select onChange={handleOnRegionChange}>
                  {regions.map(({id, name}) => (
                      <Select.Option value={id}>{name}</Select.Option>
                  ))}
              </Select>
          </Form.Item>
          {/*end: region id */}


          {/*start: district id */}
          <Form.Item
              label="District"
              name="district_id"
              rules={[
                  {
                      required: true,
                      message: "District is required",
                  },
              ]}
          >
              <Select onChange={handleOnRegionChange}>
                  {districts.map(({id, name}) => (
                      <Select.Option value={id}>{name}</Select.Option>
                  ))}
              </Select>
          </Form.Item>
          {/*end: district id */}

        {/*start: status id */}

        <Form.Item
            label="Subproject Status"
            name="sub_project_status_id"
            rules={[
              {
                required: true,
                message: "Sub project status is required",
              },
            ]}
        >
          <Select>
            {status.map(({id, name}) => (
                <Select.Option value={id}>{name}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        {/*end: sub project status id */}


        {/*start: project component id */}
        <Form.Item
            label="Project Component"
            name="project_component_id"
            rules={[
              {
                required: true,
                message: "Project Component is required",
              },
            ]}
        >
          <Select onChange={handleOnProjectComponentChange}>
            {projectComponents.map(({id, name}) => (
                <Select.Option value={id}>{name}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        {/*end: project component id */}


        {/*start: project sub component id */}
        <Form.Item
            label="Project Sub Component"
            name="project_sub_component_id"
            rules={[
              {
                required: true,
                message: "Project Sub Component is required",
              },
            ]}
        >
          <Select onChange={handleOnProjectSubComponentChange}>
            {projectSubComponents.map(({id, name}) => (
                <Select.Option value={id}>{name}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        {/*end: project sub component id */}


        {/*start: procuring entity id */}
        <Form.Item
            label="Procuring Entity"
            name="procuring_entity_id"
            rules={[
              {
                required: true,
                message: "Procuring Entity is required",
              },
            ]}
        >
          <Select onChange={handleOnProcuringEntityChange}>
            {procuringEntities.map(({id, agency}) => (
                <Select.Option value={id}>{agency.name}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        {/*end: procuring entity id */}


        {/*start: package id */}
        <Form.Item
            label="Package"
            name="procuring_entity_package_id"
            rules={[
              {
                required: true,
                message: "Sub project package is required",
              },
            ]}
        >
          <Select>
            {packages.map(({id, name}) => (
                <Select.Option value={id}>{name}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        {/*end: package id */}

        {/* start:form actions */}
        <Form.Item wrapperCol={{span: 24}} style={{textAlign: "right"}}>
          <Button
              type="primary"
              htmlType="submit"
              style={{marginLeft: 8}}
          >
            Save
          </Button>
        </Form.Item>
        {/* end:form actions */}
      </Form>
  );
}

const mapStateToProps = (state) => {
  return {
    projects: projectSelectors.getProjectsSelector(state),
  };
};

const mapDispatchToProps = {
  getProjects: projectActions.getProjectsStart,
  closeSubProjectForm: projectActions.closeSubProjectForm,
  createSubProject: projectActions.createSubProjectStart,
  updateSubProject: subProjectsActions.updateSubProjectStart
}

export default connect(mapStateToProps, mapDispatchToProps)(SubProjectForm);

SubProjectForm.propTypes = {
  projects: Proptypes.array,
  getProjects: Proptypes.func.isRequired,
  closeSubProjectForm: Proptypes.func.isRequired,
  createSubProject: PropTypes.func.isRequired,
}

SubProjectForm.defaultProps = {
  projects: []
}
