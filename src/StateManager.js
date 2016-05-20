export default class StateManager {
	newState( changed ) {
		if ( typeof changed !== `object` || changed === null ) {
			throw new TypeError( `state must be an object. Instead got ${ typeof state } : ${ state }` );
		}
		const nextState = Object.create( this );

		for ( const prop in changed ) {
			this.makeReadOnly( nextState, changed, prop );
		}

		return nextState;
	}

	// http://stackoverflow.com/questions/20730324/how-to-make-dynamic-getter-with-defineproperty-in-javascript
	makeReadOnly( cloned, obj, prop ) {
		Object.defineProperty( cloned, prop, {
			set( val ) {
				throw new Error( `Cannot assign value '${ val }' to read only property '${ prop }'.` );
			}
			, get() {
				return obj[ prop ];
			}
			, enumerable: true
		} );
	}
}
