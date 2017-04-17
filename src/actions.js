import { Map } from 'immutable';

export const FORMS_OUTSIDE_CLICK = 'FORMS_OUTSIDE_CLICK';
export const FORMS_CANCEL_OUTSIDE_CLICK = 'FORMS_CANCEL_OUTSIDE_CLICK';

export const FORMS_INITIALIZE = 'FORMS_INITIALIZE';
export const FORMS_UPDATE_VALUE = 'FORMS_UPDATE_VALUE';
export const FORMS_TOGGLE_SELECT = 'FORMS_TOGGLE_SELECT';

export function initializeForm( form, initialValues = Map() ) {
  return {
    type: FORMS_INITIALIZE,
    form,
    initialValues
  };
}

export function updateFormValue( form, field, value ) {
  return {
    type: FORMS_UPDATE_VALUE,
    form,
    field,
    value
  };
}

export function toggleFormSelect( form, field ) {
  return {
    type: FORMS_TOGGLE_SELECT,
    form,
    field
  };
}

export function cancelOutsideClick() {
  return {
    type: FORMS_CANCEL_OUTSIDE_CLICK
  };
}
