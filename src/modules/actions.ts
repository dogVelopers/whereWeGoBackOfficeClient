import { deprecated } from 'typesafe-actions';

const { createStandardAction } = deprecated;

export const ADD_COUNTRY = 'addCountry';
export const DELETE_COUNTRY = 'deleteCountry';

export const addCountry = createStandardAction(ADD_COUNTRY)<{
  country: string;
}>();

export const deleteCountry = createStandardAction(DELETE_COUNTRY)();
