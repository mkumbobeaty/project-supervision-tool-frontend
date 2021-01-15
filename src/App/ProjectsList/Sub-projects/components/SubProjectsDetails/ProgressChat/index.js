import React, { Component } from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts'

const progress = [
  {
    "id": "2",
    "planned": "6",
    "actual": "9",
    "ahead": "6",
    "behind": "4",
    "created_at": "2021-01-04T19:02:06.000000Z"
  },
  {
    "id": "2",
    "planned": "7",
    "actual": "3",
    "ahead": "5",
    "behind": "1",
    "created_at": "2021-01-20T19:02:06.000000Z"
  },
  {
    "id": "3",
    "planned": "9",
    "actual": "3",
    "ahead": "4",
    "behind": "2",
    "created_at": "2021-01-10T19:02:06.000000Z"
  },
  {
    "id": "4",
    "planned": "10",
    "actual": "12",
    "ahead": "9",
    "behind": "8",
    "created_at": "2021-01-15T19:02:06.000000Z"
  }
]

const  toogleDataSeries = (e) => {
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else{
		e.dataSeries.visible = true;
  }
}

export default class ProgressChat extends Component {

  render() {

    // const { sub_project } = this.props;
    const dataX = progress ? progress.map((data) => {
      return (
        { 'name': data.planned, 'y': data.created_at }
      )
    }) : [];


    const options = {
      animationEnabled: true,
      theme: "light2",
      title: {
        text: "Site Traffic"
      },
      axisX: {
        valueFormatString: "DD MMM",
        crosshair: {
          enabled: true,
          snapToDataPoint: true
        }
      },
      axisY: {
        title: "Number of Visits",
        includeZero: true,
        crosshair: {
          enabled: true
        }
      },
      toolTip: {
        shared: true
      },
      legend: {
        cursor: "pointer",
        verticalAlign: "bottom",
        horizontalAlign: "left",
        dockInsidePlotArea: true,
        itemclick: toogleDataSeries
      },
      data: [{
        type: "line",
        showInLegend: true,
        name: "Total Visit",
        markerType: "square",
        xValueFormatString: "DD MMM, YYYY",
        color: "#F08080",
        dataPoints: [
          { x: new Date(2017, 0, 3), y: 650 },
          { x: new Date(2017, 0, 4), y: 700 },
          { x: new Date(2017, 0, 5), y: 710 },
          { x: new Date(2017, 0, 6), y: 658 },
          { x: new Date(2017, 0, 7), y: 734 },
          { x: new Date(2017, 0, 8), y: 963 },
          { x: new Date(2017, 0, 9), y: 847 },
          { x: new Date(2017, 0, 10), y: 853 },
          { x: new Date(2017, 0, 11), y: 869 },
          { x: new Date(2017, 0, 12), y: 943 },
          { x: new Date(2017, 0, 13), y: 970 },
          { x: new Date(2017, 0, 14), y: 869 },
          { x: new Date(2017, 0, 15), y: 890 },
          { x: new Date(2017, 0, 16), y: 930 }
        ]
      },
      {
        type: "line",
        showInLegend: true,
        name: "Unique Visit",
        lineDashType: "dash",
        dataPoints: [
          { x: new Date(2017, 0, 3), y: 510 },
          { x: new Date(2017, 0, 4), y: 560 },
          { x: new Date(2017, 0, 5), y: 540 },
          { x: new Date(2017, 0, 6), y: 558 },
          { x: new Date(2017, 0, 7), y: 544 },
          { x: new Date(2017, 0, 8), y: 693 },
          { x: new Date(2017, 0, 9), y: 657 },
          { x: new Date(2017, 0, 10), y: 663 },
          { x: new Date(2017, 0, 11), y: 639 },
          { x: new Date(2017, 0, 12), y: 673 },
          { x: new Date(2017, 0, 13), y: 660 },
          { x: new Date(2017, 0, 14), y: 562 },
          { x: new Date(2017, 0, 15), y: 643 },
          { x: new Date(2017, 0, 16), y: 570 }
        ]
      }]
    };
  
    return (
      <div className="chartDetails">
        <CanvasJSChart options={options} />
      </div>
    )
  }
}
