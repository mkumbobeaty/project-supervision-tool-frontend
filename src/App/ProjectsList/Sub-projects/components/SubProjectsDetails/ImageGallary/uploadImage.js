
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Input, Button, Upload, message } from 'antd';
import { bindActionCreators } from "redux";
import { subProjectsActions, subProjectsSelectors } from '../../../../../../redux/modules/subProjects';
import { InboxOutlined,UploadOutlined } from '@ant-design/icons';

/* ui */
const labelCol = {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 24 },
    lg: { span: 24 },
    xl: { span: 24 },
    xxl: { span: 24 },
};
const wrapperCol = {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 24 },
    lg: { span: 24 },
    xl: { span: 24 },
    xxl: { span: 24 },
};

const { Dragger } = Upload;

const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

/**
 * @function
 * @name UploadPhotoForm
 * @description renders form for creating project
 */
function UploadPhotoForm({ uploadPhoto, dummyRequest, onChange, selectedFileList, sub_project }) {

    const onFinish = (values) => {
        const id = sub_project.id;
        debugger
        const data = new FormData ();
        data.append("photo", selectedFileList.name)
        const payload = { description: values.description, id, photo: data }
        uploadPhoto(payload);
    };

    const selected = null;
    return (
        <>
            <Form.Provider
                onFormFinish={(name, { values, forms }) => {
                }}
            >

                <Form
                    labelCol={labelCol}
                    wrapperCol={wrapperCol}
                    name="UploadPhotoForm"
                    onFinish={onFinish}
                    projectsValues={{
                        sub_projects_id: selected?.sub_projects_id,
                        description: selected?.description,
                    }}
                    autoComplete="off"
                    className="UploadPhotoForm"
                >
                    {/* start:Description */}
                    <Form.Item
                        label="Description"
                        name="description"
                        title="Project Description e.g water recyle project"
                        rules={[
                            {
                                required: true,
                                message: "Project description is required",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    {/* end:Description */}

                    {/* start:photo */}
                    <Form.Item
                        label="Photo"
                        name="photo"
                        title="Upoload Photo"
                        rules={[
                            {
                                required: true,
                                message: "Photo is required",
                            },
                        ]}
                    >
                        <Upload
                            fileList={selectedFileList}
                            customRequest={dummyRequest}
                            onChange={onChange}
                        >
                            <Button icon={<UploadOutlined />}>Click to Upload Image</Button>
                        </Upload>
                    </Form.Item>
                    {/* end:photo */}

                    {/* start:form actions */}
                    <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: "right" }}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{ marginLeft: 8 }}
                        >
                            Upload Photo
                    </Button>
                    </Form.Item>
                    {/* end:form actions */}
                </Form>
            </Form.Provider>
        </>
    );
}


const mapDispatchToProps = (dispatch) => ({
    uploadPhoto: bindActionCreators(subProjectsActions.uploadPhotoStart, dispatch),

});

export default connect(null, mapDispatchToProps)(UploadPhotoForm);

UploadPhotoForm.propTypes = {
    sub_project: PropTypes.array,
    uploadPhoto: PropTypes.func.isRequired,
}

UploadPhotoForm.defaultProps = {
    sub_project: []
}




// class UploadPhotoForm extends React.Component{

//     constructor(){
//         super();
//         this.state = {
//             selectedFile:'',
//         }

//         this.handleInputChange = this.handleInputChange.bind(this);
//     }

//     handleInputChange(event) {
//         this.setState({
//             selectedFile: event.target.files[0],
//           })
//     }

//      onFinish = (values) => {
//         const {sub_project,uploadPhoto } = this.props
//         const id = sub_project.id;
//         const data = new FormData() 
//         data.append('file', this.state.selectedFile, this.state.selectedFile.name)
//         const payload = { description : values.description, id, photo:this.state.selectedFile.name }
//         debugger
//         uploadPhoto(payload);
//     };

//     render(){
//         const {selected } = this.props

//         return(
//             <div>
//             <Form.Provider
//                 onFormFinish={(name, { values, forms }) => {
//                 }}
//             >
//                 <Form
//                     labelCol={labelCol}
//                     wrapperCol={wrapperCol}
//                     name="UploadPhotoForm"
//                     onFinish={this.onFinish}
//                     projectsValues={{
//                         sub_projects_id: selected?.sub_projects_id,
//                         description: selected?.description,
//                     }}
//                     autoComplete="off"
//                     className="UploadPhotoForm"
//                 >
//                     {/* start:Description */}
//                     <Form.Item
//                         label="Description"
//                         name="description"
//                         title="Project Description e.g water recyle project"
//                         rules={[
//                             {
//                                 required: true,
//                                 message: "Project description is required",
//                             },
//                         ]}
//                     >
//                         <Input />
//                     </Form.Item>
//                     {/* end:Description */}

//                     {/* start:photo */}
//                     <Form.Item
//                     >
//                         <div className="row">
//                      <div className="col-md-6 offset-md-3">
//                         <br /><br />

//                             <h3 className="text-white">React File Upload - Nicesnippets.com</h3>
//                             <br />
//                             <div className="form-row">
//                                 <div className="form-group col-md-6">
//                                     <label className="text-white">Select File :</label>
//                                     <input type="file" className="form-control" name="upload_file" onChange={this.handleInputChange} />
//                                 </div>
//                             </div>
//                     </div>
//                 </div>
//                     </Form.Item>
//                     {/* end:photo */}

//                     {/* start:form actions */}
//                     <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: "right" }}>
//                         <Button
//                             type="primary"
//                             htmlType="submit"
//                             style={{ marginLeft: 8 }}
//                         >
//                             Upload Photo
//                     </Button>
//                     </Form.Item>
//                     {/* end:form actions */}
//                 </Form>
//             </Form.Provider>
//             </div>
//         )  
//     }
// }

// const mapDispatchToProps = (dispatch) => ({
//     uploadPhoto: bindActionCreators(subProjectsActions.uploadPhotoStart, dispatch),

// });

// export default connect(null, mapDispatchToProps)(UploadPhotoForm);

// UploadPhotoForm.propTypes = {
//     sub_project: PropTypes.array,
//     uploadPhoto: PropTypes.func.isRequired,
// }

// UploadPhotoForm.defaultProps = {
//     sub_project: []
// }
