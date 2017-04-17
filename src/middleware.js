
import {
  FORMS_OUTSIDE_CLICK,
  FORMS_CANCEL_OUTSIDE_CLICK,
  FORMS_TOGGLE_SELECT
} from './actions';

const defaultOptions = {
  outsideAction: FORMS_OUTSIDE_CLICK
};

export const middleware = options => store => {
  options = Object.assign( {}, defaultOptions, options );

  const { outsideAction } = options;
  let cancel;

  if ( document ) {
    document.body.addEventListener( 'click', () => {
      cancel = false;

      setTimeout( () => !cancel && store.dispatch({ type: outsideAction }), 0 );
    }, true );
  }

  return next => action => {
    if ( [FORMS_CANCEL_OUTSIDE_CLICK, FORMS_TOGGLE_SELECT].indexOf( action.type ) !== -1 ) {
      cancel = true;
    }

    return next( action );
  };
}
