import React from 'react';
import PureComponent from 'react-pure-render/component';

import store from '../store';

import { deselectEmail } from '../reducer';

export default class SelectedEmail extends PureComponent {

	deselectEmail() {
		store.dispatch( deselectEmail() );
	}
	render() {
		const styles = this.getStyles();
		return (
			<div style={ styles.wrapper }>
				<h1 style={ styles.from }>{ this.props.from }</h1>
				<button onClick={ this.deselectEmail.bind( this ) }>X</button>
				<div>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem dolor enim esse, eveniet excepturi illum in libero modi nam nobis,
					nulla omnis ratione sed similique veritatis vero voluptate voluptatem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi delectus dolor et facilis
					inventore laboriosam nihil nulla, provident, quibusdam sunt tenetur ullam voluptate. Expedita facere fugiat harum nostrum quia?
				</div>
			</div>
		);
	}

	getStyles() {
		return {
			from: {
				  display: `inline-block`
				, marginRight: 15
			}
			, wrapper: {
				  margin: `15px auto`
				, width: `90%`
			}
		};
	}
}
