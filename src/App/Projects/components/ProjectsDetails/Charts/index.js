// import React, { Component } from 'react';
// import { CanvasJSChart } from 'canvasjs-react-charts'

// export default class SectorChat extends Component {

//   render() {

//     const { project } = this.props;
//     const dataX = project?.sectors ? project?.sectors.map(sector => {
//       return (
//         { 'name': sector.name, 'y': sector.details.percent, 'legendText': sector.name, }
//       )
//     }) : [];

//     const explodePie = (e) => {
//       if (typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
//         e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
//       } else {
//         e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
//       }
//       e.chart.render();
//     }

//     const options = {
//       animationEnabled: true,
//       exportFileName: "Doughnut Chart",
//       exportEnabled: true,
//       animationEnabled: true,
//       title: {
//         text: "Sectors",
//         fontSize: 20,
//         horizontalAlign: "left",
//       },
//       legend: {
//         horizontalAlign: "right",
//         verticalAlign: "center",
//         fontSize: 12,
//         cursor: "pointer",
//         itemclick: explodePie
//       },
//       width: 400,
//       data: [{
//         type: "doughnut",
//         innerRadius: 90,
//         showInLegend: true,
//         yValueFormatString: "#,###'%'",
//         dataPoints: dataX,

//       }]
//     }
//     return (
//       <div className="chartDetails">
//         <CanvasJSChart options={options} />
//       </div>
//     )
//   }
// }

import React from 'react';
import { Pie } from '@ant-design/charts';
import sectors from '../../../../../API/sectors';

const SectorChat = ({ project }) => {

  var data = project?.sectors ? project?.sectors.map(sector => {
    return (
      {
        type: sector.name,
        value: parseInt((sector.details.percent), 10)
      }
    )
  }) : [];

  var config = {
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.6,
    innerRadius: 0.85,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 0,
      },
    },
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        formatter: function formatter() {
          return '';
        },
      },
    },
  };
  return (
    <div className="chartDetails">
      <h1 className="sector_title">Sectors</h1>
      <Pie {...config} />
    </div>
  )
};

export default SectorChat;
