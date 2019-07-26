import React, { Component } from 'react';
import { connect } from 'react-redux';
/* global google */

import { 
  FormGroup, 
  Label, 
  Form,
} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';

import WeatherTable from '../components/share/WeatherTable';
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
    if(!this.props.weathersList) {
      return <div>Nothing to download</div>
    } else {
      return <WeatherTable weatherList={this.props.weathersList.list} />
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
// const mapStateToProps = state => {
//   return { ...state.weather }
// }

const mapStateToProps = state => ({
  initialValues: state.editProfile.profile
})

const connectedPage = connect(mapStateToProps, { getWeatherList })(WeatherPage);

export default reduxForm({form: 'cityInput'})(connectedPage);