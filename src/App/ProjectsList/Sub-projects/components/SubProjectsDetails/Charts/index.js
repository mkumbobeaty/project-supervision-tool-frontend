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

    console.log(dataX)

    const options = {
      animationEnabled: true,
      exportFileName: "Doughnut Chart",
      exportEnabled: true,
      animationEnabled: true,
      title: {
        text: "Sub Project Items",
        fontSize: 20,
        fontWeight: 800,
        padding: {
          bottom: 12,
        }
      },
      legend: {
        horizontalAlign: "right",
        verticalAlign: "center",
        fontSize: 12,
        cursor: "pointer",
        itemclick: explodePie
      },
      data: [{
        type: "doughnut",
        innerRadius: 90,
        showInLegend: true,
        radius: "82%",
        toolTipContent: "<b>{name}</b>:{y} (#percent%)",
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
