import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron } from 'reactstrap';

import { getWeatherDetails } from '../store/actions/history/history.thunk';
import WeatherTable from '../components/share/WeatherTable';
import Spinner from '../components/share/Spinner';

class RequestHistoryDetails extends Component {
  async componentDidMount() {
    await this.props.getWeatherDetails(this.props.match.params.id);
  }

  render() {
    if(this.props.isLoading) return <Spinner />
    return (
      <React.Fragment>
        <Jumbotron>
          <h2>{this.props.cityName}</h2>
          <p>{this.props.date}</p>
        </Jumbotron>
        <WeatherTable weatherList={this.props.weatherList} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {...state.history.details}
}

export default connect(mapStateToProps, { getWeatherDetails } )(RequestHistoryDetails);