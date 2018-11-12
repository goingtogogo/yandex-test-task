import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getFlights, searchFlights } from '../../../actions';
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
    const { search } = this.props;
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
        <input
          className={filters.search}
          type="text"
          placeholder="&#128269; поиск"
          onChange={event => search(event.target.value)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    flights: getFlights,
    search: searchFlights,
  },
  dispatch,
);

function mapStateToProps({ flights }) {
  return { searchTerm: flights.searchTerm };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filters);

Filters.propTypes = {
  search: PropTypes.func.isRequired,
  flights: PropTypes.func.isRequired,
};
