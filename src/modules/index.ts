import { combineReducers } from 'redux';
import countries from 'modules/reducer';
import { Country } from 'modules/type';

export type RootState = {
  countries: Country;
};

const rootReducer = combineReducers({
  countries,
});

export default rootReducer;
