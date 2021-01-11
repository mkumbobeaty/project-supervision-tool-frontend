import React, { Component } from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts'

export default class SectorChat extends Component {

  render() {

    const { sub_project } = this.props;
    const dataX = sub_project?.sub_project_items ? sub_project?.sub_project_items.map(({ quantity, item }) => {
      return (
        { 'name': item.name, 'y': quantity, 'legendText': item.capacity, }
      )
    }) : [];

    const explodePie = (e) => {
      if (typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
        e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
      } else {
        e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
      }
      e.chart.render();
    }

    const options = {
      animationEnabled: true,
      exportFileName: "Doughnut Chart",
      exportEnabled: true,
      animationEnabled: true,
      title: {
        text: "Sub Project Item",
        fontSize: 20,

      },
      legend: {
        horizontalAlign: "right",
        verticalAlign: "center",
        fontSize: 12,
        cursor: "pointer",
        itemclick: explodePie
      },
      width: 440,
      data: [{
        type: "doughnut",
        innerRadius: 90,
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: {y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: dataX,
      }]
    }
    return (
      <div className="chartDetails">
        <CanvasJSChart options={options} />
      </div>
    )
  }
}
