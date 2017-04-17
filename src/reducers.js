import { Map } from 'immutable';

import {
  FORMS_OUTSIDE_CLICK,
  FORMS_INITIALIZE,
  FORMS_UPDATE_VALUE,
  FORMS_TOGGLE_SELECT
} from './actions';

const NEW_FORM = Map({});

export function $forms( state = Map(), action ) {
  switch ( action.type ) {
    case FORMS_OUTSIDE_CLICK:
      return state.map( form => form.set( '$toggles', Map() ) );
    case FORMS_INITIALIZE:
      return state.set( action.form, NEW_FORM.merge({ $values: action.initialValues }) );
    case FORMS_UPDATE_VALUE:
      return state.update( action.form, Map(), form => form.setIn( ['$values', action.field], action.value ) );
    case FORMS_TOGGLE_SELECT:
      return state.updateIn( [action.form, '$toggles', action.field], value => !value );
    default:
      return state;
  }
}
