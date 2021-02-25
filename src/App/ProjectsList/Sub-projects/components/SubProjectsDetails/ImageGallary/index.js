import React from 'react';
import { Row, Col } from 'antd';
import { LeftOutlined, RightOutlined, } from '@ant-design/icons';
import "./styles.css";

const images = [
    {
        uid: '-1',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
        uid: '-2',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
        uid: '-3',
        name: 'image.png',
        status: 'done',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4yctby2lIykcyY_EI0qFgCSc69APnWsB4gw&usqp=CAU',
    },
    {
        uid: '-4',
        name: 'image.png',
        status: 'done',
        url: 'https://image.shutterstock.com/image-photo/closeup-nature-view-green-leaf-260nw-1722021196.jpg',
    },
    {
        uid: '-5',
        name: 'image.png',
        status: 'done',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXzQg4DiR5sc4eiY5FgQhByzdU9oukf1zlZA&usqp=CAU',
    },
]

class ImageGallary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images,
            fadedleft: true,
            fadedright: false,
            start: 0,
            finish: 2
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
        if (finish < images.length) {
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

    render() {
        var startindex = this.state.start;
        var finishindex = this.state.finish;
        const fadedleft = this.state.fadedleft ? "arrow-left faded-left" : "arrow-left";
        const fadedright = this.state.fadedright ? "arrow-right faded-right" : "arrow-right";
        return (
            <div className="container">
                <h4 className='mapHeaderTitle'>Sub Project photo album</h4>
                <Row className="slideshow ">
                    {
                        this.state.images.slice(startindex, finishindex).map((image, imageindex) => {
                            return (
                                <Col span={12} key={imageindex}>
                                    <img className="image" src={image.url} />
                                </Col>
                            )
                        })
                    }
                </Row>
                <div className='arrows'>
                    <LeftOutlined className={fadedleft} onClick={this.leftClick.bind(this)} />
                   <RightOutlined className={fadedright} onClick={this.rightClick.bind(this)} />
                </div>
            </div>
        )
    }
};

export default ImageGallary