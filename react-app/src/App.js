import React, { Component } from 'react';

// Router
import AppRouter from './router/router';

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* .content */}
				<section className="content">
					<AppRouter />
				</section>
				{/* \ .content */}
			</div>
		);
	}
}

export default App;
