import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormGroup, Label, Input } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';

import { getWeatherList } from '../store/actions/weather.thunk';

class WeatherPage extends Component {
  getWeather = async () => {
    const response = await this.props.getWeatherList({ lat: 50, lon: 50 });

    console.log(response);
  }

  renderInput = ({ input, lable, type, meta }) => {
    return (
      <FormGroup>
        <Label>{lable}</Label>
        <Input {...input} type={type} ></Input>
      </FormGroup>
    )
  }

  render() {
    return (
      <div onClick={() => this.getWeather()}>
        <Field name="cityName" lable="City's name" type="text" component={this.renderInput} />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return { ...state }
}

const connectedPage = connect(mapStateToProps, { getWeatherList })(WeatherPage);

export default reduxForm({form: 'cityInput'})(connectedPage);

// const WeatherPage = () => {
//   return (
//     <div>WeatherPage</div>
//   )
// }

// export default WeatherPage;