/* eslint react/prop-types: 0 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFlights } from '../../../actions';
import { departured, arrivals } from '../../../helpers/constants';
import filters from './style.css';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: departured };
    this.fetchFlights = this.fetchFlights.bind(this);
  }

  fetchFlights(type) {
    const { flights } = this.props;
    this.setState({ isActive: type });
    flights(type);
  }

  render() {
    const { isActive } = this.state;
    return (
      <div className={filters.wrapper}>
        <button
          className={isActive === departured ? filters.active : filters.button}
          type="button"
          onClick={() => this.fetchFlights(departured)}
        >
          вылет
        </button>
        <button
          className={isActive === arrivals ? filters.active : filters.button}
          type="button"
          onClick={() => this.fetchFlights(arrivals)}
        >
          прилет
        </button>
        <button className={filters.button} type="button">
          задерживаются
        </button>
        <button className={filters.button} type="button">
          поиск
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    flights: getFlights,
  },
  dispatch,
);

export default connect(
  null,
  mapDispatchToProps,
)(Filters);
