import React from 'react';
import PureComponent from 'react-pure-render/component';
import { connect } from 'react-redux';

import Email from './Email';
import SelectedEmail from './SelectedEmail';

class App extends PureComponent {
	render() {
		const emails = this.props.inbox.emails.map( ( email, index ) => (
			<Email
				index={ index }
				key={ email.id }
				email={ email }
			/>
		) );

		return (
			<div>
				{ emails }
				{ this.props.inbox.selectedEmail.from &&
					<SelectedEmail { ...this.props.inbox.selectedEmail } />
				}
			</div>
		);
	}
}

export default connect( state => ( { inbox: state } ) )( App );
