/* eslint react/prop-types: 0 */
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
        {flights.items && (
          <table className={table.wrapper}>
            <thead>
              <tr className={table.labels}>
                <th>время</th>
                <th>город</th>
                <th>номер рейса</th>
                <th>статус</th>
              </tr>
            </thead>
            <tbody>
              {flights.items.map(flight => (
                <tr align="center" className={table.values} key={flight.i_id}>
                  <td>{getDate(flight.t_st)}</td>
                  <td>{flight.mar2.description}</td>
                  <td>{flight.flt}</td>
                  <td>{flight.vip_status_rus}</td>
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

const mapStateToProps = state => ({
  flights: state.flights.flights,
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
