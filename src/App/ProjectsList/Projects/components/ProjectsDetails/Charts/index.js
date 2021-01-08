import React from 'react';
import { Doughnut} from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default class SectorChat extends React.Component {
  render() {
    return (
      <div className="chartDetails">
        <Doughnut 
          data={state}
          options={{
            title:{
              display:true,
              text:'Sectors',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    ); 
  }
}