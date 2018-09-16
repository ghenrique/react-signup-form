import React, { Component } from 'react';

// Router
import AppRouter from './router/router';

class App extends Component {
	render() {
		return (
			<div className="App">
				<section className="content">
					<AppRouter />
				</section>
			</div>
		);
	}
}

export default App;
