import React from 'react';
import { Row, Col } from 'antd';
import { LeftOutlined, RightOutlined, } from '@ant-design/icons';
import "./styles.css";

class ImageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fadedleft: true,
            fadedright: false,
            start: 0,
            finish: 2,
        }
    }

    leftClick() {
        let start = this.state.start;
        let finish = this.state.finish;
        if (start > 0 && finish > 0) {
            this.setState({
                start: start - 2,
                finish: finish - 2,
            });
        } else {
            this.setState({
                fadedleft: true
            });
        }
        this.setState({
            fadedright: false
        })
    }

    rightClick() {
        let start = this.state.start;
        let finish = this.state.finish;
        const { sub_project } = this.props;
        if (finish < sub_project?.photos.length) {
            this.setState({
                start: start + 2,
                finish: finish + 2
            });
        } else {
            this.setState({
                fadedright: true
            });
        }

        this.setState({
            fadedleft: false
        });
    }

    handleShowGallary = (image) => {
        const { handleViewImage, sub_project } = this.props
        if (sub_project?.photos.length > 0) {
            return (
                handleViewImage(image)

            )
        }
        else return "No photo uploaded"
    }

    render() {
        var startindex = this.state.start;
        var finishindex = this.state.finish;
        const fadedleft = this.state.fadedleft ? "arrow-left faded-left" : "arrow-left";
        const fadedright = this.state.fadedright ? "arrow-right faded-right" : "arrow-right";
        const { sub_project } = this.props
        return (
            <div>
                {
                    sub_project?.photos.length > 0 ? <div className="container">
                        <div className='top-nav'>
                            <h4 className='mapHeaderTitle'>Sub Project photo album</h4>
                            <h4 className='viewAllPhoto' onClick={this.handleShowGallary}> View All Photo</h4>
                        </div>
                        <Row className="slideshow ">
                            {
                                sub_project?.photos.slice(startindex, finishindex).map((image, imageindex) => {
                                    return (
                                        <Col span={12} key={imageindex}>
                                            <img className="imageSlider" src={image.url} onClick={() => this.handleShowGallary(image)} />
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                        <div className='arrows'>
                            <LeftOutlined className={fadedleft} onClick={this.leftClick.bind(this)} />
                            <RightOutlined className={fadedright} onClick={this.rightClick.bind(this)} />
                        </div>
                    </div> : <h4 className='mapHeaderTitle'>No Photo Album for this sub project</h4>
                }
            </div>

        )
    }
};

export default ImageList
