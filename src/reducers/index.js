import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import heros from './heros.reducer';
import hero from './hero.details.reducer';

export default combineReducers({
    routing: routerReducer,
    heros,
    hero
});
