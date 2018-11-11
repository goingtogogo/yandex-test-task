/* eslint react/prop-types: 0 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFlights } from '../actions';
import { departured, arrivals } from '../helpers/constants';

const Header = props => (
  <header>
    <nav>
      <ul>
        <li>
          <button type="button" onClick={() => props.getFlights(departured)}>
            вылетающие
          </button>
        </li>
        <li>
          <button type="button" onClick={() => props.getFlights(arrivals)}>
            прилетающие
          </button>
        </li>
        <li>
          <button type="button">задержанные</button>
        </li>
        <li>
          <button type="button">поиск</button>
        </li>
      </ul>
    </nav>
  </header>
);

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getFlights,
  },
  dispatch,
);

export default connect(
  null,
  mapDispatchToProps,
)(Header);
