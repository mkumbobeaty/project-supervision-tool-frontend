import React from 'react';
import { Doughnut } from 'react-chartjs-2';



export default class SectorChat extends React.Component {


  render() {
    const { project } = this.props;
    const { sectors } = project;

    const state = {
      labels: [sectors ? sectors.map(sector => sector.name) : "null"],
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
          data: [sectors ? sectors.map(sector => sector.details.percent) : "null"]
        }
      ]
    }
    return (
      <div className="chartDetails">
        <Doughnut
          data={state}
          options={{
            title: {
              display: true,
              text: 'Sectors',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        />
      </div>
    );
  }
}