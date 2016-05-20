import StateManager from './StateManager';

const initialState = new StateManager().newState( {
	emails: [
		  { from: `mom`, message: `Saw this and thought of you!`, id: 1 }
		, { from: `bossman`, message: `Are you playing with open source instead of working again?`, id: 2 }
		, { from: `prince alotik`, message: `I am a deposed nigerian prince and with your help...`, id: 3 }
	]
	, selectedEmail: {}
} );

// Actions
const SELECT_EMAIL = `emails/SELECT_EMAIL`;
const DESELECT_EMAIL = `emails/DESELECT_EMAIL`;
const DELETE_EMAIL = `emails/DELETE_EMAIL`;

// reducer
export default function reducer( state = initialState, action ) {
	switch ( action.type ) {
	case SELECT_EMAIL:
		return state.newState( Object.assign( {}, state, { selectedEmail: action.selectedEmail } ) );
	case DESELECT_EMAIL:
		return state.newState( Object.assign( {}, state, { selectedEmail: {} } ) );
	case DELETE_EMAIL:
		return state.newState( Object.assign( {}, state, { emails: state.emails.filter( ( email, index ) => index !== action.index ) } ) );
	}
	return state;
}

// Action creators
export function selectEmail( selectedEmail ) {
	return { type: SELECT_EMAIL, selectedEmail };
}

export function deselectEmail() {
	return { type: DESELECT_EMAIL };
}

export function deleteEmail( index ) {
	return { type: DELETE_EMAIL, index };
}
