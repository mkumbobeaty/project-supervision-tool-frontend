import React, { Component } from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts'

export default class SectorChat extends Component {

  render() {

    const { project } = this.props;
    const dataX = project?.sectors ? project.sectors.map(sector => {
      return (
        { 'name': sector.name, 'y': sector.details.percent, 'legendText':sector.name,}
      )
    }) : [];
console.log(dataX)
    const options = {
      animationEnabled: true,
      title: {
        text: "Sectors",
        fontSize: 20,

      },
      legend: {
        horizontalAlign: "right",
        verticalAlign: "center",
        fontSize: 12,
      },
      width:440,
      data: [{
        type: "doughnut",
        showInLegend: true,
        radius:"85%",
        stemThickness: 2,
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
