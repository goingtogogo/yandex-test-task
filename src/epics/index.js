import { combineEpics } from 'redux-observable';
import flightEpics from './flights';

const rootEpic = combineEpics(flightEpics);

export default rootEpic;
