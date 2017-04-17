'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FORMS_TOGGLE_SELECT = exports.FORMS_UPDATE_VALUE = exports.FORMS_INITIALIZE = exports.FORMS_CANCEL_OUTSIDE_CLICK = exports.FORMS_OUTSIDE_CLICK = undefined;
exports.initializeForm = initializeForm;
exports.updateFormValue = updateFormValue;
exports.toggleFormSelect = toggleFormSelect;
exports.cancelOutsideClick = cancelOutsideClick;

var _immutable = require('immutable');

var FORMS_OUTSIDE_CLICK = exports.FORMS_OUTSIDE_CLICK = 'FORMS_OUTSIDE_CLICK';
var FORMS_CANCEL_OUTSIDE_CLICK = exports.FORMS_CANCEL_OUTSIDE_CLICK = 'FORMS_CANCEL_OUTSIDE_CLICK';

var FORMS_INITIALIZE = exports.FORMS_INITIALIZE = 'FORMS_INITIALIZE';
var FORMS_UPDATE_VALUE = exports.FORMS_UPDATE_VALUE = 'FORMS_UPDATE_VALUE';
var FORMS_TOGGLE_SELECT = exports.FORMS_TOGGLE_SELECT = 'FORMS_TOGGLE_SELECT';

function initializeForm(form) {
  var initialValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _immutable.Map)();

  return {
    type: FORMS_INITIALIZE,
    form: form,
    initialValues: initialValues
  };
}

function updateFormValue(form, field, value) {
  return {
    type: FORMS_UPDATE_VALUE,
    form: form,
    field: field,
    value: value
  };
}

function toggleFormSelect(form, field) {
  return {
    type: FORMS_TOGGLE_SELECT,
    form: form,
    field: field
  };
}

function cancelOutsideClick() {
  return {
    type: FORMS_CANCEL_OUTSIDE_CLICK
  };
}