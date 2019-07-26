import React from 'react';
import { Table } from 'reactstrap';

const WeatherTable = props => {
  if(!props.weatherList) return <div>Nothing to show</div>
  if (props.weatherList.length) {
    const currentWeather = props.weatherList;
    return <Table hover bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>Data</th>
          <th>Temperature</th>
          <th>Weather condition</th>
        </tr>
      </thead>
      <tbody>
        {currentWeather.map((item, index) => {
          let temp = Math.round((item.temperature - 273.15) * 10) / 10;
          let [date, time] = item.date.split(' ');
          let [year, month, day] = date.split('-');
          return <tr key={"weather-" + index + 1}>
            <th>{index}</th>
            <th>{`${day}.${month}.${year} ${time.slice(0, -3)}`}</th>
            <th>{temp > 0 ? "+" + temp : temp}</th>
            <th>{item.conditions}</th>
          </tr>
        })}
      </tbody>
    </Table>
  } else {
    return <div>Nothing to download</div>
  }
}

export default WeatherTable;