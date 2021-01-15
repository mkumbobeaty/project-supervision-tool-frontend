import React, { Component } from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts'

const progress = [
  {
    "id": 1,
    "planned": 6,
    "actual": 9,
    "ahead": 6,
    "behind": 4,
    "created_at": "2021,01,05"
  },
  
  {
    "id": 2,
    "planned": 8,
    "actual": 5,
    "ahead": 4,
    "behind": 2,
    "created_at": "2021,01,10"
  },
  {
    "id": 3,
    "planned": 10,
    "actual": 12,
    "ahead": 9,
    "behind": 8,
    "created_at": "2021, 01,15"
  },
  {
    "id": 4,
    "planned": 7,
    "actual": 3,
    "ahead": 5,
    "behind": 1,
    "created_at": "2021,01,20"
  },
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
    const plannedData = progress ? progress.map(({created_at,planned}) => {
      return (
        { "x": new Date(created_at), y: planned  }
      )
    }) : [];
    const actualData = progress ? progress.map(({created_at,actual}) => {
      return (
        { "x": new Date(created_at), y: actual  }
      )
    }) : [];
    const aheadData = progress ? progress.map(({created_at,ahead}) => {
      return (
        { "x": new Date(created_at), y: ahead  }
      )
    }) : [];
    const behindData = progress ? progress.map(({created_at,behind}) => {
      return (
        { "x": new Date(created_at), y: behind   }
      )
    }) : [];


    const options = {
      animationEnabled: true,
      theme: "light2",
      title: {
        text: "Sub Project Progress",
        fontSize:20,
        padding: {
          bottom: 12,
        }
      },
      axisX: {
        valueFormatString: "DD MMM",
        crosshair: {
          enabled: true,
          snapToDataPoint: true
        }
      },
      axisY: {
        title: "Overall Progress Status(%)",
        titleFontSize	:15,
        margin: 20,
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
        name: "Plan",
        markerType: "square",
        xValueFormatString: "DD MMM, YYYY",
        dataPoints: plannedData
      },
      {
        type: "line",
        showInLegend: true,
        name: "Actual",
        lineDashType: "dash",
        dataPoints: actualData
      },
      {
        type: "line",
        showInLegend: true,
        name: "Ahead",
        lineDashType: "dot",
        dataPoints: aheadData
      },
      {
        type: "line",
        showInLegend: true,
        name: "Behind",
        lineDashType: "longDashDotDot",
        dataPoints: behindData
      }
    ]
    };
  
    return (
      <div className="chartDetails">
        <CanvasJSChart options={options} />
      </div>
    )
  }
}
