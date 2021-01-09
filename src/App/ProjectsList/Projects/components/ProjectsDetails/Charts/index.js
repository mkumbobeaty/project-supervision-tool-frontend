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

    const option = {
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
            var dataset = data.datasets[tooltipItem.datasetIndex];
            var meta = dataset._meta[Object.keys(dataset._meta)[0]];
            var currentValue = dataset.data[tooltipItem.index];
            var percentage = parseFloat((currentValue));
            return  ' (' + percentage + '%)';
          },
          title: function(tooltipItem, data) {
            return data.labels[tooltipItem[0].index];
          }
        }
      },
      title: {
        display: true,
        text: 'Sectors',
        fontSize: 20
      },
      legend: {
        display: true,
        position: 'right'
      }
    }
    
    return (
      <div className="chartDetails">
        <Doughnut
          data={state}
          options={option}
        />
      </div>
    );
  }
}