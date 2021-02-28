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

//       },
//       legend: {
//         horizontalAlign: "right",
//         verticalAlign: "center",
//         fontSize: 12,
//         cursor: "pointer",
//         itemclick: explodePie
//       },
//       width: 440,
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

const SectorChat = () => {
  var data = [
    {
      type: 'Urban Transport',
      value: 48,
    },
    {
      type: 'Other Water Supply, Sanitation and Waste Management',
      value: 29,
    },
    {
      type: 'Sub-National Government',
      value: 12,
    },
    {
      type: 'Other Transportation',
      value: 5,
    },
    {
      type: 'Other Public Administration',
      value: 3,
    },
  ];
  var config = {
    padding: 0,
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.7,
    innerRadius: 0.8,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
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
        // formatter: function formatter() {
        //   return '';
        // },
      },
    },
  };
  return <Pie {...config} />;
};

export default SectorChat;
