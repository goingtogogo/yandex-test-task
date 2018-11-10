/* eslint react/prop-types: 0 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFlights } from '../actions';

function fetchFlights(props) {
  props.getFlights();
}

const Header = props => (
  <header>
    <nav>
      <ul>
        <button type="button" onClick={() => fetchFlights(props)}>
          вылетающие
        </button>
        <li>прилетающие</li>
        <li>задержанные</li>
        <li>поиск</li>
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
