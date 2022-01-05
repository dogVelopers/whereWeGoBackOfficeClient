import { ActionType } from 'typesafe-actions';
import * as actions from 'modules/actions';

export type CountryAction = ActionType<typeof actions>;

export type Country = {
  countries: Array<string>;
};
