import React, { Component } from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts'

export default class SectorChat extends Component {

  render() {

    // const { project } = this.props;
    // const { sectors } = project;
    // const dataX = sectors ? sectors.map(sector => {
    //   return (
    //     { 'name': "moja", 'y': 5, 'legendText':"moja",}
    //   )
    // }) : [];
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
        dataPoints: [ {name : "moja", y: 5, legendText:"moja"}],
        
      }]
    }
    return (
      <div className="chartDetails">
        <CanvasJSChart options={options} />
      </div>
    )
  }
}
