import React from 'react';
import { useState } from 'react';
// import Toolbar from '../../../components/Toolbar';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Row, Col, Timeline, Radio } from 'antd';


const Initiative = () => {
    // const handleRefresh = () => {

    // }
    const [mode, setMode] = useState('left');

    const onChange = e => {
        setMode(e.target.value);
    };
    return (
        <>
            {/* <Toolbar itemName='Initiative' onRefresh={handleRefresh} total={3} /> */}
            <Row>
                <Col span={24}>SUSTAINING SAM TREATMENT AS LIFE-SAVING NUTRITION INTERVENTION</Col>
            </Row>
            <Row>
                <Col span={6}>
                    <Row>
                        <h4> Inititative Type</h4>
                        The standard chunk of Lorem Ipsum used since the 1500s is
                        </Row>
                    <Row>
                        <h4> Description</h4>
                        1.10.33 from "de Finibus by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </Row>
                </Col>
                <Col span={6}>
                    <Row>
                        <h4> Inititative Type</h4>
                        The standard chunk  Finibus Bonorum  Finibus
                        </Row>
                    <Row>
                        <h4> Description</h4>
                        1.10.33 from "de Finibus  Finibus Bonorum
                        </Row>
                    <Row>
                        <h4> Description</h4>
                        1.10.33 from "de Finibus  Finibus Bonorum
                        </Row>
                </Col>
                <Col span={6}>
                    <Row>
                        <h4> Focal Person</h4>
                        The standard chunk  Finibus Bonorum  Finibus
                        </Row>
                    <Row>
                        <h4> Implementing actor</h4>
                        1.10.33 from "de Finibus  Finibus Bonorum
                        </Row>
                    <Row>
                        <h4> Implementing Actor Type</h4>
                        1.10.33 from "de Finibus  Finibus Bonorum
                        </Row>
                </Col>
                <Col span={6}>
                    <Row>
                        <h4> Inititative Type</h4>
                        The standard chunk  Finibus Bonorum  Finibus
                        </Row>
                    <Row>
                        <h4> Description</h4>
                        1.10.33 from "de Finibus  Finibus Bonorum
                        </Row>
                    <Row>
                        <h4> Description</h4>
                        1.10.33 from "de Finibus  Finibus Bonorum
                        </Row>
                </Col>
            </Row>
            <Row>
                <h3>PROGRESS</h3>
                <Radio.Group
                    onChange={onChange}
                    value={mode}
                    style={{
                        marginBottom: 20,
                    }}
                >
                    <Radio value="left">Left</Radio>
                    <Radio value="right">Right</Radio>
                    <Radio value="alternate">Alternate</Radio>
                </Radio.Group>
                <Timeline mode={mode} reverse >
                    <Timeline.Item label="2015-09-01">Create a services</Timeline.Item>
                    <Timeline.Item label="2015-09-01 09:12:11">Solve initial network problems</Timeline.Item>
                    <Timeline.Item>Technical testing</Timeline.Item>
                    <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
                </Timeline>
            </Row>

            <Row>
                <Col span={18}>
                    <h3>OVERVIEW</h3>
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                </Col>
                <Col span={6}>
                    <h3>UPDATES</h3>
                    <Row>
                        <h5>March 25, 2020</h5>
          in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </Row>
                    <Row>
                        <h5>March 25, 2020</h5>
          in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Initiative;

