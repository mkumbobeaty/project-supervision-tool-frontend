import { Row, Col } from "antd";
import React from "react";
import TopSummary from "../TopSummary";
import ProgressBarOverview from '../ProgressBar';

const progress = [
    {
        name: "package 1",
        complete: "60"
    },
    {
        name: "package 2",
        complete: "75"

    },
    {
        name: "package 3",
        complete: "60"
    },
    {
        name: "package 4",
        complete: "60"

    },
    {
        name: "package 5",
        complete: "70"
    },
    {
        name: "package 6",
        complete: "40"

    },
    {
        name: "package 7",
        complete: "76"

    },
    
]

const Overview = () => {
  return (
    <div className="Overview">
      <TopSummary />
      <section className="Overview-progress">
        <Row gutter={16}>
          <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
              <ProgressBarOverview 
              title="Actual Physical Progress (%)"
              item={ progress }
              bgcolor={"#286b6b"} 
              />
          </Col>

          <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
          <ProgressBarOverview 
              title="Financial Progress (%)"
              item={ progress }
              bgcolor={"#0f6788"}
              />
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Overview;
