'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.middleware = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actions = require('./actions');

var defaultOptions = {
  outsideAction: _actions.FORMS_OUTSIDE_CLICK
};

var middleware = exports.middleware = function middleware(options) {
  return function (store) {
    options = _extends({}, defaultOptions, options);

    var _options = options,
        outsideAction = _options.outsideAction;

    var cancel = void 0;

    if (document) {
      document.body.addEventListener('click', function () {
        cancel = false;

        setTimeout(function () {
          return !cancel && store.dispatch({ type: outsideAction });
        }, 0);
      }, true);
    }

    return function (next) {
      return function (action) {
        if ([_actions.FORMS_CANCEL_OUTSIDE_CLICK, _actions.FORMS_TOGGLE_SELECT].indexOf(action.type) !== -1) {
          cancel = true;
        }

        return next(action);
      };
    };
  };
};