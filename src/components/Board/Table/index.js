import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getFlights } from '../../../actions';
import { departured } from '../../../helpers/constants';
import { getDate } from '../../../helpers';

import table from './style.css';
import Loader from '../../Loader';

class Table extends React.Component {
  componentDidMount() {
    const { fetchFlights } = this.props;
    fetchFlights(departured);
  }

  render() {
    const { isFetching, error, flights } = this.props;
    return (
      <Fragment>
        {flights && flights.scheduledFlights && (
          <table className={table.wrapper}>
            <thead>
              <tr className={table.labels}>
                <th>время</th>
                <th>аэропорт</th>
                <th>рейс</th>
                <th className={table.hidden}>терминал</th>
                <th>статус</th>
              </tr>
            </thead>
            <tbody className={table.body}>
              {flights.scheduledFlights.map(flight => (
                <tr align="center" className={table.values} key={flight.referenceCode}>
                  <td>
                    {flights.request.departing
                      ? getDate(flight.departureTime)
                      : getDate(flight.arrivalTime)}
                  </td>
                  <td>
                    {flights.request.departing
                      ? flight.arrivalAirportFsCode
                      : flight.departureAirportFsCode}
                  </td>
                  <td>{`${flight.carrierFsCode} ${flight.flightNumber}`}</td>
                  <td className={table.hidden}>
                    {flight.departureTerminal || flight.arrivalTerminal}
                  </td>
                  <td>
                    {flight.isCodeshare ? (
                      <span className={table.warning}>Задерживается</span>
                    ) : (
                      'По расписанию'
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {error && (
          <div>
            Извините! Произошла ошибка
            <span role="img" aria-label="Sadman">
              😟
            </span>
            {error}
          </div>
        )}
        {isFetching && <Loader />}
      </Fragment>
    );
  }
}

const getFilteredFlights = (flights) => {
  const { searchTerm } = flights;
  const { scheduledFlights } = flights.schedule;
  const filteredFlights = scheduledFlights
    && scheduledFlights.filter(
      flight => flight.carrierFsCode.toLowerCase().includes(searchTerm.toLowerCase())
        || flight.flightNumber.includes(searchTerm)
        || `${flight.carrierFsCode} ${flight.flightNumber}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase()),
    );
  return searchTerm.length === 0 || !scheduledFlights
    ? flights.schedule
    : {
      ...flights.schedule,
      scheduledFlights: filteredFlights,
    };
};

const mapStateToProps = state => ({
  flights: getFilteredFlights(state.flights),
  isFetching: state.flights.isFetching,
  error: state.flights.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchFlights: getFlights,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Table);

Table.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  flights: PropTypes.shape({
    request: PropTypes.shape.isRequired,
    scheduledFlights: PropTypes.array,
    appendix: PropTypes.shape.isRequired,
  }).isRequired,
  fetchFlights: PropTypes.func.isRequired,
};
