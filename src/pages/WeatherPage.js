import React, { Component } from 'react';
import { connect } from 'react-redux';
/* global google */

import { 
  FormGroup, 
  Label, 
  Form,
} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { Table } from 'reactstrap';

import { getWeatherList } from '../store/actions/weather/weather.thunk';

class WeatherPage extends Component {
  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
  }
  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current);
    this.autocomplete.addListener('place_changed', this.getWeather);
  }

  getWeather = async () => {
    const weatherPlace = this.autocomplete.getPlace();
    const [lat, lng] = [weatherPlace.geometry.location.lat(), weatherPlace.geometry.location.lng()];
    await this.props.getWeatherList({ lat, lng });
  }

  renderInput = ({ input, lable, type, meta }) => {
    return (
      <FormGroup>
        <Label>{lable}</Label>
        <input className="form-control"ref={this.autocompleteInput} {...input} type={type} ></input>
      </FormGroup>
    )
  }

  renderTable() {
    if(this.props.weathersList.length) {
      const currentWeather = this.props.weathersList[this.props.weathersList.length - 1];
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
          {currentWeather.list.map((item, index) => {
            let temp = Math.round((item.temperature - 273.15) * 10) / 10;
            let [date, time] = item.date.split(' ');
            let [year, month, day] = date.split('-');
            return <tr key={"weather-" + index + 1}>
              <th>{ index }</th>
              <th>{ `${day}.${month}.${year} ${time.slice(0, -3)}` }</th>
              <th>{ temp > 0 ? "+" + temp : temp }</th>
              <th>{ item.conditions }</th>
            </tr>
          })}
        </tbody>
      </Table>
    } else {
      return <div>Nothing to download</div>
    }
  }

  render() {
    return (
      <React.Fragment>
        <Form onSubmit={e => e.preventDefault()}>
          <Field name="cityName" lable="City's name" type="text" component={this.renderInput} />
        </Form>
        {this.renderTable()}
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return { ...state.weather }
}

const connectedPage = connect(mapStateToProps, { getWeatherList })(WeatherPage);

export default reduxForm({form: 'cityInput'})(connectedPage);