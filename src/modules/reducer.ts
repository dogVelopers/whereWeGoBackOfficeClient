import { CountryAction, Country } from 'modules/type';
import { createReducer } from 'typesafe-actions';
import { ADD_COUNTRY, DELETE_COUNTRY } from 'modules/actions';
import produce from 'immer';

const initialState: Country = {
  // 필요한 state
  countries: [],
};

const countries = createReducer<Country, CountryAction>(initialState, {
  // createReducer => state, action 에 대한 type 필요.
  [ADD_COUNTRY]: (state, action) =>
    produce(state, (draft) => {
      // daft: 기존의 state
      draft.countries.push(action.payload.country);
    }),
  [DELETE_COUNTRY]: (state, action) =>
    produce(state, (draft) => {
      draft.countries.pop();
    }),
});

export default countries;
