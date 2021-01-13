import React, { Component } from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts'

export default class SectorChat extends Component {

  render() {

    const { project } = this.props;
    const dataX = project?.sectors ? project?.sectors.map(sector => {
      return (
        { 'name': sector.name, 'y': sector.details.percent, 'legendText': sector.name, }
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
        text: "Sectors",
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
        yValueFormatString: "#,###'%'",
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
