'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$forms = $forms;

var _immutable = require('immutable');

var _actions = require('./actions');

var NEW_FORM = (0, _immutable.Map)({});

function $forms() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Map)();
  var action = arguments[1];

  switch (action.type) {
    case _actions.FORMS_OUTSIDE_CLICK:
      return state.map(function (form) {
        return form.set('$toggles', (0, _immutable.Map)());
      });
    case _actions.FORMS_INITIALIZE:
      return state.set(action.form, NEW_FORM.merge({ $values: action.initialValues }));
    case _actions.FORMS_UPDATE_VALUE:
      return state.update(action.form, (0, _immutable.Map)(), function (form) {
        return form.setIn(['$values', action.field], action.value);
      });
    case _actions.FORMS_TOGGLE_SELECT:
      return state.updateIn([action.form, '$toggles', action.field], function (value) {
        return !value;
      });
    default:
      return state;
  }
}