import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getWeatherHistory } from '../store/actions/history/history.thunk';
import HistoryTalbe from '../components/share/HistoryTable';


class RequestHistoryList extends Component {
  async componentDidMount() {
    await this.props.getWeatherHistory();
  }

  render() {
    return (
      <HistoryTalbe body={this.props.response} />
    )
  }
}

const mapStateToProps = state => {
  return { ...state.history }
}

export default connect(mapStateToProps, { getWeatherHistory })(RequestHistoryList);